import { Button } from 'components/common/button/button';
import { P } from 'components/common/typography/typography';

import styles from './edgeware-intro.module.scss';

export const EdgewareIntro: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <P style="large">
        Edgeware is a scalable, sovereign and cooperatively owned smart contract platform with a
        large public treasury, strong governing community, and a focus on DAO deployments.
      </P>
      <P className={styles.paragraph}>
        Edgeware is a society of technical and artistic thinkers striving to discover new economies.
        These visions are inclusive, equitable, automated, and fundamentally more human.
      </P>
      <P className={styles.paragraph}>
        We're looking to connect and involve daring and creative minds both new and old to
        blockchain, support their ideas, and together produce a better culture than yesterday.
      </P>
      <div className="mt-5">
        <Button style="secondary-big" href="https://discord.com/invite/bDktqyj">
          Join our community on Discord
        </Button>
      </div>
    </div>
  );
};
