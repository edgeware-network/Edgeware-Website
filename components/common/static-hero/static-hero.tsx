import * as React from 'react';


import cn from 'classnames';

import { H1, P } from '../typography/typography';

import styles from './static-hero.module.scss';

interface StaticHeroProps {
  headline: React.ReactNode
  leadText?: string
  heroStyle: 'jobs' | 'partners'
}

export const StaticHero: React.FC<StaticHeroProps> = ({ headline, leadText, heroStyle }) => {

  return (
    <div className={cn(styles.hero, styles[`hero--${heroStyle}`])}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.headlineWrapper}>
            <H1 size="1" className={styles.headline}>
              {headline}
            </H1>
            {leadText && (
              <P className={styles.leadText}>
                {leadText}
              </P>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};
