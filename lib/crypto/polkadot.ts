import { spec } from '@edgeware/node-types';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { web3Enable } from '@polkadot/extension-dapp';
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

export const requestTransfer = async (api: ApiPromise, address: string, amount: number) => {
  const transfer = api.tx.balances.transfer(address, amount);

  const unsub = await transfer.signAndSend(address, ({ status }) => {
    if (status.isInBlock) {
      console.log(`Successful transfer of ${amount} to ${address}`);
      unsub();
    } else {
      console.log(`Current status: ${status.type}`);
    }
  });
};
