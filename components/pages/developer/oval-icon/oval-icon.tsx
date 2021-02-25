import * as React from 'react';

import IconApps from 'remixicon/icons/System/apps-2-line.svg';

import { Icon } from '../../../common/icon/icon';

import styles from './oval-icon.module.scss';

export const OvalIcon = () => {
  return (
    <span className={styles.oval}>
      <Icon component={IconApps} />
    </span>
  );
};
