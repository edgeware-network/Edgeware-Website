import { useState } from 'react';
import { EVMDepositForm } from './evm-deposit-form';
import { EvmWithdrawForm } from './evm-withdraw-form';

export const EcosystemWidget = () => {
  const [side, setSide] = useState<'wasm' | 'evm'>('wasm');

  return (
    <section className="container mx-auto mb-40 max-w-6xl">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center text-5xl">EdgeWASM and EdgeEVM conversion</h2>
        <p className="my-4">
          You can convert your EdgeWASM tokens to EdgeEVM tokens and vice versa.
        </p>
      </div>
      <div className="my-16 mx-auto max-w-3xl rounded-lg border border-grey-800 p-8">
        <nav className="flex flex-row justify-center space-x-8">
          <button
            className={`rounded-full ${side === 'wasm' ? 'bg-grey-800' : ''} px-4 py-2 text-white`}
            onClick={() => setSide('wasm')}
          >
            Deposit to EdgeEVM
          </button>
          <button
            className={`rounded-full ${side === 'evm' ? 'bg-grey-800' : ''} px-4 py-2 text-white`}
            onClick={() => setSide('evm')}
          >
            Withdraw from EdgeEVM
          </button>
        </nav>
        <div className="my-8 max-w-3xl">
          {side === 'wasm' ? <EVMDepositForm /> : <EvmWithdrawForm />}
        </div>
      </div>
    </section>
  );
};

export default EcosystemWidget;
