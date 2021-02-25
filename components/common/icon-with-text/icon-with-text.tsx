import * as React from 'react';
import { Icon } from '../icon/icon';

import styles from './icon-with-text.module.scss';

interface IconWithTextProps {
  headline: string;
  iconComponent: any;
}

export const IconWithText: React.FC<IconWithTextProps> = ({
  children,
  iconComponent,
  headline,
}) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.icon}>
        <Icon component={iconComponent} />
      </span>
      <div className={styles.content}>
        <strong className={styles.headline}>{headline}</strong>
        <p>{children}</p>
      </div>
    </div>
  );
};
