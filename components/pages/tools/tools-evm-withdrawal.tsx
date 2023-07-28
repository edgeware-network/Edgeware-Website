import Link from 'next/link';
import { EvmWithdraw } from './forms/evm-withdraw';

export const ToolsEVMWithdrawal = () => {
  return (
    <section id="withdraw" className="container mx-auto my-48 max-w-7xl">
      <h2 className="my-8 text-5xl">Withdraw from EdgeEVM</h2>
      <p className="my-2 max-w-prose">
        To withdraw EDGs from EdgeEVM (e.g. via Metamask) to substrate/EdgeWASM, send them to the
        algorithmically discovered <strong>EVM withdrawal address</strong> corresponding to your
        substrate/ EdgeWASM-compatible wallets/signers [e.g. polkadot-js]. Then, you need to
        initiate the{' '}
        <code className="rounded bg-grey-800 p-1 text-sm">evm.withdraw(address,value)</code>{' '}
        extrinsic/transaction from your substrate/EdgeWASM account. (ETA: ~ 6 + 6 sec)
      </p>
      <p className="my-2 max-w-prose">
        Note: This requires wallets/signers compatible with EdgeEVM (e.g. Metamask) as well as
        substrate/EdgeWASM (e.g. polkadot-js). If you are using this tool in an EVM-only mobile dapp
        browser, you will need to perform step 2 manually.
        <br />
        This tool is intended for users who are familiar with the EVM and the EdgeEVM. If you are a
        beginner, please use the our{' '}
        <Link href="/ecosystem#widget" className="underline">
          <a className="underline">Ecosystem Transfer Widget</a>
        </Link>{' '}
        instead.
      </p>
      <div>
        <EvmWithdraw />
      </div>
    </section>
  );
};
