import { H2, P } from 'components/common/typography/typography';

import { TokenWallet } from '../../home/06_token/token-wallet/token-wallet';

import styles from './stake-and-earn.module.scss';
import { StakingRewardsWidget } from './staking-rewards-widget/staking-rewards-widget';

export const StakeAndEarn: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className="text-center">
        <H2 size="1">Stake and Earn</H2>
        <P>
          Grow your holdings by staking your EDG.
          <br />
          Calculate your earnings with the Staking Rewards Widget Calculator
        </P>
      </div>
      <div className={styles.widgetWrapper}>
        <StakingRewardsWidget />
      </div>
      <div className="my-5">
        <TokenWallet headline="Wallets to store and stake your EDG" designStyle="v3" />
      </div>
    </div>
  );
};
