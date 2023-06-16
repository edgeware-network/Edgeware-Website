import type { Network } from './useTransferWidget';

type WidgetSuccessProps = {
  tx: string;
  block: string;
  handleReset: (e: any) => void;
  network: Network;
};

export const WidgetSuccess = ({ tx, block, handleReset, network }: WidgetSuccessProps) => {
  const rpcByNetwork = {
    mainnet: 'wss://beresheet.jelliedowl.net',
    testnet: 'wss://beresheet.jelliedowl.net',
  };

  const rpc = encodeURI(rpcByNetwork[network]);

  return (
    <div className="pt-8">
      Transfer submitted!
      <div className="mt-2 flex justify-center">
        {network === 'mainnet' && (
          <a
            href={`https://edgeware.subscan.io/extrinsic/${tx}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 ml-2 rounded bg-grey-400 p-2 px-4 text-sm"
          >
            View Extrinsic on Subscan
          </a>
        )}

        {block && (
          <a
            href={`https://www.edgeware.app/?rpc=${rpc}#/explorer/query/${block}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 ml-2 rounded bg-grey-400 p-2 px-4 text-sm"
          >
            View Block details on EdgeApps
          </a>
        )}

        <button
          className="text-blue-500 ml-2 rounded bg-grey-400 p-2 px-4 text-sm"
          onClick={handleReset}
        >
          Start again
        </button>
      </div>
    </div>
  );
};
