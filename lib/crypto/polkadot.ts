import { spec } from '@edgeware/node-types';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { web3Accounts, web3Enable, web3FromAddress } from '@polkadot/extension-dapp';
import { TypeRegistry } from '@polkadot/types';

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
  amount: number
) => {
  const accounts = await web3Accounts();

  if (accounts.length === 0) {
    throw new Error('No accounts found');
  }

  // obtain sender address
  const senderAccount = accounts[0];
  console.log('Using first account: ', senderAccount.address);

  // prepare transfer tx
  const transfer = api.tx.balances.transfer(recipientAddress, amount);

  // get signer
  const injector = await web3FromAddress(senderAccount.address);

  // sign and send tx
  const hash = await transfer.signAndSend(senderAccount.address, { signer: injector.signer });
  return hash;
};
