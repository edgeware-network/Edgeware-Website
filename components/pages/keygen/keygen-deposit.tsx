import { AddressConverter } from './forms/address-converter';

export const KeygenDeposit = () => {
  return (
    <section id="convert-evm" className="container mx-auto my-48">
      <h2 className="my-8 text-5xl">Deposit to EVM</h2>
      <p className="my-2 max-w-prose">
        If you have an Metamask address (e.g. 0x1234...), this tool converts it into a mainnet
        address (e.g. i76Ux...) where you can send balances from polkadot-js, to be immediately
        deposited into Metamask.
      </p>
      <div>
        <AddressConverter type="evm-address" />
      </div>
    </section>
  );
};
