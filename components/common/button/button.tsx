import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import cn from 'classnames';

import styles from './button.module.scss';

interface ButtonProps {
  style?: 'primary' | 'primary-small' | 'secondary' | 'secondary-big' | 'white' | 'black';
  fullWidth?: boolean;
  onClick?: () => void;
  download?: boolean;
  href?: string;
  as?: 'button' | 'link';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  style = 'primary',
  fullWidth,
  onClick,
  href,
  as = 'button',
}) => {
  const buttonClasses = cn(styles.button, {
    [`${styles.buttonPrimary}`]: style === 'primary',
    [`${styles.buttonPrimarySmall}`]: style === 'primary-small',
    [`${styles.buttonSecondary}`]: style === 'secondary',
    [`${styles.buttonSecondaryBig}`]: style === 'secondary-big',
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

  if (as === 'link') {
    return (
      <Link href={href}>
        <a className={buttonClasses}>{children}</a>
      </Link>
    );
  }

  return (
    <button className={buttonClasses} onClick={handleClick}>
      {children}
    </button>
  );
};
