import * as React from 'react';
import { motion } from 'framer-motion';

import { NavItems } from './header-nav';

import styles from './header-nav.module.scss';

type HeaderOverlayNavProps = {
  onClose: () => void;
};

export const HeaderOverlayNav = ({ onClose }: HeaderOverlayNavProps) => {
  const animationStates = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <motion.div {...animationStates} key="overlay">
      <div className={styles.navOverlay}>
        <div className={styles.navOverlayBody}>
          <NavItems style="mobile" onClick={onClose} />
        </div>
      </div>
    </motion.div>
  );
};
