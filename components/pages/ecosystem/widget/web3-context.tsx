import React, { createContext, useState } from 'react';
import Web3 from 'web3';
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
import { initPolkadotAPI } from 'lib/crypto/polkadot';
import { AccountInfo } from '@polkadot/types/interfaces';
import { formatBalance } from '@polkadot/util';

export type Account = {
  address: string;
  networkAddress?: string;
  label: string;
  balance?: string;
};

type Network = 'mainnet' | 'testnet';

type Web3ContextType = {
  connectToEthereum: (network: Network) => Promise<boolean>;
  disconnectFromEthereum: () => Promise<void>;
  connectToPolkadot: (network: Network) => Promise<boolean>;
  disconnectFromPolkadot: () => void;
  updateBalances: (network: Network) => Promise<void>;
  ethereumAccounts: Account[];
  polkadotAccounts: Account[];
};

const Web3Context = createContext<Web3ContextType | null>(null);

const EDG_EVM_NETWORK_ID: Record<Network, number> = {
  mainnet: 2021,
  testnet: 2022,
};

const EDG_EVM_NETWORKS_EXTENSION: Record<Network, any> = {
  mainnet: {
    chainId: '0x7E5',
    chainName: 'Edgeware EdgeEVM',
    rpcUrls: ['https://edgeware-evm.jelliedowl.net/'],
    nativeCurrency: {
      name: 'Edgeware',
      symbol: 'EDG',
      decimals: 18,
    },
    blockExplorerUrls: ['https://edgscan.live/'],
  },
  testnet: {
    chainId: '0x7E6',
    chainName: 'Edgeware EdgeEVM Testnet',
    rpcUrls: ['https://beresheet-evm.jelliedowl.net/'],
    nativeCurrency: {
      name: 'Edgeware',
      symbol: 'tEDG',
      decimals: 18,
    },
    blockExplorerUrls: ['https://beresheet.edgscan.live/'],
  },
};

export const Web3ContextProvider = ({ children }) => {
  const [ethereumAccounts, setEthereumAccounts] = useState<Account[]>([]);
  const [polkadotAccounts, setPolkadotAccounts] = useState<Account[]>([]);

  const connectToEthereum = async (network: Network) => {
    console.log(`Attempting to connect with EVM wallet (${network})`);

    try {
      if ('ethereum' in window) {
        await (window as any).ethereum?.enable();
        const web3 = new Web3(Web3.givenProvider);

        // check for network
        const networkId = await web3.eth.net.getId();

        if (networkId !== EDG_EVM_NETWORK_ID[network]) {
          await tryEthereumNetworkSwitch(network);
        }

        await updateEthereumBalances(network);
        return true;
      } else {
        throw new Error('No Ethereum wallet detected');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const disconnectFromEthereum = async () => {
    console.log('Disconnecting from EVM wallet');
    try {
      const web3 = new Web3(Web3.givenProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const connectToPolkadot = async (network: Network) => {
    console.log(`Attempting to connect with Polkadot wallet (${network})`);

    try {
      if ((window as any).injectedWeb3) {
        return await updatePolkadotBalances(network);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const disconnectFromPolkadot = async () => {
    console.log('Disconnecting from Polkadot wallet');
    try {
      console.log('Done!');
    } catch (err) {
      console.error(err);
    }
  };

  const updateEthereumBalances = async (network: Network) => {
    console.log(`Attempting to update with EVM wallets (${network})`);

    try {
      if ('ethereum' in window) {
        await (window as any).ethereum?.enable();
        const web3 = new Web3(Web3.givenProvider);

        const allAccounts = await web3.eth.getAccounts();

        // get balances for accounts
        const accountsWithBalance = await Promise.all(
          allAccounts.map(async (a, index) => {
            const balanceInWei = await web3.eth.getBalance(a);
            const balanceInEDG = parseFloat(web3.utils.fromWei(balanceInWei, 'ether')).toFixed(2);

            return {
              address: a,
              label: `Metamask account #${index + 1}`,
              balance: `${balanceInEDG} EDG `,
            };
          })
        );

        setEthereumAccounts(accountsWithBalance);
        return true;
      } else {
        throw new Error('No Ethereum wallet detected');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const updatePolkadotBalances = async (network: Network) => {
    console.log(`Attempting to connect with Polkadot wallet (${network})`);
    try {
      if ((window as any).injectedWeb3) {
        const extensions = await web3Enable('Polkadot-JS Apps');
        if (extensions.length === 0) {
          throw new Error('No Polkadot wallet detected');
        }

        const api = await initPolkadotAPI(network);
        const allAccounts = await web3Accounts();

        formatBalance.setDefaults({
          decimals: 18, // adjust this to match your network
          unit: 'EDG',
        });

        const accounts = await Promise.all(
          allAccounts.map(async (a) => {
            const accountInfo = (await api.query.system.account(a.address)) as AccountInfo;
            const balance = formatBalance(accountInfo.data.free);

            return {
              address: a.address,
              networkAddress: api.createType('Address', a.address).toString(),
              label: a.meta.name,
              balance,
            };
          })
        );

        console.log({
          accounts,
        });

        setPolkadotAccounts(accounts.reverse());
        return true;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const updateBalances = async (network: Network) => {
    await Promise.all([updateEthereumBalances(network), updatePolkadotBalances(network)]);
  };

  const tryEthereumNetworkSwitch = async (network: Network) => {
    try {
      await (window as any).ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [EDG_EVM_NETWORKS_EXTENSION[network]],
      });
    } catch (err) {
      console.error(err);
    }
  };

  const contextValue = {
    connectToEthereum,
    disconnectFromEthereum,
    connectToPolkadot,
    disconnectFromPolkadot,
    updateBalances,
    ethereumAccounts,
    polkadotAccounts,
  };

  return <Web3Context.Provider value={contextValue}>{children}</Web3Context.Provider>;
};

export const useWeb3Context = () => {
  const context = React.useContext(Web3Context);
  if (context === undefined) {
    throw new Error('useWeb3Context must be used within a Web3ContextProvider');
  }
  return context;
};
