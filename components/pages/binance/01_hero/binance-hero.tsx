import * as React from 'react';
import cn from 'classnames';

import { H1, P } from 'components/common/typography/typography';
import { Button } from 'components/common/button/button';

import styles from './binance-hero.module.scss';

export const BinanceHero: React.FC = () => {
  return (
    <div className={cn(styles.hero)}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.headlineWrapper}>
            <div>
              <img
                src="/images/binance/binance-logo@2x.png"
                // layout="fixed"
                width="90"
                height="90"
                alt="Binance"
                loading="lazy"
              />
            </div>
            <H1 size="1" className={styles.headline}>
              Welcome to Edgeware,
              <br />
              Binance Users
            </H1>
            <P className={styles.leadText}>
              Binance participated in the Edgeware token distribution, receiving 509,349,615 EDG on
              behalf of ETH holders. If you held ETH on Binance during this time, you received 201
              EDG per ETH.
            </P>
            <Button
              style="primary"
              href="https://www.binance.com/en/support/announcement/aa00aba48425441683b23994ad25ee45"
            >
              Read more at Binance announcement
            </Button>
            <P style="large">
              <br />
              Don't just <em>hodl</em> - find out about how you can benefit from EDG!
            </P>
          </div>
        </div>
      </div>
    </div>
  );
};
