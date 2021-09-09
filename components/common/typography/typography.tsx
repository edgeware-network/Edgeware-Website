import * as React from 'react';
import cn from 'classnames';

import styles from './typography.module.scss';

interface BaseProps {
  className?: string;
  size?: '1' | '2' | '3';
  inverted?: boolean;
  margin?: 'none' | 'small' | 'normal' | 'large';
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
  const hClass = cn(
    styles[`h${size}`],
    inverted && styles.inverted,
    margin && styles[`hmargin-${margin}`],
    className
  );

  return (
    <h1 {...restProps} className={hClass}>
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
  const hClass = cn(
    styles[`h${size}`],
    inverted && styles.inverted,
    margin && styles[`hmargin-${margin}`],
    className
  );

  return (
    <h2 {...restProps} className={hClass}>
      {children}
    </h2>
  );
};

export const H3: React.FC<HeadlineProps> = ({
  children,
  className,
  size = '3',
  inverted = false,
  margin = 'normal',
  ...restProps
}) => {
  const hClass = cn(
    styles[`h${size}`],
    inverted && styles.inverted,
    margin && styles[`hmargin-${margin}`],
    className
  );

  return (
    <h3 {...restProps} className={hClass}>
      {children}
    </h3>
  );
};

interface ParagraphProps extends BaseProps {
  secondary?: boolean;
  style?: 'regular' | 'secondary' | 'lead' | 'large' | 'small';
  bold?: boolean;
}

export const P: React.FC<ParagraphProps> = ({
  children,
  secondary,
  className,
  style = 'regular',
  inverted = false,
  bold = false,
  ...restProps
}) => {
  const pClass = cn(
    styles.p,
    secondary && styles.secondary,
    inverted && styles.inverted,
    bold && styles.bold,
    styles[style],
    className
  );

  return (
    <p {...restProps} className={pClass}>
      {children}
    </p>
  );
};
