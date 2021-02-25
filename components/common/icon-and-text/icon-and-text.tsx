import * as React from 'react';

import styles from './icon-and-text.module.scss';

// TODO: replace with icon-with-text component
export const IconAndText: React.FC = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
