import * as React from 'react';
import Image from 'next/image';

import styles from './token-wallet.module.scss';

interface TokenWalletProps {
  headline: string;
}

export const TokenWallet: React.FC<TokenWalletProps> = ({ headline }) => {
  return (
    <div className={styles.walletBox}>
      <h4 className={styles.walletHeadline}>{headline}</h4>

      <div className={styles.walletLinks}>
        <a href="https://polkadot.js.org/apps/" className={styles.walletLink}>
          <img
            src="/images/home/token/logo-polkadot.png"
            // layout="fixed"
            width="40"
            height="55"
            alt="Polkadot{.js}"
            loading="lazy"
          />
        </a>
        <a href="https://mathwallet.org/en-us/" className={styles.walletLink}>
          <img
            src="/images/home/token/logo-mathwallet.png"
            // layout="fixed"
            width="96"
            height="53"
            alt="Math Wallet"
            loading="lazy"
          />
        </a>
      </div>
      <span className={styles.hint}>More wallets coming soon</span>
    </div>
  );
};
