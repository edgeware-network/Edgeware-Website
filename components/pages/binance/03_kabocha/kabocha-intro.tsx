import { Button } from 'components/common/button/button';
import { H2, P } from 'components/common/typography/typography';

import styles from './kabocha-intro.module.scss';

export const KabochaIntro = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img
          src="/images/binance/kabocha-network.png"
          width="128"
          height="128"
          alt="Kabocha"
          loading="lazy"
        />
        <span className={styles.logoLabel}>Kabocha Network</span>
      </div>

      <div>
        <H2 size="1" className={styles.headline}>
          We're distributing a new Kusama Parachain token to EDG holders
        </H2>
        <div className={styles.leadText}>
          <P>
            Kabocha is an experimental parachain governed and funded by the EDG ecosystem. $KAB is
            launching soon through their crowdloan process, and you can help by providing $KSM or
            holding EDG through their snapshot.
          </P>
        </div>
        <div>
          <Button style="primary" href="https://www.kabocha.network/">
            Read more at Kabocha
          </Button>
        </div>
      </div>
    </div>
  );
};
