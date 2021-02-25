import * as React from 'react';
import cn from 'classnames';

import styles from './icon.module.scss';

interface IconProps {
  component: any;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ component, className }) => {
  const Icon = component;
  return <Icon fill="#fff" className={cn(styles.icon, className)} />;
};
