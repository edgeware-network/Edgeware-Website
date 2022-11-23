import { EvmWithdraw } from './forms/evm-withdraw';

export const ToolsEVMWithdrawal = () => {
  return (
    <section id="withdraw" className="container mx-auto my-48 max-w-7xl">
      <h2 className="my-8 text-5xl">Withdraw from EVM</h2>
      <p className="my-2 max-w-prose">
        To withdraw EDGs from EdgeEVM (e.g. via Metamask) to substrate/EdgeWASM, send them to the
        algorithmically discovered `EVM withdrawal address` corresponding to your substrate/
        EdgeWASM-compatible wallets/signers [e.g. polkadot-js]. Then, you need to initiate the
        `evm.withdraw(address,value)` extrinsic/transaction from your substrate/EdgeWASM account.
        (ETA: ~ 6 + 6 sec)
        <br />
        Note: This requires wallets/signers compatible with EdgeEVM (e.g. Metamask) as well as
        substrate/EdgeWASM (e.g. polkadot-js). If you are using this tool in an EVM-only mobile dapp
        browser, you will need to perform step 2 manually.
      </p>
      <div>
        <EvmWithdraw />
      </div>
    </section>
  );
};
