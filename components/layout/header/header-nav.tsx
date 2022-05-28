import * as React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import styles from './header-nav.module.scss';
import { HeaderOverlayNav } from './header-nav-overlay';
import { NavToggle } from './nav/nav-toggle';
import { useRouter } from 'next/router';

const NAV_ITEMS = {
  Home: '/',
  'Contribute & Earn': '/contribute',
  Build: '/developers',
  Society: '/collectives',
  Governance: 'https://gov.edgewa.re/',
  Ecosystem: '/',
};

const setBodyOverlay = (flag: boolean) => {
  if (flag) {
    document.body.classList.add('hasOverlay');
  } else {
    document.body.classList.remove('hasOverlay');
  }
};

export const HeaderNav = () => {
  const [isOpen, setOpen] = React.useState(false);
  const containerRef = React.useRef(null);

  const toggleOpen = React.useCallback(() => {
    setOpen(!isOpen);
    setBodyOverlay(!isOpen);
  }, [isOpen]);

  return (
    <motion.div initial={false} animate={isOpen ? 'open' : 'closed'} ref={containerRef}>
      <div className={styles.navWrapper}>
        <NavItems />
      </div>
      <div className={styles.navBurger}>
        <NavToggle onToggle={toggleOpen} />
      </div>
      <AnimatePresence>{isOpen && <HeaderOverlayNav onClose={toggleOpen} />}</AnimatePresence>
    </motion.div>
  );
};

type NavItemsProps = {
  style?: 'desktop' | 'mobile';
  onClick?: () => void;
};

export const NavItems = ({ style, onClick }: NavItemsProps) => {
  const router = useRouter();

  const handleGetStartedClick = (event: React.MouseEvent) => {
    event.preventDefault();
    router.push('/get-started');
  };

  return (
    <nav className={cn(styles.nav, style === 'mobile' && styles.navMobile)}>
      {Object.entries(NAV_ITEMS).map((entry) => (
        <NavItem key={entry[0]} href={entry[1]} onClick={onClick}>
          {entry[0]}
        </NavItem>
      ))}
      <NavButtonItem onClick={handleGetStartedClick}>Get Started</NavButtonItem>
    </nav>
  );
};

type NavItemProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
};

const NavItem = ({ children, href, onClick }: NavItemProps) => {
  const isExternal = href.match(/https/);

  if (isExternal) {
    return (
      <a
        href={href}
        className={styles.navItem}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href}>
      <a className={styles.navItem} onClick={onClick}>
        {children}
      </a>
    </Link>
  );
};

const NavButtonItem: React.FC<NavItemProps> = ({ children, onClick }) => {
  return (
    <button className={cn(styles.navItem, styles.navItemSpecial)} onClick={onClick}>
      {children}
    </button>
  );
};
