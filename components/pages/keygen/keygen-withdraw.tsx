import { EvmWithdraw } from './forms/evm-withdraw';

export const KeygenWithdraw = () => {
  return (
    <section id="withdraw-evm" className="container mx-auto my-48 max-w-7xl">
      <h2 className="my-8 text-5xl">Withdraw from EVM</h2>
      <p className="my-2 max-w-prose">
        To withdraw from Metamask to polkadot-js, first send EDG to the withdraw address
        corresponding to your polkadot-js address. Then, you must execute an withdraw transaction
        from that address.
        <br />
        Note: This requires both Metamask (or another compatible wallet) and polkadot-js.
      </p>
      <div>
        <EvmWithdraw />
      </div>
    </section>
  );
};
