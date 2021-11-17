import React from 'react';
import { NextPage } from 'next';

import { getAllTwitterMentions, TwitterMention } from 'lib/api/twitter';

import { Section } from '../components/common/section/section';
import { H2, P } from '../components/common/typography/typography';

import { Hero } from '../components/pages/home/01_hero/hero';
import { Intro } from '../components/pages/home/02a_intro/intro';
import { Features } from '../components/pages/home/02b_features/features';
import { Collective } from '../components/pages/home/03_collective/collective';
import { Structure } from '../components/pages/home/04_structure/structure';
// import { Projects } from '../components/pages/home/05_projects/projects';
import { Token } from '../components/pages/home/06_token/token';
import { Build } from '../components/pages/home/07_build/build';

// Load Twitter Mentions slider as dynamic component
const Mentions = dynamic(() =>
  import('../components/pages/home/08_mentions/mentions').then((mod) => mod.Mentions)
);

import { Newsletter } from '../components/common/newsletter/newsletter';
import {
  HeaderAndTextList,
  HeaderAndText,
} from '../components/common/header-and-text/header-and-text';
import { Banners } from '../components/pages/home/01_hero/banners/banners';
import dynamic from 'next/dynamic';

interface HomePageStaticProps {
  mentions: TwitterMention[];
}

const HomePage: NextPage<HomePageStaticProps> = ({ mentions }) => {
  return (
    <>
      <Hero
        headline="What will you ###?"
        highlightWords={[
          'build',
          'create',
          'fund',
          'organize',
          'develop',
          'start',
          'grow',
          'launch',
        ]}
        lead="Edgeware is a smart contract chain with a community-managed treasury, decentralized proposal system and network of DAOs."
      />

      <Section id="banners" width="wide" gap="none">
        <Banners />
      </Section>

      <Section id="intro" width="fluid">
        <Intro>
          <H2 size="1">Your blockchain project starts here.</H2>
          <P>
            <strong>Edgeware</strong> is a platform for the next generation of decentralized
            applications.
          </P>
          <P>
            On Edgeware, Ethereum developers can deploy <strong>Solidity/EVM</strong> smart
            contracts with few or no changes, while new developers can get started with{' '}
            <strong>Rust and WebAssembly</strong>.
          </P>
          <P>
            <strong>Builders and organizers</strong> can find a place in one of Edgeware’s many
            collectives <strong>funded by the on-chain treasury</strong> to expand the network and
            explore new ideas.
          </P>
          <P>
            The treasury and chain are governed by a fairly-launched,{' '}
            <strong>widely distributed set of stakeholders</strong> established during the lockdrop,
            one of the largest Ethereum token generation events in 2018.
          </P>
          <P>
            <em>Governed by thousands, owned by no-one, open to all.</em>
          </P>
        </Intro>
      </Section>

      <Section id="features" width="fluid">
        <Features />
      </Section>

      <Section id="collectives" width="fluid">
        <Collective headline="Find your people.">
          <P>
            Rather than attempting to coordinate a single community, Edgeware’s evolving
            organizational structure is designed to delegate power to small groups who become
            masters of their destiny, whilst still accountable to their peers.
          </P>
          <P>
            Whether you are looking to develop an idea, a team looking to launch a project or an
            established community looking to add rocket fuel to your dreams, Edgeware is a place you
            can call home.
          </P>
        </Collective>
      </Section>

      <Section id="structure" width="fluid">
        <Structure />

        <div className="container">
          <HeaderAndTextList>
            <HeaderAndText headline="Chain Workers">
              Focuses on technical strategy, culture and operations. Supported by contractor
              funding.
            </HeaderAndText>
            <HeaderAndText headline="Working Groups">
              Focuses on emerging challenges and opportunities. Supported by seed funding.
            </HeaderAndText>
            <HeaderAndText headline="Project Teams">
              Puts forward proposals that are funded based on the completion of agreed milestones.
            </HeaderAndText>
            <HeaderAndText headline="Ecosystem DAOs">
              More ambitious entities that take larger grants and return value to the treasury.
            </HeaderAndText>
          </HeaderAndTextList>
        </div>
      </Section>

      <Section id="token" width="fluid" gap="none">
        <Token>
          <H2 size="1">
            An introduction to the <em>EDG</em> token.
          </H2>
          <P>
            The <strong>EDG</strong> token incentivizes and rewards participants in the ecosystem,
            ensuring everyone remains aligned to a common purpose of expanding both the usefulness
            and awareness of the network.
          </P>
          <P>
            The token has one of the widest distributions in cryptocurrency. Over 15 million unique
            addresses received the token as part of the 2019 lockdrop.
          </P>
          <P>
            This offers the project a huge advantage over less well-distributed projects in terms of
            the breadth of its ownership, lack of outside influence and the scale of the opportunity
            to increase its value.
          </P>
          <P>The primary features of the EDG token and economic system:</P>
        </Token>
      </Section>

      <Section id="build" width="fluid" background="blocks" gap="none">
        <Build />
      </Section>

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
