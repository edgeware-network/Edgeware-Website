import { ApiPromise, WsProvider } from '@polkadot/api'
import { web3Accounts, web3Enable, web3FromAddress } from '@polkadot/extension-dapp';
import { spec } from '@edgeware/node-types';

const network = 'wss://mainnet1.edgewa.re';
let api

const getApi = async () => {
  if (api) {
    return api
  }

  api = await ApiPromise.create({
    provider : new WsProvider(network),
    typesBundle: spec.typesBundle,
  });

  return api
}

export const connectWallet = async () => {
  // The address we use to use for signing, as injected
  await web3Enable("Geode"); // We want to access the PolkadotJS signer. We named it Geode and it'll trigger the PolkadotJS signer
  try {
    const currentAccount = await web3Accounts(); // We want to get all the accounts
    console.log(currentAccount)
    const address = currentAccount?.[0].address
    // finds an injector for an address
    const injector = await web3FromAddress(address);
    const api = await getApi()
    console.log('OK')
    return address
  } catch (err) {
    console.error("Error connecting to API", err )
    return
  }
}
