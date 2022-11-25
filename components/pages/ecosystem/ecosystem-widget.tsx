import { useState } from 'react';
import { EVMDepositForm } from '../tools/forms/evm-deposit';
import { EvmWithdraw } from '../tools/forms/evm-withdraw';

export const EcosystemWidget = () => {
  const [side, setSide] = useState<'wasm' | 'evm'>('wasm');

  return (
    <section className="container mx-auto mb-80 max-w-6xl">
      <h2 className="text-center text-5xl">EdgeWASM and EdgeEVM conversion</h2>
      <div className="my-16">
        <nav className="flex flex-row justify-center space-x-8">
          <button
            className={`rounded-t-md ${side === 'wasm' ? 'bg-grey-800' : ''} px-4 py-2 text-white`}
            onClick={() => setSide('wasm')}
          >
            Deposit to EdgeEVM
          </button>
          <button
            className={`rounded-t-md ${side === 'evm' ? 'bg-grey-800' : ''} px-4 py-2 text-white`}
            onClick={() => setSide('evm')}
          >
            Withdraw from EdgeEVM
          </button>
        </nav>
        <div className="mx-auto max-w-2xl rounded-md bg-grey-800 p-8">
          {side === 'wasm' ? <EVMDepositForm /> : <EvmWithdraw />}
        </div>
      </div>
    </section>
  );
};
