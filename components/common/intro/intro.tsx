import * as React from 'react';
import cn from 'classnames';

import styles from './intro.module.scss';

interface IntroProps {
  align?: "left" | "center"
  bottomGap?: boolean;
}

export const Intro: React.FC<IntroProps> = ({ children, bottomGap, align = "center" }) => {
  return (
    <div className={cn(styles.wrapper, bottomGap === false && styles.wrapperNoGap, align === "left" && styles.wrapperLeft)}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};
