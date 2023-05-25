import { useTransferWidget } from './useTransferWidget';
import { WidgetNetworkSelector } from './widget-network-selector';
import { WidgetTransferSelector } from './widget-transfer-selector';
import { WidgetWalletSelector } from './widget-wallet-selector';

export const WidgetForm = () => {
  const {
    state,
    amountInputRef,
    setTargetTransferType,
    handleConnect,
    handleDisconnect,
    handleNetworkChange,
    handleSubmit,
    handleReset,
    polkadotAccounts,
    ethereumAccounts,
    setSelectedPolkadotAccount,
    setSelectedEthereumAccount,
  } = useTransferWidget();

  return (
    <div className="relative text-center">
      <WidgetTransferSelector
        targetTransferType={state.targetTransferType}
        onTargetTransferTypeChange={setTargetTransferType}
        inProgress={state.formState === 'in-progress'}
      />

      <div className="absolute -right-8 -top-8">
        <WidgetNetworkSelector network={state.network} onNetworkChange={handleNetworkChange} />
      </div>

      <div className="flex flex-row items-start justify-center space-x-16 px-8 pt-12">
        <div className="w-1/2 shrink-0">
          <WidgetWalletSelector
            type="polkadot"
            connected={state.polkadotConnected}
            onConnect={handleConnect}
            onDisconnect={handleDisconnect}
            accounts={polkadotAccounts}
            selectedAccount={state.selectedPolkadotAccount}
            setSelectedAccount={setSelectedPolkadotAccount}
          />
          {state.errors.substrateAddress && (
            <span className="text-sm text-red-500">{state.errors.substrateAddress}</span>
          )}
        </div>
        <div className="w-1/2 shrink-0">
          <WidgetWalletSelector
            type="ethereum"
            connected={state.ethereumConnected}
            onConnect={handleConnect}
            onDisconnect={handleDisconnect}
            accounts={ethereumAccounts}
            selectedAccount={state.selectedEthereumAccount}
            setSelectedAccount={setSelectedEthereumAccount}
          />
          {state.errors.evmAddress && (
            <span className="text-sm text-red-500">{state.errors.evmAddress}</span>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-row justify-center">
        <span className="sr-only my-2">Deposit amount:</span>
        <input
          id="ac-input-amount"
          className="appearance-text block w-48 rounded-l border border-grey-700 bg-grey-900 px-4 py-4 text-center focus:outline-none disabled:opacity-50"
          type="text"
          name="input"
          required
          placeholder="Enter amount (EDG)"
          ref={amountInputRef}
          disabled={state.formState !== 'ready'}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect="off"
        />

        <button
          className="rounded-r bg-primary-500 p-4 px-6 text-white hover:bg-primary-600 disabled:opacity-25"
          onClick={handleSubmit}
          disabled={state.formState !== 'ready'}
        >
          Transfer
        </button>
      </div>
      {state.errors.amount && <span className="text-sm text-red-500">{state.errors.amount}</span>}

      {state.formState === 'error' ? (
        <p className="pt-4 text-red-500">
          {state.errors.global || 'Something went wrong. Please try again.'}
        </p>
      ) : null}

      {state.formState === 'success' && state.tx && (
        <div className="pt-8">
          Transfer submitted!
          <div className="mt-2 flex justify-center">
            <a
              href={`https://edgeware.subscan.io/extrinsic/${state.tx}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 ml-2 rounded bg-grey-400 p-2 px-4 text-sm"
            >
              View Extrinsic on Subscan
            </a>
            <button
              className="text-blue-500 ml-2 rounded bg-grey-400 p-2 px-4 text-sm"
              onClick={handleReset}
              disabled={state.formState !== 'success'}
            >
              Start again
            </button>
          </div>
        </div>
      )}

      {state.formState === 'in-progress' && (
        <p className="animate-pulse pt-4">Processing request...</p>
      )}
    </div>
  );
};
