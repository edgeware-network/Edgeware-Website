import { GetStaticProps } from 'next';

import { BinanceHero } from 'components/pages/binance/binance-hero';
import { BinanceEdgewareIntro } from 'components/pages/binance/binance-edgeware-intro';
import { BinanceKabocha } from 'components/pages/binance/binance-kabocha';
import { BinanceStake } from 'components/pages/binance/binance-stake';
import { BinanceGovernance } from 'components/pages/binance/binance-governance';

export default function BinancePage() {
  return (
    <>
      <BinanceHero />
      <BinanceEdgewareIntro />
      <BinanceKabocha />
      <BinanceStake />
      <BinanceGovernance />
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
      layout: {
        overlayHeader: true,
      },
    },
  };
};
