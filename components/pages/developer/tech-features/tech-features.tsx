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
        In Edgeware, working groups function as mission-based development orgs that are composed of
        members who share interests.
      </dd>

      <dt className={styles.dt}>
        <Icon component={IconAsterisk} />
        Rust/WASM
      </dt>
      <dd className={styles.dd}>
        In Edgeware, working groups function as mission-based development orgs that are composed of
        members who share interests.
      </dd>

      <dt className={styles.dt}>
        <Icon component={IconAsterisk} />
        Security
      </dt>
      <dd className={styles.dd}>
        In Edgeware, working groups function as mission-based development orgs that are composed of
        members who share interests.
      </dd>

      <dt className={styles.dt}>
        <Icon component={IconAsterisk} />
        NPoS
      </dt>
      <dd className={styles.dd}>
        In Edgeware, working groups function as mission-based development orgs that are composed of
        members who share interests.
      </dd>

      <dt className={styles.dt}>
        <Icon component={IconAsterisk} />
        Rust/WASM
      </dt>
      <dd className={styles.dd}>
        In Edgeware, working groups function as mission-based development orgs that are composed of
        members who share interests.
      </dd>

      <dt className={styles.dt}>
        <Icon component={IconAsterisk} />
        Security
      </dt>
      <dd className={styles.dd}>
        In Edgeware, working groups function as mission-based development orgs that are composed of
        members who share interests.
      </dd>
    </dl>
  );
};
