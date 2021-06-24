import * as React from 'react';

import { Button } from '../../../common/button/button';

import { generateKeyPair, KeyPairData } from '../../../../lib/keygen';
import { P } from '../../../common/typography/typography';

import styles from './keypair-generator.module.scss';

interface KeyPairGeneratorState {
  generated: boolean;
  keypairData?: KeyPairData;
}

function getFormattedData(keypairData: KeyPairData): string {
  const { phrase, publicKey, testnetAddress, mainnetAddress } = keypairData;

  return `Mnemonic phrase: ${phrase}
Public key (hex): ${publicKey}
Testnet address (SS58): ${testnetAddress}
Mainnet address (SS58): ${mainnetAddress}
`;
}

export const KeyPairGenerator: React.FC = () => {
  const [results, setResults] = React.useState<KeyPairGeneratorState>({
    generated: false,
  });

  const handleClick = () => {
    const keypairData = generateKeyPair();

    setResults({
      generated: true,
      keypairData,
    });
  };

  const handleReset = () => {
    setResults({
      generated: false,
      keypairData: undefined,
    });
  };

  if (results.generated) {
    return (
      <>
        <div className={styles.infoBox}>
          <pre>{getFormattedData(results.keypairData)}</pre>
        </div>
        <P>
          <strong>
            You've generated a public key and mnemonic. Save the mnemonic to a secure offline
            location!
            <br />
            If you don't remember your mnemonic, you won't be able to claim your EDG.
          </strong>
        </P>
        <Button onClick={handleReset} style="secondary">
          Start over
        </Button>
      </>
    );
  }

  return (
    <div>
      <Button onClick={handleClick}>Generate key pair</Button>
    </div>
  );
};
