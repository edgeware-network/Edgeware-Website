import * as React from 'react';

import styles from './main-promo.module.scss';

export const MainPromo: React.FC = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.colContent}>{children}</div>
      <div className={styles.colImage} />
    </div>
  );
};
