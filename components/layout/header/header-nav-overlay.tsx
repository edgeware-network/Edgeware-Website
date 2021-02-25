import * as React from 'react';
import { motion } from 'framer-motion';

import { NavItems } from './header-nav';

import styles from './header-nav.module.scss';

interface HeaderOverlayNavProps {
  onClose: () => void;
  onToggleModal: () => void;
}

export const HeaderOverlayNav: React.FC<HeaderOverlayNavProps> = ({ onClose, onToggleModal }) => {
  const animationStates = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <motion.div {...animationStates} key="overlay">
      <div className={styles.navOverlay}>
        <div className={styles.navOverlayBody}>
          <NavItems style="mobile" onClick={onClose} onToggleModal={onToggleModal} />
        </div>
      </div>
    </motion.div>
  );
};
