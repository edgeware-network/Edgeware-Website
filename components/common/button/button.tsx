import * as React from 'react';
import { useRouter } from 'next/router';

import cn from 'classnames';

import styles from './button.module.scss';

interface ButtonProps {
  style?: 'primary' | 'secondary' | 'white' | 'black';
  fullWidth?: boolean;
  onClick?: () => void;
  download?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  style = 'primary',
  fullWidth,
  onClick,
  href,
}) => {
  const buttonClasses = cn(styles.button, {
    [`${styles.buttonPrimary}`]: style === 'primary',
    [`${styles.buttonSecondary}`]: style === 'secondary',
    [`${styles.buttonWhite}`]: style === 'white',
    [`${styles.buttonBlack}`]: style === 'black',
    [`${styles.buttonBlock}`]: fullWidth === true,
  });

  const router = useRouter();

  const handleClick = React.useCallback(
    (event) => {
      if (href?.match(/http/)) {
        event.preventDefault();
        window.open(href);
      } else if (href) {
        event.preventDefault();
        router.push(href);
        onClick && onClick();
      } else {
        onClick();
      }
    },
    [href, onClick, router]
  );

  return (
    <button className={buttonClasses} onClick={handleClick}>
      {children}
    </button>
  );
};
