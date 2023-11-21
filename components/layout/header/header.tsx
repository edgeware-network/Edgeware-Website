import * as React from 'react';
import Link from 'next/link';

import { EdgewareLogo } from './edgeware-logo';
import { HeaderNav } from './header-nav';

type HeaderProps = {
  overlayHeader?: boolean;
};

export const Header = ({ overlayHeader = false }: HeaderProps) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  return (
    <header className={overlayHeader ? 'absolute left-0 right-0 top-0' : 'relative'}>
      <div className="container mx-auto my-4 max-w-7xl md:py-8 lg:py-12">
        <div className="flex flex-row items-center justify-between px-4">
          <Link href="/">
            <a className="z-20" aria-label="Edgeware" onClick={() => setIsMobileNavOpen(false)}>
              <EdgewareLogo className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" />
            </a>
          </Link>
          <HeaderNav isMobileNavOpen={isMobileNavOpen} setIsMobileNavOpen={setIsMobileNavOpen} />
        </div>
      </div>
    </header>
  );
};
