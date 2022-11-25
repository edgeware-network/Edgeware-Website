import { Button } from 'components/common/button';
import React from 'react';

export const EVMDepositForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
            ref={null}
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect="off"
          />
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
            ref={null}
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect="off"
          />
        </label>
      </fieldset>
      <div className="py-2">
        <Button colorStyle="primary" sizing="normal" type="submit">
          Deposit tokens
        </Button>
      </div>
    </form>
  );
};
