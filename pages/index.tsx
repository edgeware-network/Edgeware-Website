import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';

import { getAllTwitterMentions, TwitterMention } from '../lib/api/twitter';

import { Section } from '../components/common/section/section';

// Load Twitter Mentions slider as dynamic component
const Mentions = dynamic(() =>
  import('../components/pages/home/08_mentions/mentions').then((mod) => mod.Mentions)
);

import { Newsletter } from '../components/common/newsletter/newsletter';

import { HomepageHero } from 'components/pages/home/homepage-hero';
import { HomepageTeasers } from 'components/pages/home/homepage-teasers';
import { HomepageEdgewareIntro } from 'components/pages/home/homepage-edgeware-intro';
import { HomepageCitizenship } from 'components/pages/home/homepage-citizenship';
import { HomepageSubstratePlatform } from 'components/pages/home/homepage-substrate-platform';
import { HomepageBuild } from 'components/pages/home/homepage-build';
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
      <HomepageSubstratePlatform />
      <HomepageBuild />
      <HomepageEconomics />
      <HomepageTokens />

      <Section id="mentions" width="fluid">
        <Mentions mentions={mentions} />
      </Section>
      <Section id="newsletter" width="normal" gap="none">
        <Newsletter />
      </Section>
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
      mentions,
    },
  };
}

export default HomePage;
