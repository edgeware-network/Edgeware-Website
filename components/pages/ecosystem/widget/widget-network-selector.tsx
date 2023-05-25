type WidgetNetworkSelectorProps = {
  network: string;
  onNetworkChange: (network: string) => void;
};

export const WidgetNetworkSelector = ({ network, onNetworkChange }: WidgetNetworkSelectorProps) => {
  const networks = ['mainnet', 'testnet'];

  return (
    <div className="space-x-2 rounded-bl-md rounded-tr-md bg-grey-800 p-2 px-4 text-xs">
      {networks.map((n) => (
        <button
          key={n}
          className={`capitalize ${
            n === network ? ' font-semibold text-primary-500' : ' text-grey-500 hover:text-grey-300'
          }`}
          onClick={() => onNetworkChange(n)}
        >
          {n}
        </button>
      ))}
    </div>
  );
};
