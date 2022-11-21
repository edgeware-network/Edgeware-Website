import React, { useRef, useState } from 'react';

import { evmConvert } from 'lib/keygen';
import { Button } from 'components/common/button';

export const EVMDepositForm = () => {
  const [formStep, setFormStep] = useState(1);
  const [substrateAddress, setSubstrateAddress] = useState(null);
  const addressInputElementRef = useRef(null);
  const amountInputElementRef = React.useRef(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const inputValue = addressInputElementRef.current.value;
    const convertedAddress = evmConvert(inputValue);

    if (convertedAddress !== 'error') {
      setFormStep(2);
      setSubstrateAddress(convertedAddress);
    }
  };

  const handleTransfer = (event: React.MouseEvent) => {
    event.preventDefault();
    const amount = amountInputElementRef.current.value;

    if (amount === '' || isNaN(+amount)) {
      alert('Please enter a valid amount');
      return;
    }
  };

  const handleReset = () => {
    setFormStep(1);
    setSubstrateAddress(null);
    addressInputElementRef.current.value = '';
  };

  return (
    <form className="max-w-2xl" action="#" onSubmit={handleSubmit}>
      <label
        htmlFor="ac-input-evm-deposit"
        aria-label={'EVM Address (e.g. 0x1234...)'}
        className="my-4 block"
      >
        <span>EVM Address:</span>
        <input
          id="ac-input-evm-deposit"
          className="w-full rounded border border-grey-700 bg-grey-900 px-4 py-2 disabled:bg-grey-800"
          type="text"
          name="input"
          required
          disabled={formStep !== 1}
          placeholder={'Enter your EVM Address (e.g. 0x1234...)'}
          ref={addressInputElementRef}
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
        />
      </label>

      {formStep === 1 && (
        <div className="py-1">
          <Button colorStyle="primary" sizing="normal" type="submit">
            Generate deposit address
          </Button>
        </div>
      )}

      {formStep === 2 && (
        <>
          <div className="py-1">
            <span>Your corresponding intermediate substrate deposit address is:</span>
            <input
              id="ac-input-substrate-deposit"
              className="w-full rounded border border-grey-700 bg-grey-900 px-4 py-2 disabled:bg-grey-800"
              type="text"
              name="input"
              required
              disabled={true}
              value={substrateAddress}
            />

            <p className="mt-4">
              Send EDGs to the above address to deposit them in your EdgeEVM account. Once the
              extrinsic/transaction gets included in a block, your EDGs will immediately reflect in
              your wallet/extension as well as on the EdgeEVM explorer. (ETA: less than 6 sec)
            </p>
          </div>

          {/* <div className="pt-4">
            <label htmlFor="ac-input-amount">
              <input
                id="ac-input-amount"
                className="mr-2 w-64 rounded border border-grey-700 bg-grey-900 px-4 py-2 disabled:bg-grey-800"
                type="text"
                name="input"
                ref={amountInputElementRef}
                placeholder="Amount of EDG to deposit"
                required
              />
            </label>
            <Button onClick={handleTransfer} colorStyle="primary" sizing="normal">
              Deposit
            </Button>
          </div> */}

          <div className="py-6">
            <p className="my-2">
              When you are done or want to start again, click the button below to reset the
              conversion tool.
            </p>
            <Button onClick={handleReset} colorStyle="white" sizing="normal">
              Start over
            </Button>
          </div>
        </>
      )}
    </form>
  );
};
