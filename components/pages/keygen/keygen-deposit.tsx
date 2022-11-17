import { EVMDepositForm } from './forms/evm-deposit';

export const KeygenDeposit = () => {
  return (
    <section id="deposit" className="container mx-auto my-48 max-w-7xl">
      <h2 className="my-8 text-5xl">Deposit to EVM</h2>
      <p className="my-2 max-w-prose">
        If you have an EVM (like Metamask) address (e.g. 0x1234...), this tool converts it into
        Substrate mainnet address (e.g. i76Ux...) where you can send EDG balances from Substrate
        addresss (e.g. via polkadot-js), to be immediately deposited into your EVM address.
      </p>
      <div>
        <EVMDepositForm />
      </div>
    </section>
  );
};
