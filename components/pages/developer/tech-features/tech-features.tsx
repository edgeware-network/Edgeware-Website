import * as React from 'react';

import styles from './tech-features.module.scss';
import IconAsterisk from 'remixicon/icons/Editor/asterisk.svg';
import { Icon } from '../../../common/icon/icon';

export const TechFeatures: React.FC = () => {
  return (
    <dl className={styles.list}>
      <dt className={styles.dt}>
        <Icon component={IconAsterisk} />
        NPoS
      </dt>
      <dd className={styles.dd}>
        Nominated Proof of Stake consensus is one of the core pillars of true decentralization of
        Edgeware.
      </dd>

      <dt className={styles.dt}>
        <Icon component={IconAsterisk} />
        EVM/WASM
      </dt>
      <dd className={styles.dd}>
        Edgeware has the best of both worlds; EVM for compatibility and WASM for
        performance/efficiency.
      </dd>

      <dt className={styles.dt}>
        <Icon component={IconAsterisk} />
        Security via Rust
      </dt>
      <dd className={styles.dd}>
        Edgeware's core architecture is built on Parity's Substrate and written in Rust proving
        next-gen security.
      </dd>

      <dt className={styles.dt}>
        <Icon component={IconAsterisk} />
        Pallets (Treasury, Identity)
      </dt>
      <dd className={styles.dd}>
        Edgeware has integrated various modular pallets providing every features one could ask for
        at every stage.
      </dd>

      <dt className={styles.dt}>
        <Icon component={IconAsterisk} />
        Block time
      </dt>
      <dd className={styles.dd}>
        Scalability is no more a concern with 6 seconds of block generation time and 12-18 seconds
        of finality in the Edgeware network.
      </dd>

      <dt className={styles.dt}>
        <Icon component={IconAsterisk} />
        Weight based transactions
      </dt>
      <dd className={styles.dd}>
        For Edgeware's weight-based transaction(s) fees are charged before the execution, indirectly
        reducing the chances of gas wars and also transaction failures.
      </dd>
    </dl>
  );
};
