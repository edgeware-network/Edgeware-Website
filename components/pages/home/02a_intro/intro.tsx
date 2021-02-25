import { motion } from 'framer-motion';
import * as React from 'react';
import { SvgBubbleBig, SvgBubbleMedium, SvgBubbleSmall } from '../../../common/bubbles/bubbles';
import { useIntersection } from 'react-use';

import styles from './intro.module.scss';

export const Intro: React.FC = ({ children }) => {
  const intersectionRef = React.useRef(null);

  return (
    <div className={styles.wrapper} ref={intersectionRef}>
      <div className={styles.content}>
        <div className="container">
          <div className="row">
            <div className="col col-lg-6">{children}</div>
          </div>
        </div>
      </div>

      <BackgroundBubbles intersectionRef={intersectionRef} />
    </div>
  );
};

const BackgroundBubbles = ({ intersectionRef }) => {
  return (
    <div className={styles.bubbles} ref={intersectionRef}>
      <motion.span
        className={styles.bigBubble}
        initial={{ scale: 0.5 }}
        animate={{ opacity: 0.5, translateX: -10, translateY: 5 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 1,
          type: 'tween',
        }}
      >
        <SvgBubbleBig />
      </motion.span>
      <motion.span
        className={styles.mediumBubble}
        animate={{ translateX: [10, -10, 15, 5], translateY: [10, -10] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 1,
          type: 'tween',
        }}
      >
        <SvgBubbleMedium />
      </motion.span>
      <motion.span
        className={styles.smallBubble}
        animate={{ translateX: [-5, 10], translateY: [5, 15] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 1,
          type: 'tween',
        }}
      >
        <SvgBubbleSmall />
      </motion.span>
      <motion.span
        className={styles.tinyBubble}
        animate={{ translateX: [5, -10], translateY: -15 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 1,
          type: 'tween',
        }}
      >
        <SvgBubbleSmall />
      </motion.span>
    </div>
  );
};
