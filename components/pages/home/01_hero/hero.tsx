import * as React from 'react';
import { useState, useRef, useLayoutEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useMountedState } from 'react-use';
import dynamic from 'next/dynamic';

import styles from './hero.module.scss';

const AnimatedHeadline = dynamic(() => import('./animated-headline'), { ssr: false });

const HeroBackground: React.FC = () => {
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  useLayoutEffect(() => {
    const element = ref.current;
    setElementTop(element.offsetTop);
  }, [ref]);

  const y = useTransform(scrollY, [elementTop, elementTop + 3], [0, -1], {
    clamp: false,
  });

  return (
    <div ref={ref} className={styles.heroBgWrapper}>
      <motion.div style={{ y }}>
        <div className={styles.heroBg} />
      </motion.div>
    </div>
  );
};

interface HeroProps {
  headline: string;
  highlightWords: string[];
  lead: string;
}

export const Hero: React.FC<HeroProps> = ({ headline, highlightWords, lead }) => {
  const [isMounted, setMounted] = React.useState(false)
  const staticHeadline = headline.replace('###', highlightWords[0]);

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={styles.hero}>
      <div className={styles.wrapper}>
        <div className="container">
          <h1 className={styles.headline}>
            {isMounted ? (
              <AnimatedHeadline headline={headline} highlightWords={highlightWords} />
            ) : (
              staticHeadline
            )}
          </h1>
          <p className={styles.lead}>{lead}</p>
        </div>
      </div>
      {isMounted && <HeroBackground />}
    </div>
  );
};
