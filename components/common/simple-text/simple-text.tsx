import * as React from 'react';

import styles from './simple-text.module.scss';

export const SimpleText: React.FC = ({ children }) => {
  return (
    <div className={styles.simpleText}>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};
