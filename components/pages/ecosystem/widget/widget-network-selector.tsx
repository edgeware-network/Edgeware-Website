type WidgetNetworkSelectorProps = {
  network: string;
  onNetworkChange: (network: string) => void;
};

export const WidgetNetworkSelector = ({ network, onNetworkChange }: WidgetNetworkSelectorProps) => {
  const networks = ['mainnet', 'testnet'];

  return (
    <div className="mt-3 space-x-2 text-xs">
      {networks.map((n) => (
        <button
          key={n}
          className={`capitalize ${
            n === network ? 'font-semibold' : 'text-grey-500 hover:text-primary-500'
          }`}
          onClick={() => onNetworkChange(n)}
        >
          {n}
        </button>
      ))}
    </div>
  );
};
