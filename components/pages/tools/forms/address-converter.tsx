import * as React from 'react';

import { evmConvert, ss58Convert, publicKeyConvert } from 'lib/keygen';
import { Button } from 'components/common/button';

type ConverterType = 'evm-address' | 'ss58-address' | 'public-key';

type AddressConverterProps = {
  type: ConverterType;
};

const FORM_LABELS = {
  'evm-address': 'EVM Address (e.g. 0x1234...)',
  'ss58-address': 'Testnet EDG Address (e.g. 5G7Agn...)',
  'public-key': 'Public key (e.g. 0x1234...)',
};

const FORM_CONVERTERS = {
  'evm-address': evmConvert,
  'ss58-address': ss58Convert,
  'public-key': publicKeyConvert,
};

function convertInputByType(input: string, type: ConverterType) {
  return FORM_CONVERTERS[type](input);
}

export const AddressConverter = ({ type }: AddressConverterProps) => {
  const [results, setResults] = React.useState({
    inputValue: '',
    data: undefined,
  });

  const addressInputElementRef = React.useRef(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const inputValue = addressInputElementRef.current.value;
    const data = convertInputByType(inputValue, type);
    setResults({
      inputValue,
      data,
    });
  };

  const handleReset = () => {
    setResults({
      inputValue: '',
      data: undefined,
    });
  };

  if (results.data) {
    let resultText = '';
    if (results.data === 'error') {
      resultText = 'Invalid input data!';
    } else if (type === 'evm-address') {
      resultText = `Address: ${results.inputValue}
Converted address: ${results.data}`;
    } else if (type === 'public-key') {
      resultText = `Public Key: ${results.inputValue}
Testnet address (SS58): ${results.data.testnetAddress}
Mainnet address (SS58): ${results.data.mainnetAddress}`;
    } else if (type === 'ss58-address') {
      resultText = `Address: ${results.inputValue}
Public Key: ${results.data}`;
    }

    return (
      <>
        <div className="my-4 rounded bg-grey-800 p-4">
          <pre>{resultText}</pre>
        </div>
        <Button onClick={handleReset} colorStyle="white" sizing="normal">
          Start over
        </Button>
      </>
    );
  }

  return (
    <form className="max-w-2xl" action="#" onSubmit={handleSubmit}>
      <label htmlFor={`ac-input-${type}`} aria-label={FORM_LABELS[type]} className="my-4 block">
        <input
          id={`ac-input-${type}`}
          className="w-full rounded border border-grey-700 bg-grey-900 px-4 py-2"
          type="text"
          name="input"
          required
          placeholder={FORM_LABELS[type]}
          ref={addressInputElementRef}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect="off"
        />
      </label>
      <div className="py-1">
        <Button colorStyle="primary" sizing="normal" type="submit">
          Convert
        </Button>
      </div>
    </form>
  );
};
