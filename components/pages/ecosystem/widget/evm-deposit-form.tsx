import { Button } from 'components/common/button';
import { validateEVMAddress, validateTokenAmount } from 'lib/crypto';
import { processEVMDeposit } from 'lib/crypto/deposit';
import React from 'react';

type FormState = 'initial' | 'in-progress' | 'success' | 'error';

type FormErrorsState = {
  global?: string;
  address?: string;
  amount?: string;
};

export const EVMDepositForm = () => {
  const [formState, setFormState] = React.useState<FormState>('initial');
  const [errors, setErrors] = React.useState<FormErrorsState>({});

  const addressInputRef = React.useRef<HTMLInputElement>(null);
  const amountInputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // reset state to initial
    setFormState('initial');
    setErrors({});

    // get form data and validate
    const address = addressInputRef.current?.value;
    const amount = amountInputRef.current?.value;

    if (!address || !amount) {
      setErrors({
        global: 'Please fill in all fields and try again.',
      });
      return;
    }

    // validate address
    const addressValidation = validateEVMAddress(address);
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
        const result = await processEVMDeposit(address, amount);
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
    addressInputRef.current.value = '';
    amountInputRef.current.value = '';
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <p className="text-grey-400">
        With this form you can deposit your EdgeWASM tokens to your EdgeEVM wallet.
      </p>
      <fieldset>
        <label
          htmlFor="ac-input-evm-deposit"
          aria-label={'EVM Address (e.g. 0x1234...)'}
          className="my-4 block"
        >
          <span className="my-2 block">Deposit Address (EVM):</span>
          <input
            id="ac-input-evm-deposit"
            className="w-full rounded border border-grey-700 bg-grey-900 px-4 py-2 disabled:bg-grey-800"
            type="text"
            name="input"
            required
            placeholder={'Enter your EVM Address (e.g. 0x1234...)'}
            ref={addressInputRef}
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect="off"
          />
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
        {['initial', 'error'].includes(formState) && (
          <Button colorStyle="primary" sizing="normal" type="submit">
            Deposit tokens
          </Button>
        )}
        {formState === 'in-progress' && <span className="block py-4">Processing request...</span>}
        <button onClick={handleReset}>Reset</button>
      </div>
    </form>
  );
};
