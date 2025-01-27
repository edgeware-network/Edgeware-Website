import { HomepageTokenWallets } from '../home/homepage-tokens';
import { StakingRewardsWidget } from './binance-stake-widget';

export const BinanceStake = () => {
  return (
    <section className="container mx-auto my-32 max-w-4xl" id="stake">
      <div className="text-center">
        <div className="text-center">
          <h2 className="text-6xl font-medium">Stake and Earn</h2>
          <p className="mx-auto my-8 max-w-2xl text-lg">
            Grow your holdings by staking your EDG.
            <br />
            Calculate your earnings with the Staking Rewards Widget Calculator
          </p>
        </div>
      </div>

      <div className="my-12">
        <StakingRewardsWidget />
      </div>

      <HomepageTokenWallets className="my-12" />
    </section>
  );
};
