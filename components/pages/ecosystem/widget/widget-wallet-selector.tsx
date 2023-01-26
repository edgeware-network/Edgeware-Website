import React from 'react';
import type { Account } from './web3-context';
import IconArrow from 'remixicon/icons/System/arrow-down-s-line.svg';

type WidgetWalletSelectorProps = {
  accounts?: Account[];
  connected: boolean;
  type: 'polkadot' | 'ethereum';
  onConnect: (type: 'polkadot' | 'ethereum') => void;
};

export const WidgetWalletSelector = ({
  connected,
  type,
  onConnect,
  accounts,
}: WidgetWalletSelectorProps) => {
  const isOpen = false;

  if (!connected) {
    const handleConnect = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onConnect(type);
    };

    return (
      <button
        className="flex w-full flex-row items-center rounded border border-grey-700 p-4"
        onClick={handleConnect}
      >
        <span className="mr-2 h-2 w-2 rounded-full bg-grey-500"></span>
        Connect {type === 'polkadot' ? 'Polkadot' : 'Ethereum'} Wallet
      </button>
    );
  }

  if (!accounts || accounts.length === 0) {
    return <div className="w-full rounded border border-grey-700 p-4">No accounts found</div>;
  }

  return (
    <div className="flex w-full items-center rounded border border-grey-700 p-4">
      <span className="mr-2 h-2 w-2 shrink-0 rounded-full bg-green-500"></span>
      <button className="flex w-full grow flex-row items-center justify-between">
        <span className="block w-60 truncate">{accounts[0].label}</span>
        <IconArrow
          className={`ml-2 h-6 w-6 shrink-0 fill-grey-600 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          } transition-transform`}
        />
      </button>

      {/* <ul>
        {accounts.map((account) => (
          <li key={account.address}>{account.label}</li>
        ))}
      </ul> */}
    </div>
  );
};
