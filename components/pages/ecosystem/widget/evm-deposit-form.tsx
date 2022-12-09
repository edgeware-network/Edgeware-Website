import { Button } from 'components/common/button';
import { validateEVMAddress, validateTokenAmount } from 'lib/crypto';
import { processEVMDeposit } from 'lib/crypto/deposit';
import React from 'react';
import { useWeb3Context } from './web3-context';
import CheckIcon from 'remixicon/icons/System/check-line.svg';

type FormState = 'initial' | 'connected' | 'in-progress' | 'success' | 'error';

type FormErrorsState = {
  global?: string;
  address?: string;
  amount?: string;
};

export const EVMDepositForm = () => {
  const [formState, setFormState] = React.useState<FormState>('initial');
  const [ethereumConnected, setEthereumConnected] = React.useState<boolean>(false);
  const [polkadotConnected, setPolkadotConnected] = React.useState<boolean>(false);

  const [errors, setErrors] = React.useState<FormErrorsState>({});
  const [tx, setTx] = React.useState<string | null>(null);

  const { connectToEthereum, ethereumAccounts, connectToPolkadot, polkadotAccounts } =
    useWeb3Context();

  const depositAddressSelectRef = React.useRef<HTMLSelectElement>(null);
  const sourceAddressSelectRef = React.useRef<HTMLSelectElement>(null);
  const amountInputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // reset state to initial
    setFormState('initial');
    setErrors({});

    // get form data and validate
    const targetAddress = depositAddressSelectRef.current?.value;
    const sourceAddress = sourceAddressSelectRef.current?.value;
    const amount = amountInputRef.current?.value;

    if (!targetAddress || !amount) {
      setErrors({
        global: 'Please fill in all fields and try again.',
      });
      return;
    }

    // validate address
    const addressValidation = validateEVMAddress(targetAddress);
    if (!addressValidation.valid) {
      setErrors({
        address: addressValidation.message,
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

  const handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setFormState('initial');
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

  if (formState === 'initial') {
    return (
      <div className="text-center">
        <p className="text-grey-400">
          With this form you can deposit your EdgeWASM tokens to your EdgeEVM wallet.
          <br />
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

          <Button colorStyle="primary" onClick={handlePolkadotConnect} sizing="large">
            Connect with Polkadot
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form action="#" onSubmit={handleSubmit}>
      <p className="text-grey-400">
        With this form you can deposit your EdgeWASM tokens to your EdgeEVM wallet.
      </p>

      <fieldset>
        <label
          htmlFor="ac-input-evm-deposit"
          aria-label={'Deposit Address (EVM)'}
          className="my-4 block"
        >
          <span className="my-2 block">Deposit Address (EVM):</span>
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
          {errors.address && <span className="text-sm text-red-500">{errors.address}</span>}
        </label>

        <label
          htmlFor="ac-input-evm-source"
          aria-label={'Source Address (EDG)'}
          className="my-4 block"
        >
          <span className="my-2 block">Source Address (EDG):</span>
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
          {errors.address && <span className="text-sm text-red-500">{errors.address}</span>}
        </label>

        <label className="my-4 block" htmlFor="ac-input-withdraw-amount" aria-label="Amount">
          <span className="my-2 block">Deposit amount:</span>
          <input
            id="ac-input-withdraw-amount"
            className="w-full rounded border border-grey-700 bg-grey-900 px-4 py-2"
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
        {['connected', 'error'].includes(formState) && (
          <Button colorStyle="primary" sizing="normal" type="submit">
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
        <button onClick={handleReset}>Reset</button>
      </div>
    </form>
  );
};
