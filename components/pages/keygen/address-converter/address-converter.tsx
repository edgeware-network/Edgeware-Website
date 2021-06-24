import * as React from 'react';

import { Button } from '../../../common/button/button';

import { evmConvert, ss58Convert, publicKeyConvert } from '../../../../lib/keygen';

import styles from './address-converter.module.scss';

type ConverterType = 'evm-address' | 'ss58-address' | 'public-key';

interface AddressConverterProps {
  type: ConverterType;
}

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

export const AddressConverter: React.FC<AddressConverterProps> = ({ type }) => {
  const [results, setResults] = React.useState({
    inputValue: '',
    data: undefined,
  });

  const inputEl = React.useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = inputEl.current.value;
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
        <div className={styles.infoBox}>
          <pre>{resultText}</pre>
        </div>
        <Button onClick={handleReset} style="secondary">
          Start over
        </Button>
      </>
    );
  }

  return (
    <form className={styles.form} action="#" onSubmit={handleSubmit}>
      <fieldset className={styles.fieldset}>
        <div className={styles.formRow}>
          <label htmlFor={`ac-input-${type}`} aria-label={FORM_LABELS[type]}>
            <input
              id={`ac-input-${type}`}
              className={styles.input}
              type="text"
              name="input"
              placeholder={FORM_LABELS[type]}
              ref={inputEl}
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
            />
          </label>
          <button type="submit" className={styles.button}>
            Convert
          </button>
        </div>
      </fieldset>
    </form>
  );
};
