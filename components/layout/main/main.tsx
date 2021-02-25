import * as React from 'react';

import styles from './main.module.scss';

interface MainProps {
  layout?: 'simple' | 'advanced';
}

export const Main: React.FC<MainProps> = ({ children, layout }) => {
  const mainClass = layout === 'simple' ? 'container' : styles.main;
  return <main className={mainClass}>{children}</main>;
};
