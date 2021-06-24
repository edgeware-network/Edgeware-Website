import * as React from 'react';

import { H1 } from '../typography/typography';

import styles from './static-hero.module.scss';

export const StaticHero: React.FC = ({ children }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.headlineWrapper}>
            <H1 size="1" className={styles.headline}>
              {children}
            </H1>
          </div>
        </div>
      </div>
    </div>
  );
};
