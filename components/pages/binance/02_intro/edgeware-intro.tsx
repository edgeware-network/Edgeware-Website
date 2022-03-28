import { P } from 'components/common/typography/typography';

import styles from './edgeware-intro.module.scss';

export const EdgewareIntro: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <P style="large">
        Edgeware is a scalable, sovereign and cooperatively owned smart contract platform with a
        large public treasury, strong governing community, and a focus on DAO deployments.
      </P>
      <P>
        Edgeware is a society of technical and artistic thinkers striving to discover new economies.
        These visions are inclusive, equitable, automated, and fundamentally more human.
      </P>
      <P>
        We're looking to connect and involve daring and creative minds both new and old to
        blockchain, support their ideas, and together produce a better culture than yesterday.
      </P>
    </div>
  );
};
