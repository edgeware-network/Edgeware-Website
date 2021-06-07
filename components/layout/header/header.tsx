import * as React from 'react';
import Link from 'next/link';

import { EdgewareLogo } from './edgeware-logo';
import { HeaderNav } from './header-nav';

import styles from './header.module.scss';
import { GetStartedModal } from '../../modals/get-started/get-started';
import { useModalState } from '../../modals/useModalState';

interface HeaderProps {
  isStatic?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isStatic = false }) => {
  const { isOpen, toggleModal } = useModalState();

  return (
    <header className={`${styles.header} ${isStatic && styles.headerStatic}`}>
      <div className="container-lg">
        <div className={styles.wrapper}>
          <Link href="/">
            <a className={styles.logo} aria-label="Edgeware">
              <EdgewareLogo />
            </a>
          </Link>
          <HeaderNav onToggleModal={toggleModal} />
          <GetStartedModal isOpen={isOpen} onClose={toggleModal} />
        </div>
      </div>
    </header>
  );
};
