import * as React from 'react';
import dynamic from 'next/dynamic';

import styles from './hero.module.scss';

const AnimatedHeadline = dynamic(() => import('./animated-headline'), { ssr: false });
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
    </div>
  );
};
