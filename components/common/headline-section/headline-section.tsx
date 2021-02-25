import * as React from 'react';
import cn from 'classnames';

import styles from './headline-section.module.scss';

interface HeadlineSectionProps {
  center?: boolean;
}

export const HeadlineSection: React.FC<HeadlineSectionProps> = ({ center, children }) => {
  return <div className={cn(styles.headlineSection, center && styles.center)}>{children}</div>;
};
