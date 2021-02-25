import * as React from 'react';
import cn from 'classnames';

import styles from './intro.module.scss';

interface IntroProps {
  bottomGap?: boolean;
}

export const Intro: React.FC<IntroProps> = ({ children, bottomGap }) => {
  return (
    <div className={cn(styles.wrapper, bottomGap === false && styles.wrapperNoGap)}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};
