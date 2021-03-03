import * as React from 'react';
import { Link } from '../../../common/link/link';

import styles from './link-box.module.scss';

const LINKS_GET_STARTED = {
  'Block Explorer': 'https://edgeware.subscan.io/',
  'Wallet & Governance': 'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fmainnet4.edgewa.re#/accounts',
  'Forum & Proposals': 'https://commonwealth.im/edgeware'
}

const LINKS_DEVELOP = {
  'Docs': 'https://docs.edgewa.re/',
  'Smart Contracts Workshop': 'https://contracts.edgewa.re/#/',
  'Developer Chat': 'https://t.me/edg_developers'
}

export const LinkBox: React.FC = () => {
  return (
    <div className={styles.box}>
      <h3 className={styles.headline}>Get Started</h3>
      <ul className={styles.links}>
        {Object.entries(LINKS_GET_STARTED).map(([label, url]) => (
          <li key={label}>
            <Link href={url}>{label}</Link>
          </li>
        ))}
      </ul>
      <h3 className={styles.headline}>Develop</h3>
      <ul className={styles.links}>
        {Object.entries(LINKS_DEVELOP).map(([label, url]) => (
          <li key={label}>
            <Link href={url}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
