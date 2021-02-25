import * as React from 'react';
import Link from 'next/link';

import styles from './footer-nav.module.scss';

interface FooterNavProps {
  items: Record<string, string>;
}

const isExternal = (link: string) => link.match(/http/);

export const FooterNav: React.FC<FooterNavProps> = ({ items }) => {
  const entries = Object.entries(items);

  return (
    <nav>
      {entries.map((linkItem) => {
        const [label, href] = linkItem;

        if (isExternal(href)) {
          return (
            <a
              href={href}
              key={`link-${label}`}
              className={styles.navLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          );
        }

        return (
          <Link href={href} key={`link-${label}`}>
            <a className={styles.navLink}>{label}</a>
          </Link>
        );
      })}
    </nav>
  );
};
