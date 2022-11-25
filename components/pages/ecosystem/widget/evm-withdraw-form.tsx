import { Button } from 'components/common/button';
import React from 'react';

export const EvmWithdrawForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <p className="text-grey-400">
        With this form you can withdraw your EdgeEVM tokens back to your EdgeWASM wallet.
      </p>
      <fieldset>
        <label className="my-4 block" htmlFor="ac-input-withdraw-address" aria-label="Address">
          <span className="my-2 block">Withdraw address (Substrate):</span>
          <input
            id="ac-input-withdraw-address"
            className="w-full rounded border border-grey-700 bg-grey-900 px-4 py-2"
            type="text"
            name="input"
            placeholder="Substrate address (e.g. nJrsr...)"
            ref={null}
            required
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect="off"
          />
        </label>
        <label className="my-4 block" htmlFor="ac-input-withdraw-amount" aria-label="Amount">
          <span className="my-2 block">Withdrawal amount (EDG):</span>
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
          Withdraw tokens
        </Button>
      </div>
    </form>
  );
};
