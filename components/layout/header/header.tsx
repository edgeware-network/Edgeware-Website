import * as React from 'react';
import Link from 'next/link';

import { EdgewareLogo } from './edgeware-logo';
import { HeaderNav } from './header-nav';

type HeaderProps = {
  overlayHeader?: boolean;
};

export const Header = ({ overlayHeader = false }: HeaderProps) => {
  return (
    <header className={overlayHeader ? 'absolute top-0 left-0 right-0' : 'relative'}>
      <div className="container mx-auto max-w-7xl py-12">
        <div className="flex flex-row items-center justify-between">
          <Link href="/">
            <a className="z-10" aria-label="Edgeware">
              <EdgewareLogo className="h-16 w-16" />
            </a>
          </Link>
          <HeaderNav />
        </div>
      </div>
    </header>
  );
};
