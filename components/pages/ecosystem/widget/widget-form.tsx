import { validateEVMAddress, validateSubstrateAddress, validateTokenAmount } from 'lib/crypto';
import { processEVMDeposit } from 'lib/crypto/deposit';
import React, { useState, useEffect, useRef } from 'react';
import { useWeb3Context } from './web3-context';
import { processEVMWithdrawal } from 'lib/crypto/withdrawal';
import { WidgetTransferSelector } from './widget-transfer-selector';
import { WidgetWalletSelector } from './widget-wallet-selector';

type FormState = 'initial' | 'ready' | 'in-progress' | 'success' | 'error';

type TargetTransferType = 'deposit' | 'withdrawal';

type FormErrorsState = {
  global?: string;
  substrateAddress?: string;
  evmAddress?: string;
  amount?: string;
};

export const WidgetForm = () => {
  const [formState, setFormState] = useState<FormState>('initial');

  const [ethereumConnected, setEthereumConnected] = useState(false);
  const [polkadotConnected, setPolkadotConnected] = useState(false);
  const [targetTransferType, setTargetTransferType] = useState<TargetTransferType>('deposit');

  const [selectedPolkadotAccount, setSelectedPolkadotAccount] = useState<string>();
  const [selectedEthereumAccount, setSelectedEthereumAccount] = useState<string>();

  const [errors, setErrors] = useState<FormErrorsState>({});
  const [tx, setTx] = useState<string | null>(null);

  const { connectToEthereum, ethereumAccounts, connectToPolkadot, polkadotAccounts } =
    useWeb3Context();

  const amountInputRef = useRef<HTMLInputElement>(null);

  const handleDepositSubmit = () => {
    // reset state to ready and clear errors
    setFormState('ready');
    setErrors({});

    // get form data and validate
    const substrateAddress = selectedPolkadotAccount;
    const evmAddress = selectedEthereumAccount;
    const amount = amountInputRef.current?.value;

    // validate substrate address
    const substrateAddressValidation = validateSubstrateAddress(substrateAddress);
    if (!substrateAddressValidation.valid) {
      setErrors({
        substrateAddress: substrateAddressValidation.message,
      });

      return;
    }

    // validate EVM address
    const evmAddressValidation = validateEVMAddress(evmAddress);
    if (!evmAddressValidation.valid) {
      setErrors({
        evmAddress: evmAddressValidation.message,
      });

      return;
    }

    // validate amount
    const amountValidation = validateTokenAmount(amount);
    if (!amountValidation.valid) {
      setErrors({
        amount: amountValidation.message,
      });

      return;
    }

    // submit form and continue with processing
    setFormState('in-progress');

    async function process() {
      try {
        const result = await processEVMDeposit(evmAddress, substrateAddress, amount);
        if (result.success) {
          setFormState('success');
          setTx(result?.data?.tx);
        }
      } catch (error) {
        setErrors({
          global: error.message,
        });
        setFormState('error');
        return;
      }
    }

    process();
  };

  const handleWithdrawalSubmit = () => {
    // reset state to ready and clear errors
    setFormState('ready');
    setErrors({});

    // get form data and validate
    const substrateAddress = selectedPolkadotAccount;
    const evmAddress = selectedEthereumAccount;
    const amount = amountInputRef.current?.value;

    // validate substrate address
    const substrateAddressValidation = validateSubstrateAddress(substrateAddress);
    if (!substrateAddressValidation.valid) {
      setErrors({
        substrateAddress: substrateAddressValidation.message,
      });

      return;
    }

    // validate EVM address
    const evmAddressValidation = validateEVMAddress(evmAddress);
    if (!evmAddressValidation.valid) {
      setErrors({
        evmAddress: evmAddressValidation.message,
      });

      return;
    }

    // validate amount
    const amountValidation = validateTokenAmount(amount);
    if (!amountValidation.valid) {
      setErrors({
        amount: amountValidation.message,
      });

      return;
    }

    // submit form and continue with processing
    setFormState('in-progress');

    async function process() {
      try {
        const result = await processEVMWithdrawal(evmAddress, substrateAddress, amount);
        if (result.success) {
          setFormState('success');
          setTx(result?.data?.tx);
        }
      } catch (error) {
        console.error(error);
        setErrors({
          global: error.message,
        });
        setFormState('error');
        return;
      }
    }

    process();
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (targetTransferType === 'deposit') {
      handleDepositSubmit();
    } else {
      handleWithdrawalSubmit();
    }
  };

  const handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (polkadotConnected && ethereumConnected) {
      setFormState('ready');
    } else {
      setFormState('initial');
    }
    setTargetTransferType('deposit');
    setErrors({});
    amountInputRef.current.value = '';
  };

  const handleConnect = (type: 'polkadot' | 'ethereum') => {
    const isConnected = type === 'polkadot' ? polkadotConnected : ethereumConnected;

    if (isConnected) {
      return;
    }

    async function connect() {
      if (type === 'polkadot') {
        const result = await connectToPolkadot();
        if (result) {
          setPolkadotConnected(true);
          if (ethereumConnected) {
            setFormState('ready');
          }
        }
      } else {
        try {
          const result = await connectToEthereum();
          if (result) {
            setEthereumConnected(true);
            if (polkadotConnected) {
              setFormState('ready');
            }
          }
        } catch (error) {
          setErrors({
            ...errors,
            evmAddress: "Couldn't connect to Ethereum.",
          });
        }
      }
    }

    connect();
  };

  const handleDisconnect = (type: 'polkadot' | 'ethereum') => {
    const isConnected = type === 'polkadot' ? polkadotConnected : ethereumConnected;
    if (!isConnected) {
      return;
    }

    if (type === 'polkadot') {
      setPolkadotConnected(false);
      setSelectedPolkadotAccount(undefined);
      setFormState('initial');
    }

    if (type === 'ethereum') {
      setEthereumConnected(false);
      setSelectedEthereumAccount(undefined);
      setFormState('initial');
    }
  };

  useEffect(() => {
    if (polkadotConnected && polkadotAccounts && polkadotAccounts.length > 0) {
      setSelectedPolkadotAccount(polkadotAccounts[0].address);
    }
  }, [polkadotConnected, polkadotAccounts]);

  useEffect(() => {
    if (ethereumConnected && ethereumAccounts && ethereumAccounts.length > 0) {
      setSelectedEthereumAccount(ethereumAccounts[0].address);
    }
  }, [ethereumConnected, ethereumAccounts]);

  return (
    <div className="text-center">
      <WidgetTransferSelector
        targetTransferType={targetTransferType}
        onTargetTransferTypeChange={setTargetTransferType}
        inProgress={formState === 'in-progress'}
      />

      <div className="flex flex-row items-start justify-center space-x-16 px-8 pt-12">
        <div className="w-1/2 shrink-0">
          <WidgetWalletSelector
            type="polkadot"
            connected={polkadotConnected}
            onConnect={handleConnect}
            onDisconnect={handleDisconnect}
            accounts={polkadotAccounts}
            selectedAccount={selectedPolkadotAccount}
            setSelectedAccount={setSelectedPolkadotAccount}
          />
          {errors.substrateAddress && (
            <span className="text-sm text-red-500">{errors.substrateAddress}</span>
          )}
        </div>
        <div className="w-1/2 shrink-0">
          <WidgetWalletSelector
            type="ethereum"
            connected={ethereumConnected}
            onConnect={handleConnect}
            onDisconnect={handleDisconnect}
            accounts={ethereumAccounts}
            selectedAccount={selectedEthereumAccount}
            setSelectedAccount={setSelectedEthereumAccount}
          />
          {errors.evmAddress && <span className="text-sm text-red-500">{errors.evmAddress}</span>}
        </div>
      </div>

      <div className="mt-4 flex flex-row justify-center">
        <label className="my-4 block" htmlFor="ac-input-amount" aria-label="Amount">
          <span className="sr-only my-2 block">Deposit amount:</span>
          <input
            id="ac-input-amount"
            className="block w-64 rounded border border-grey-700 bg-grey-900 px-4 py-4 text-center disabled:opacity-50"
            type="text"
            name="input"
            required
            placeholder="Amount (EDG)"
            ref={amountInputRef}
            disabled={formState !== 'ready'}
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect="off"
          />
          {errors.amount && <span className="text-sm text-red-500">{errors.amount}</span>}
        </label>
      </div>

      <div className="mt-0">
        <button
          className="rounded bg-primary-500 p-4 px-8 text-white disabled:opacity-25"
          onClick={handleSubmit}
          disabled={formState !== 'ready'}
        >
          Transfer
        </button>
      </div>

      {formState === 'error' ? (
        <p className="pt-4 text-red-500">
          {errors.global || 'Something went wrong. Please try again.'}
        </p>
      ) : null}

      {formState === 'success' && tx && (
        <div className="pt-8">
          Transfer submitted!
          <div className="mt-2 flex justify-center">
            <a
              href={`https://edgeware.subscan.io/extrinsic/${tx}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 ml-2 rounded bg-grey-400 p-2 px-4 text-sm"
            >
              View Extrinsic on Subscan
            </a>
            <button
              className="text-blue-500 ml-2 rounded bg-grey-400 p-2 px-4 text-sm"
              onClick={handleReset}
              disabled={formState !== 'success'}
            >
              Start again
            </button>
          </div>
        </div>
      )}

      {formState === 'in-progress' && <p className="animate-pulse pt-4">Processing request...</p>}
    </div>
  );
};
