import * as React from 'react';
import { Link } from '../../../common/link/link';

import styles from './link-box.module.scss';

export const LinkBox: React.FC = () => {
  return (
    <div className={styles.box}>
      <h3 className={styles.headline}>Get Started</h3>
      <ul className={styles.links}>
        <li>
          <Link href="https://docs.edgewa.re/why-develop-on-edgeware">Why Build on Edgeware</Link>
        </li>
        <li>
          <Link href="https://docs.edgewa.re/">Developer Docs</Link>
        </li>
        <li>
          <Link href="https://edgeware.subscan.io/">Blocks Explorer</Link>
        </li>
      </ul>

      <h3 className={styles.headline}>Develop</h3>
      <ul className={styles.links}>
        <li>
          <Link href="https://docs.edgewa.re/contribute-and-engage/develop/edgeware-core">
            Edgeware Core
          </Link>
        </li>
        <li>
          <Link href="https://docs.edgewa.re/contribute-and-engage/develop/smart-contracts">
            Smart Contracts
          </Link>
        </li>
        <li>
          <Link href="https://docs.edgewa.re/contribute-and-engage/develop/substrate">
            Substrate
          </Link>
        </li>
      </ul>
    </div>
  );
};
