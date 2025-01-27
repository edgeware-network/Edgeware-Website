import { useTransferWidget } from './useTransferWidget';
import { WidgetNetworkSelector } from './widget-network-selector';
import { WidgetSuccess } from './widget-success';
import { WidgetTransferSelector } from './widget-transfer-selector';
import { WidgetWalletSelector } from './widget-wallet-selector';
import IconFunds from 'remixicon/icons/Finance/exchange-funds-line.svg';

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
          {state.targetTransferType === 'deposit' ? 'Deposit' : 'Withdraw'}
        </button>
      </div>
      {state.errors.amount && <span className="text-sm text-red-500">{state.errors.amount}</span>}

      {state.formState === 'error' ? (
        <>
          <p className="pt-4 text-red-500">
            {state.errors.global || 'Something went wrong. Please try again.'}
          </p>
          <button
            className="text-blue-500 ml-2 mt-2 rounded bg-grey-400 p-2 px-4 text-sm"
            onClick={handleReset}
          >
            Start again
          </button>
        </>
      ) : null}

      {state.formState === 'success' && state.tx && (
        <>
          <WidgetSuccess
            tx={state.tx}
            block={state.block}
            network={state.network}
            message={state.message}
            handleReset={handleReset}
          />
        </>
      )}

      {state.formState === 'in-progress' && (
        <p className="animate-pulse pt-4 text-center">
          <IconFunds className="-mt-1 mr-2 inline-block h-5 w-5 animate-spin fill-white" />
          <span className=" ">Processing request... Please wait!</span>
        </p>
      )}
    </div>
  );
};
