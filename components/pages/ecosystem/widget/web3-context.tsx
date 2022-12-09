import React, { createContext, useState } from 'react';
import Web3 from 'web3';
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';

type Account = {
  address: string;
  label: string;
};

type Web3ContextType = {
  connectToEthereum: () => Promise<boolean>;
  connectToPolkadot: () => Promise<boolean>;
  ethereumAccounts: Account[];
  polkadotAccounts: Account[];
};

const Web3Context = createContext<Web3ContextType | null>(null);

export const Web3ContextProvider = ({ children }) => {
  const [ethereumAccounts, setEthereumAccounts] = useState<Account[]>([]);
  const [polkadotAccounts, setPolkadotAccounts] = useState<Account[]>([]);

  const connectToEthereum = async () => {
    try {
      if ('ethereum' in window) {
        await (window as any).ethereum?.enable();
        const web3 = new Web3(Web3.givenProvider);
        const accounts = await web3.eth.getAccounts();
        setEthereumAccounts(accounts.map((a) => ({ address: a, label: a })));
        return true;
      } else {
        throw new Error('No Ethereum wallet detected');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const connectToPolkadot = async () => {
    try {
      if ((window as any).injectedWeb3) {
        const extensions = await web3Enable('Polkadot-JS Apps');
        if (extensions.length === 0) {
          throw new Error('No Polkadot wallet detected');
        }
        const allAccounts = await web3Accounts();
        const accounts = allAccounts
          .map((a) => ({ address: a.address, label: a.meta.name }))
          .reverse();
        setPolkadotAccounts(accounts);
        return true;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const contextValue = {
    connectToEthereum,
    connectToPolkadot,
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
