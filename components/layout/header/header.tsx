import * as React from 'react';
import Link from 'next/link';

import { EdgewareLogo } from './edgeware-logo';
import { HeaderNav } from './header-nav';

import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className="relative">
      <div className="container mx-auto py-12">
        <div className="flex flex-row justify-between items-center">
          <Link href="/">
            <a className={styles.logo} aria-label="Edgeware">
              <EdgewareLogo className="w-8 h-8" />
            </a>
          </Link>
          <HeaderNav />
        </div>
      </div>
    </header>
  );
};
