import * as React from 'react';

import Icon from '../../../public/images/logo/edgeware-icon.svg';

import styles from './icon-logo.module.scss';

export const IconLogo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <Icon />
    </div>
  );
};
