import { Button } from 'components/common/button';
import { validateEVMAddress, validateSubstrateAddress, validateTokenAmount } from 'lib/crypto';
import { processEVMDeposit } from 'lib/crypto/deposit';
import React from 'react';
import { useWeb3Context } from './web3-context';
import CheckIcon from 'remixicon/icons/System/check-line.svg';
import { processEVMWithdrawal } from 'lib/crypto/withdrawal';

type FormState = 'initial' | 'connected' | 'ready' | 'in-progress' | 'success' | 'error';

type TargetTransferType = 'deposit' | 'withdrawal';

type FormErrorsState = {
  global?: string;
  sourceAddress?: string;
  targetAddress?: string;
  amount?: string;
};

export const EcosystemForm = () => {
  const [formState, setFormState] = React.useState<FormState>('initial');
  const [ethereumConnected, setEthereumConnected] = React.useState(false);
  const [polkadotConnected, setPolkadotConnected] = React.useState(false);
  const [targetTransferType, setTargetTransferType] = React.useState<TargetTransferType | null>();

  const [errors, setErrors] = React.useState<FormErrorsState>({});
  const [tx, setTx] = React.useState<string | null>(null);

  const { connectToEthereum, ethereumAccounts, connectToPolkadot, polkadotAccounts } =
    useWeb3Context();

  const sourceAddressSelectRef = React.useRef<HTMLSelectElement>(null);
  const depositAddressSelectRef = React.useRef<HTMLSelectElement>(null);
  const amountInputRef = React.useRef<HTMLInputElement>(null);

  const handleDepositSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // reset state to ready and clear errors
    setFormState('ready');
    setErrors({});

    // get form data and validate
    const targetAddress = depositAddressSelectRef.current?.value;
    const sourceAddress = sourceAddressSelectRef.current?.value;
    const amount = amountInputRef.current?.value;

    // validate source address
    const sourceAddressValidation = validateSubstrateAddress(sourceAddress);
    if (!sourceAddressValidation.valid) {
      setErrors({
        sourceAddress: sourceAddressValidation.message,
      });

      return;
    }

    // validate target address
    const targetAddressValidation = validateEVMAddress(targetAddress);
    if (!targetAddressValidation.valid) {
      setErrors({
        targetAddress: targetAddressValidation.message,
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
        const result = await processEVMDeposit(targetAddress, sourceAddress, amount);
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

  const handleWithdrawalSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // reset state to ready and clear errors
    setFormState('ready');
    setErrors({});

    // get form data and validate
    const sourceAddress = sourceAddressSelectRef.current?.value;
    const targetAddress = depositAddressSelectRef.current?.value;
    const amount = amountInputRef.current?.value;

    // validate source address (EVM)
    const sourceAddressValidation = validateEVMAddress(sourceAddress);
    if (!sourceAddressValidation.valid) {
      setErrors({
        sourceAddress: sourceAddressValidation.message,
      });

      return;
    }

    // validate target address (Substrate)
    const targetAddressValidation = validateSubstrateAddress(targetAddress);
    if (!targetAddressValidation.valid) {
      setErrors({
        targetAddress: targetAddressValidation.message,
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
        const result = await processEVMWithdrawal(sourceAddress, targetAddress, amount);
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

  const handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (polkadotConnected && ethereumConnected) {
      setFormState('connected');
    } else {
      setFormState('initial');
    }
    setTargetTransferType(null);
    setErrors({});
    depositAddressSelectRef.current.value = '';
    amountInputRef.current.value = '';
  };

  const handleEthereumConnect = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (ethereumConnected) {
      return;
    }

    async function connect() {
      const connected = await connectToEthereum();
      if (connected) {
        setEthereumConnected(true);
        if (polkadotConnected) {
          setFormState('connected');
        }
      }
    }

    connect();
  };

  const handlePolkadotConnect = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (polkadotConnected) {
      return;
    }

    async function connect() {
      const connected = await connectToPolkadot();
      if (connected) {
        setPolkadotConnected(true);
        if (ethereumConnected) {
          setFormState('connected');
        }
      }
    }

    connect();
  };

  const handleTransferTypeSelection = (type: TargetTransferType) => {
    setTargetTransferType(type);
    setFormState('ready');
  };

  if (formState === 'initial') {
    return (
      <div className="text-center">
        <p className="text-grey-400">
          To get started, lets connect with your MetaMask and Polkadot wallets.
        </p>
        <div className="flex flex-row items-center justify-center space-x-4 pt-12">
          <Button
            colorStyle="primary"
            onClick={handleEthereumConnect}
            sizing="large"
            disabled={ethereumConnected}
          >
            {ethereumConnected ? (
              <>
                <CheckIcon className="mr-2 h-6 w-6 fill-white" />
                Connected with Metamask
              </>
            ) : (
              <>Connect with Metamask</>
            )}
          </Button>

          <Button
            colorStyle="primary"
            onClick={handlePolkadotConnect}
            sizing="large"
            disabled={polkadotConnected}
          >
            {polkadotConnected ? (
              <>
                <CheckIcon className="mr-2 h-6 w-6 fill-white" />
                Connected with Polkadot
              </>
            ) : (
              <>Connect with Polkadot</>
            )}
          </Button>
        </div>
      </div>
    );
  }

  if (formState === 'connected') {
    return (
      <div className="text-center">
        <p className="text-grey-400">Now that you are connected, select the transfer type</p>
        <div className="flex flex-row items-center justify-center space-x-4 pt-12">
          <Button
            colorStyle="primary"
            onClick={() => handleTransferTypeSelection('deposit')}
            sizing="large"
          >
            Deposit to EdgeEVM
          </Button>

          <Button
            colorStyle="primary"
            onClick={() => handleTransferTypeSelection('withdrawal')}
            sizing="large"
          >
            Withdraw from EdgeEVM
          </Button>
        </div>
      </div>
    );
  }

  if (targetTransferType === 'deposit') {
    return (
      <form action="#" onSubmit={handleDepositSubmit}>
        <p className="text-grey-400">Deposit EDG tokens from native to EdgeEVM side</p>

        <fieldset>
          <label
            htmlFor="ac-input-evm-source"
            aria-label={'Source Address (Substrate)'}
            className="my-4 block"
          >
            <span className="my-2 block">Source address (Substrate):</span>
            <select
              id="ac-input-evm-source"
              className="block w-full rounded border border-grey-700 bg-grey-900 px-4 py-2 disabled:bg-grey-800"
              required
              ref={sourceAddressSelectRef}
            >
              {polkadotAccounts.map((account) => (
                <option key={account.address} value={account.address}>
                  {account.label} ({account.address})
                </option>
              ))}
            </select>
            {errors.sourceAddress && (
              <span className="text-sm text-red-500">{errors.sourceAddress}</span>
            )}
          </label>

          <label
            htmlFor="ac-input-evm-deposit"
            aria-label={'Deposit Address (EVM)'}
            className="my-4 block"
          >
            <span className="my-2 block">Deposit address (EVM):</span>
            <select
              id="ac-input-evm-deposit"
              className="block w-full rounded border border-grey-700 bg-grey-900 px-4 py-2 disabled:bg-grey-800"
              required
              ref={depositAddressSelectRef}
              placeholder={'Enter your EVM Address (e.g. 0x1234...)'}
            >
              {ethereumAccounts.map((account) => (
                <option key={account.address} value={account.address}>
                  {account.label}
                </option>
              ))}
            </select>
            {errors.targetAddress && (
              <span className="text-sm text-red-500">{errors.targetAddress}</span>
            )}
          </label>

          <label className="my-4 block" htmlFor="ac-input-withdraw-amount" aria-label="Amount">
            <span className="my-2 block">Deposit amount:</span>
            <input
              id="ac-input-withdraw-amount"
              className="block w-64 rounded border border-grey-700 bg-grey-900 px-4 py-2"
              type="text"
              name="input"
              required
              placeholder="Amount (EDG)"
              ref={amountInputRef}
              autoComplete="off"
              autoCapitalize="none"
              autoCorrect="off"
            />
            {errors.amount && <span className="text-sm text-red-500">{errors.amount}</span>}
          </label>
        </fieldset>

        {formState === 'error' ? (
          <p className="py-2 text-red-500">
            {errors.global || 'Something went wrong. Please try again.'}
          </p>
        ) : null}

        <div className="flex justify-between py-2">
          {['ready', 'error'].includes(formState) && (
            <Button colorStyle="primary" sizing="large" type="submit">
              Deposit tokens
            </Button>
          )}

          {formState === 'success' && tx && (
            <span>
              Transfer submitted{' - '}
              <a
                href={`https://edgeware.subscan.io/extrinsic/${tx}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                View on Subscan
              </a>
            </span>
          )}

          {formState === 'in-progress' && <span className="block py-4">Processing request...</span>}
          <button onClick={handleReset}>Start again</button>
        </div>
      </form>
    );
  }

  if (targetTransferType === 'withdrawal') {
    return (
      <form action="#" onSubmit={handleWithdrawalSubmit}>
        <p className="text-grey-400">Withdraw EDG tokens from EdgeEVM to native side</p>

        <fieldset>
          <label
            htmlFor="ac-input-evm-withdrawal"
            aria-label={'Source Address (EVM)'}
            className="my-4 block"
          >
            <span className="my-2 block">Source address (EVM):</span>
            <select
              id="ac-input-evm-withdrawal"
              className="block w-full rounded border border-grey-700 bg-grey-900 px-4 py-2 disabled:bg-grey-800"
              required
              ref={sourceAddressSelectRef}
              placeholder={'Enter your EVM Address (e.g. 0x1234...)'}
            >
              {ethereumAccounts.map((account) => (
                <option key={account.address} value={account.address}>
                  {account.label}
                </option>
              ))}
            </select>
            {errors.sourceAddress && (
              <span className="text-sm text-red-500">{errors.sourceAddress}</span>
            )}
          </label>

          <label
            htmlFor="ac-input-evm-deposit"
            aria-label={'Deposit Address (Substrate)'}
            className="my-4 block"
          >
            <span className="my-2 block">Deposit address (Substrate):</span>
            <select
              id="ac-input-evm-deposit"
              className="block w-full rounded border border-grey-700 bg-grey-900 px-4 py-2 disabled:bg-grey-800"
              required
              ref={depositAddressSelectRef}
            >
              {polkadotAccounts.map((account) => (
                <option key={account.address} value={account.address}>
                  {account.label} ({account.address})
                </option>
              ))}
            </select>
            {errors.targetAddress && (
              <span className="text-sm text-red-500">{errors.targetAddress}</span>
            )}
          </label>

          <label className="my-4 block" htmlFor="ac-input-withdraw-amount" aria-label="Amount">
            <span className="my-2 block">Withdraw amount:</span>
            <input
              id="ac-input-withdraw-amount"
              className="block w-64 rounded border border-grey-700 bg-grey-900 px-4 py-2"
              type="text"
              name="input"
              required
              placeholder="Amount (EDG)"
              ref={amountInputRef}
              autoComplete="off"
              autoCapitalize="none"
              autoCorrect="off"
            />
            {errors.amount && <span className="text-sm text-red-500">{errors.amount}</span>}
          </label>
        </fieldset>

        {formState === 'error' ? (
          <p className="py-2 text-red-500">
            {errors.global || 'Something went wrong. Please try again.'}
          </p>
        ) : null}

        <div className="flex justify-between py-2">
          {['ready', 'error'].includes(formState) && (
            <Button colorStyle="primary" sizing="large" type="submit">
              Withdraw tokens
            </Button>
          )}

          {formState === 'success' && tx && (
            <span>
              Transfer submitted{' - '}
              <a
                href={`https://edgeware.subscan.io/extrinsic/${tx}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                View on Subscan
              </a>
            </span>
          )}

          {formState === 'in-progress' && <span className="block py-4">Processing request...</span>}
          <button onClick={handleReset}>Start again</button>
        </div>
      </form>
    );
  }
};
