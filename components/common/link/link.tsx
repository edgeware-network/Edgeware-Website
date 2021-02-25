import * as React from 'react';
import NextLink from 'next/link';

import styles from './link.module.scss';

interface LinkProps {
  href: string;
}

export const Link: React.FC<LinkProps> = ({ href, children }) => {
  if (href.match(/http/)) {
    return (
      <a href={href} className={styles.link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href}>
      <a className={styles.link}>{children}</a>
    </NextLink>
  );
};
