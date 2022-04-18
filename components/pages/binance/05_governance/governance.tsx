import { Button } from 'components/common/button/button';
import { H2, P } from 'components/common/typography/typography';

import styles from './governance.module.scss';

export const Governance = () => {
  return (
    <div className={styles.wrapper}>
      <H2>Participate in Governance</H2>
      <P style="lead">
        Edgeware is a DAO with a complete on-chain treasury, council elections and a robust proposal
        system.
        <br />
        We use the EDG token to vote on these and we invite you to participate directly, or
        indirectly by delegating your EDG to a responsible holder in the ecosystem.
      </P>
      <div>
        <Button style="primary" href="https://www.edgeware.app/#/council">
          Delegate on Edgeware App
        </Button>
      </div>
      <div className={styles.learnMore}>
        <a
          href="https://www.youtube.com/watch?v=9EDufAj1_JQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/binance/delegate.png"
            width="213"
            height="129"
            alt="How to run for Council at Edgeware"
            loading="lazy"
          />

          <span>Watch EDG Delegation Video Tutorial</span>
        </a>
      </div>
    </div>
  );
};
