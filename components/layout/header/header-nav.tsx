import * as React from 'react';
import Link from 'next/link';
import IconMenuLine from 'remixicon/icons/System/menu-line.svg';
import IconCloseLine from 'remixicon/icons/System/close-line.svg';
import { Transition } from '@headlessui/react';

const NAV_ITEMS = {
  Home: '/',
  'Contribute & Earn': '/contribute',
  Build: '/build',
  Society: '/society',
  Governance: 'https://gov.edgewa.re/',
  Ecosystem: '/partners',
  'Get Started': '/get-started',
};

type NavOverlayProps = {
  isOpen: boolean;
  onNavigation: () => void;
};

const NavOverlay = ({ isOpen, onNavigation }: NavOverlayProps) => {
  return (
    <Transition
      show={isOpen}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="fixed left-0 top-0 right-0 bottom-0 z-10 bg-black"
    >
      <div className="flex flex-col justify-start px-4 pt-24 md:pt-36">
        {Object.entries(NAV_ITEMS).map((entry) => (
          <NavItem key={entry[0]} href={entry[1]} mobileNav onNavigation={onNavigation}>
            {entry[0]}
          </NavItem>
        ))}
      </div>
    </Transition>
  );
};

type NavItemProps = {
  children: React.ReactNode;
  mobileNav?: boolean;
  href: string;
  onNavigation?: () => void;
};

const NavItem = ({ children, href, mobileNav = false, onNavigation }: NavItemProps) => {
  const isExternal = href.match(/https/);

  const linkClasses = {
    desktop: 'px-2 hover:text-primary-500',
    button:
      'py-2.5 px-5 rounded-md bg-primary-500 text-white hover:bg-primary-600 hover:text-white',
    mobile: 'px-2 py-2 hover:text-primary-500 border-b border-b-grey-800 text-lg font-semibold',
  };

  const renderAsButton = href === '/get-started';

  let linkClassName = renderAsButton
    ? linkClasses.button
    : mobileNav
    ? linkClasses.mobile
    : linkClasses.desktop;

  if (renderAsButton && mobileNav) {
    linkClassName += ' mt-4';
  }

  const handleClick = () => {
    if (onNavigation) {
      onNavigation();
    }
  };

  if (isExternal) {
    return (
      <a
        href={href}
        className={linkClassName}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href}>
      <a className={linkClassName} onClick={handleClick}>
        {children}
      </a>
    </Link>
  );
};

type HeaderNavProps = {
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: (isMobileNavOpen: boolean) => void;
};

export const HeaderNav = ({ isMobileNavOpen, setIsMobileNavOpen }: HeaderNavProps) => {
  return (
    <>
      <nav className="hidden flex-row items-center justify-end lg:flex lg:space-x-6">
        {Object.entries(NAV_ITEMS).map((entry) => (
          <NavItem key={entry[0]} href={entry[1]}>
            {entry[0]}
          </NavItem>
        ))}
      </nav>
      <button className="z-20 flex lg:hidden" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
        {isMobileNavOpen ? (
          <IconCloseLine className="h-7 w-7 fill-white" />
        ) : (
          <IconMenuLine className="h-6 w-6 fill-white" />
        )}
      </button>
      <NavOverlay isOpen={isMobileNavOpen} onNavigation={() => setIsMobileNavOpen(false)} />
    </>
  );
};
