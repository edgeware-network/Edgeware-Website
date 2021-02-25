import * as React from 'react';
import { motion } from 'framer-motion';

import styles from './nav-toggle.module.scss';

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="rgba(255, 255, 255, 255)"
    strokeLinecap="square"
    {...props}
  />
);

interface NavToggleProps {
  onToggle: () => void;
}

export const NavToggle: React.FC<NavToggleProps> = ({ onToggle }) => (
  <button onClick={onToggle} className={styles.button} aria-label="Toggle Navigation">
    <svg width="24" height="25" viewBox="0 0 24 24">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
);
