import * as React from 'react';

import styles from './icon-card.module.scss';

export const IconCardList: React.FC = ({ children }) => {
  return (
    <div className={styles.list}>
      {React.Children.map(children, (child) => (
        <div className={styles.item}>{child}</div>
      ))}
    </div>
  );
};
