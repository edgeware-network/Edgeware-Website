import { EVMDepositForm } from './forms/evm-deposit';

export const KeygenDeposit = () => {
  return (
    <section id="deposit" className="container mx-auto my-48 max-w-7xl">
      <h2 className="my-8 text-5xl">Deposit to EVM</h2>
      <p className="my-2 max-w-prose">
        This tool helps you to find the algorithmically discovered `intermediate substrate address`
        (e.g. i76Ux...) corresponding to your EVM address (e.g. 0x1234...). You can use that
        intermediate substrate address to send EDGs from your substrate/ EdgeWASM-compatible
        wallets/signers (e.g. via polkadot-js) to access/operate them from the EdgeEVM-compatible
        wallets/signers (e.g. via Metamask).
      </p>
      <div>
        <EVMDepositForm />
      </div>
    </section>
  );
};
