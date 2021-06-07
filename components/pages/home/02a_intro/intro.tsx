import * as React from 'react';

import styles from './intro.module.scss';

export const Intro: React.FC = ({ children }) => {
  return (
    <div className={styles.wrapper} >
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};
