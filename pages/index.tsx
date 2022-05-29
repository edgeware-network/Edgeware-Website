import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';

import { getAllTwitterMentions, TwitterMention } from '../lib/api/twitter';

// Load Twitter Mentions slider as dynamic component
// @ts-expect-error TS props mismatch
const HomepageMentions = dynamic(() =>
  import('../components/pages/home/homepage-mentions').then((mod) => mod.HomepageMentions)
);

import { Newsletter } from '../components/common/newsletter';

import { HomepageHero } from 'components/pages/home/homepage-hero';
import { HomepageTeasers } from 'components/pages/home/homepage-teasers';
import { HomepageEdgewareIntro } from 'components/pages/home/homepage-edgeware-intro';
import { HomepageCitizenship } from 'components/pages/home/homepage-citizenship';
import { HomepagePlatform } from 'components/pages/home/homepage-platform';
import { HomepageEconomics } from 'components/pages/home/homepage-economics';
import { HomepageTokens } from 'components/pages/home/homepage-tokens';

interface HomePageStaticProps {
  mentions: TwitterMention[];
}

const HomePage: NextPage<HomePageStaticProps> = ({ mentions }) => {
  return (
    <>
      <HomepageHero />
      <HomepageTeasers />
      <HomepageEdgewareIntro />
      <HomepageCitizenship />
      <HomepagePlatform />
      <HomepageEconomics />
      <HomepageTokens />
      {/* @ts-expect-error TS props mismatch */}
      <HomepageMentions mentions={mentions} />
      <Newsletter />
    </>
  );
};

export async function getStaticProps() {
  const mentions = getAllTwitterMentions();

  return {
    props: {
      meta: {
        title: 'Smart contract blockchain with a community-managed treasury',
        description:
          'Edgeware is a smart contract blockchain with a community-managed treasury, decentralised proposal system and network of DAOs.',
      },
      layout: {
        overlayHeader: true,
      },
      mentions,
    },
  };
}

export default HomePage;
