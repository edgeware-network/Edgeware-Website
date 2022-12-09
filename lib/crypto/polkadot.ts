import { spec } from '@edgeware/node-types';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { web3Accounts, web3Enable, web3FromAddress } from '@polkadot/extension-dapp';
import { TypeRegistry } from '@polkadot/types';
import BigNumber from 'bignumber.js';

export const initPolkadotAPI = async () => {
  await web3Enable('Polkadot-JS Apps');

  const polkadotUrl = 'wss://edgeware.jelliedowl.net';
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

  console.log({
    recipientAddress,
    senderAddress,
    amount,
  });

  if (accounts.length === 0) {
    throw new Error('No accounts found');
  }

  // obtain sender address
  const senderAccount = accounts.find((account) => account.address === senderAddress);
  if (!senderAccount) {
    throw new Error('Sender account not found');
  }
  console.log('Using account: ', senderAccount.address);

  // convert amount to big number
  const decimals = api.registry.chainDecimals[0];
  const bnAmount = getBigNumberAmount(amount, decimals);

  // prepare transfer tx
  const transfer = api.tx.balances.transfer(recipientAddress, bnAmount.to);

  // get signer
  const injector = await web3FromAddress(senderAccount.address);

  // sign and send tx
  const hash = await transfer.signAndSend(senderAccount.address, { signer: injector.signer });
  return hash;
};

export const getBigNumberAmount = (amount: number, chainDecimals: number) => {
  const bn = new BigNumber(amount).shiftedBy(chainDecimals);

  return bn.toNumber();
};
