import * as React from 'react';
import { Button } from 'components/common/button';

import { generateKeyPair, KeyPairData } from '../../../../lib/keygen';

type KeyPairGeneratorState = {
  generated: boolean;
  keypairData?: KeyPairData;
};

function getFormattedData(keypairData: KeyPairData): string {
  const { phrase, publicKey, testnetAddress, mainnetAddress } = keypairData;

  return `Mnemonic phrase: ${phrase}
Public key (hex): ${publicKey}
Testnet address (SS58): ${testnetAddress}
Mainnet address (SS58): ${mainnetAddress}
`;
}

export const KeyPairGenerator = () => {
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
        <div className="my-4 rounded bg-grey-700 p-4">
          <pre>{getFormattedData(results.keypairData)}</pre>
        </div>
        <p className="my-4">
          <strong>
            You've generated a public key and mnemonic. Save the mnemonic to a secure offline
            location!
            <br />
            If you don't remember your mnemonic, you won't be able to claim your EDG.
          </strong>
        </p>
        <Button onClick={handleReset} colorStyle="white" sizing="normal">
          Start over
        </Button>
      </>
    );
  }

  return (
    <div className="my-8">
      <Button onClick={handleClick} colorStyle="primary" sizing="normal">
        Generate key pair
      </Button>
    </div>
  );
};
