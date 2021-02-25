import * as React from 'react';

import styles from './header-and-text.module.scss';

interface HeaderAndTextProps {
  headline: string;
}

export const HeaderAndText: React.FC<HeaderAndTextProps> = ({ headline, children }) => {
  return (
    <div className={styles.box}>
      <strong className={styles.headline}>{headline}</strong>
      <p className={styles.text}>{children}</p>
    </div>
  );
};

export const HeaderAndTextList: React.FC = ({ children }) => {
  return (
    <div className={styles.list}>
      {React.Children.map(children, (child) => (
        <div className={styles.item}>{child}</div>
      ))}
    </div>
  );
};
