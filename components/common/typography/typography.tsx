import * as React from 'react';
import cn from 'classnames';

import styles from './typography.module.scss';

interface BaseProps {
  className?: string;
  size?: '1' | '2';
  inverted?: boolean;
  margin?: 'none' | 'small' | 'normal' | 'large'
}

type HeadlineProps = BaseProps;

export const H1: React.FC<HeadlineProps> = ({
  children,
  className,
  size = '1',
  inverted = false,
  margin = 'normal',
  ...restProps
}) => {

  const hClasses = cn(
    size === '1' && styles.h1,
    size === '2' && styles.h2,
    inverted && styles.inverted,
    margin && styles[`hmargin-${margin}`],
    className
  );

  return (
    <h1 {...restProps} className={hClasses}>
      {children}
    </h1>
  );
};

export const H2: React.FC<HeadlineProps> = ({
  children,
  className,
  size = '2',
  inverted = false,
  margin = 'normal',
  ...restProps
}) => {
  const hclass = cn(
    size === '1' && styles.h1,
    size === '2' && styles.h2,
    inverted && styles.inverted,
    margin && styles[`hmargin-${margin}`],
    className
  );

  return (
    <h2 {...restProps} className={hclass}>
      {children}
    </h2>
  );
};

interface ParagraphProps extends BaseProps {
  secondary?: boolean;
  style?: 'regular' | 'secondary' | 'lead' | 'large' | 'small';
}

export const P: React.FC<ParagraphProps> = ({
  children,
  secondary,
  className,
  style = 'regular',
  inverted = false,
  ...restProps
}) => {
  const pClass = cn(
    styles.p,
    secondary && styles.secondary,
    inverted && styles.inverted,
    styles[style],
    className
  );

  return (
    <p {...restProps} className={pClass}>
      {children}
    </p>
  );
};
