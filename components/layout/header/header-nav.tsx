import * as React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import IconArrow from 'remixicon/icons/System/arrow-drop-right-line.svg';

import { Icon } from '../../common/icon/icon';

import styles from './header-nav.module.scss';
import { HeaderOverlayNav } from './header-nav-overlay';
import { NavToggle } from './nav/nav-toggle';

const setBodyOverlay = (flag: boolean) => {
  if (flag) {
    document.body.classList.add('hasOverlay');
  } else {
    document.body.classList.remove('hasOverlay');
  }
};

interface HeaderNavProps {
  onToggleModal: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ onToggleModal }) => {
  const [isOpen, setOpen] = React.useState(false);
  const containerRef = React.useRef(null);

  const toggleOpen = React.useCallback(() => {
    setOpen(!isOpen);
    setBodyOverlay(!isOpen);
  }, [isOpen]);

  return (
    <motion.div initial={false} animate={isOpen ? 'open' : 'closed'} ref={containerRef}>
      <div className={styles.navWrapper}>
        <NavItems onToggleModal={onToggleModal} />
      </div>
      <div className={styles.navBurger}>
        <NavToggle onToggle={toggleOpen} />
      </div>
      <AnimatePresence>
        {isOpen && <HeaderOverlayNav onClose={toggleOpen} onToggleModal={onToggleModal} />}
      </AnimatePresence>
    </motion.div>
  );
};

interface NavItemsProps {
  style?: 'desktop' | 'mobile';
  onToggleModal: () => void;
  onClick?: () => void;
}

export const NavItems: React.FC<NavItemsProps> = ({ style, onClick, onToggleModal }) => {
  const handleGetStartedClick = (event: React.MouseEvent) => {
    event.preventDefault();
    onToggleModal();
  };

  return (
    <nav className={cn(styles.nav, style === 'mobile' && styles.navMobile)}>
      <NavItem href="/" onClick={onClick}>
        Home
      </NavItem>
      <NavItem href="/collectives" onClick={onClick}>
        Collectives
      </NavItem>
      <NavItem href="https://commonwealth.im/edgeware/proposals" onClick={onClick}>
      Proposals
      </NavItem>
      <NavItem href="/developers" onClick={onClick}>
        Developers
      </NavItem>
      <NavItem href="/mission" onClick={onClick}>
        Mission
      </NavItem>
      <NavItem href="https://blog.edgewa.re/" onClick={onClick}>
        News
      </NavItem>
      <NavItem href="https://main.edgeware.wiki/" onClick={onClick}>
        Docs
      </NavItem>
      <NavButtonItem onClick={handleGetStartedClick}>Get Started</NavButtonItem>
    </nav>
  );
};

interface NavItemProps {
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const NavItem: React.FC<NavItemProps> = ({ href, children, onClick }) => {
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
