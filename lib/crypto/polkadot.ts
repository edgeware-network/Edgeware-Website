import { spec } from '@edgeware/node-types';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { web3Accounts, web3Enable, web3FromAddress } from '@polkadot/extension-dapp';
import { TypeRegistry } from '@polkadot/types';
import BigNumber from 'bignumber.js';

type Network = 'mainnet' | 'testnet';

const getNetworkUrl = (network: Network) => {
  return network === 'testnet' ? 'wss://beresheet.jelliedowl.net' : 'wss://edgeware.jelliedowl.net';
};

export const initPolkadotAPI = async (network: Network) => {
  await web3Enable('Polkadot-JS Apps');

  const polkadotUrl = getNetworkUrl(network);
  const registry = new TypeRegistry();

  const api = await new ApiPromise({
    provider: new WsProvider(polkadotUrl),
    registry,
    ...spec,
  }).isReady;

  return api;
};

export const requestTransfer = async (
  api: ApiPromise,
  recipientAddress: string,
  senderAddress: string,
  amount: number
) => {
  const accounts = await web3Accounts();

  if (accounts.length === 0) {
    throw new Error('No accounts found');
  }

  // obtain sender address
  const senderAccount = accounts.find((account) => account.address === senderAddress);
  if (!senderAccount) {
    throw new Error('Sender account not found');
  }

  // convert amount to big number
  const decimals = api.registry.chainDecimals[0];
  const bnAmount = getBigNumberAmount(amount, decimals);

  // prepare transfer tx
  const transfer = api.tx.balances.transfer(recipientAddress, bnAmount);

  // get signer
  const injector = await web3FromAddress(senderAccount.address);

  const { promise, resolve } = (() => {
    let _resolve: any;
    const promise = new Promise<any>((resolve) => {
      _resolve = resolve;
    });
    return { promise, resolve: _resolve };
  })();

  transfer
    .signAndSend(
      senderAccount.address,
      { signer: injector.signer },
      ({ status, events, dispatchError }) => {
        console.log(`Transaction status: ${status.type}`);

        if (status.isInBlock) {
          console.log(`Included in block with hash ${status.asInBlock}`);
          if (dispatchError) {
            if (dispatchError.isModule) {
              const decoded = api.registry.findMetaError(dispatchError.asModule);
              const { name, section } = decoded;
              console.log(`${section}.${name}}`);
            } else {
              console.log(dispatchError.toString());
            }
          } else {
            for (const {
              event: { data, method, section },
            } of events) {
              console.log(`\t'${section}.${method}':: ${data}`);
            }
          }
          resolve({ blockHash: status.asInBlock, txHash: transfer.hash });
        }
      }
    )
    .catch((error: Error) => {
      console.log(':( transaction failed', error);
      resolve({ blockHash: '', txHash: '', error: error.message });
    });

  return promise;
};

export const requestEVMWithdrawal = async (
  api: ApiPromise,
  evmAddress: string,
  senderAddress: string,
  amount: number
) => {
  const accounts = await web3Accounts();

  if (accounts.length === 0) {
    throw new Error('No accounts found');
  }

  // obtain sender address
  const senderAccount = accounts.find((account) => account.address === senderAddress);
  if (!senderAccount) {
    throw new Error('Sender account not found');
  }

  // convert amount to big number
  const decimals = api.registry.chainDecimals[0];
  const bnAmount = getBigNumberAmount(amount, decimals);

  // get signer
  const injector = await web3FromAddress(senderAccount.address);

  // prepare withdrawal tx
  const withdrawal = api.tx.evm.withdraw(`0x${evmAddress}`, bnAmount);

  // sign and send tx
  const { promise, resolve } = (() => {
    let _resolve: any;
    const promise = new Promise<any>((resolve) => {
      _resolve = resolve;
    });
    return { promise, resolve: _resolve };
  })();

  withdrawal
    .signAndSend(
      senderAccount.address,
      { signer: injector.signer },
      ({ status, events, dispatchError }) => {
        console.log(`Transaction status: ${status.type}`);

        if (status.isInBlock) {
          console.log(`Included in block with hash ${status.asInBlock}`);
          if (dispatchError) {
            if (dispatchError.isModule) {
              const decoded = api.registry.findMetaError(dispatchError.asModule);
              const { name, section } = decoded;
              console.log(`${section}.${name}}`);
            } else {
              console.log(dispatchError.toString());
            }
          } else {
            for (const {
              event: { data, method, section },
            } of events) {
              console.log(`\t'${section}.${method}':: ${data}`);
            }
          }
          resolve({ blockHash: status.asInBlock, txHash: transfer.hash });
        }
      }
    )
    .catch((error: Error) => {
      console.log(':( transaction failed', error);
      resolve({ blockHash: '', txHash: '', error: error.message });
    });

  return promise;
};

export const getBigNumberAmount = (amount: number, chainDecimals: number) => {
  const bn = new BigNumber(amount).shiftedBy(chainDecimals);

  return bn.toString();
};
