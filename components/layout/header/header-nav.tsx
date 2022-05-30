import * as React from 'react';
import Link from 'next/link';

const NAV_ITEMS = {
  Home: '/',
  'Contribute & Earn': '/contribute',
  Build: '/developers',
  Society: '/collectives',
  Governance: 'https://gov.edgewa.re/',
  Ecosystem: '/partners',
  'Get Started': '/get-started',
};

export const HeaderNav = () => {
  return (
    <nav className="hidden flex-row items-center justify-end lg:flex lg:space-x-6">
      {Object.entries(NAV_ITEMS).map((entry) => (
        <NavItem key={entry[0]} href={entry[1]}>
          {entry[0]}
        </NavItem>
      ))}
    </nav>
  );
};

type NavItemProps = {
  children: React.ReactNode;
  href: string;
};

const NavItem = ({ children, href }: NavItemProps) => {
  const isExternal = href.match(/https/);

  const linkClasses =
    href === '/get-started'
      ? 'py-2.5 px-5 rounded-md bg-primary-500 text-white hover:bg-primary-600 hover:text-white'
      : 'px-2 hover:text-primary-500';

  if (isExternal) {
    return (
      <a href={href} className={linkClasses} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href}>
      <a className={linkClasses}>{children}</a>
    </Link>
  );
};
