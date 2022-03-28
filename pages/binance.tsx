import { GetStaticProps } from 'next';

import { Section } from 'components/common/section/section';
import { BinanceHero } from 'components/pages/binance/01_hero/binance-hero';
import { EdgewareIntro } from 'components/pages/binance/02_intro/edgeware-intro';
import { StakeAndEarn } from 'components/pages/binance/03_stake/stake-and-earn';

export default function BinancePage() {
  return (
    <>
      <BinanceHero />

      <Section id="edgeware-intro" width="normal" gap="none">
        <EdgewareIntro />
      </Section>

      <Section id="stake" width="very-narrow" gap="none">
        <StakeAndEarn />
      </Section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      meta: {
        title: 'Welcome to Edgeware, Binance Users',
        description:
          'Binance participated in the Edgeware token distribution, receiving 509,349,615 EDG on behalf of ETH holders. If you held ETH on Binance during this time, you received 201 EDG per ETH.',
      },
    },
  };
};
