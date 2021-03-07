import React from 'react';

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
import { Mentions } from '../components/pages/home/08_mentions/mentions';

import { Newsletter } from '../components/common/newsletter/newsletter';
import {
  HeaderAndTextList,
  HeaderAndText,
} from '../components/common/header-and-text/header-and-text';

export default function Home() {
  return (
    <>
      <Hero
        headline="What will you ###?"
        highlightWords={[
          'build',
          'create',
          'fund',
          'organise',
          'develop',
          'start',
          'grow',
          'launch',
        ]}
        lead="Edgeware is a smart contract chain with a community-managed treasury, decentralised proposal system and network of DAOs."
      />

      <Section id="intro" width="fluid">
        <Intro>
          <H2 size="1">Your blockchain project starts here.</H2>
          <P>
            <strong>Edgeware</strong> is a platform for the next generation of decentralized
            applications, with a rich ecosystem of modules for advanced{' '}
            <strong>cryptography, social identity, collective organization</strong>, and more.
          </P>
          <P>
            Using <strong>Edgeware</strong>, developers can build more advanced applications, while
            retaining the simplicity and flexibility of smart contracts. Ethereum developers can
            deploy <strong>Solidity/EVM</strong> smart contracts with few or no changes, while new
            developers can get started with <strong>Rust and WebAssembly</strong>.
          </P>
          <P>
            <strong>Builders and organizers</strong> can find a place in one of Edgeware’s many
            collectives, <strong>funded by the on-chain treasury</strong> to expand the network and
            explore new ideas.
          </P>
          <P>
            The treasury and chain are governed by a fairly-launched,{' '}
            <strong>widely-distributed set of stakeholders</strong>, established during the
            lockdrop, one of the largest Ethereum token generation events in 2018.
          </P>
          <P>
            <em>Governed by thousands. Owned by no-one. Open to all.</em>
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
            organisational structure is designed to devolve power to small groups who become masters
            of their own destiny, whilst still accountable to their peers.
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
              Focus on technical strategy, culture and operations and rely on stable funding.
            </HeaderAndText>
            <HeaderAndText headline="Working Groups">
              Focus on emerging challenges and opportunities and rely on seed funding.
            </HeaderAndText>
            <HeaderAndText headline="Project Teams">
              Put forward proposals that are funded based on completion of agreed milestones.
            </HeaderAndText>
            <HeaderAndText headline="Ecosystem DAOs">
              More ambitious entities that take larger grants and return value to the treasury.
            </HeaderAndText>
          </HeaderAndTextList>
        </div>
      </Section>

      {/* TODO: Temporary disabled
      <Section id="projects" width="normal">
        <div className="text-center">
          <H2 size="2">
            Funded Projects
          </H2>
          <P>
            Edgeware is a community owned and operated platform funding
            <br />
            ambitious project teams and the infrastructure to support them.
          </P>
        </div>
        <Projects />
      </Section>
      */}

      <Section id="token" width="fluid">
        <Token>
          <H2 size="1">
            An introduction to the <em>EDG</em> token.
          </H2>
          <P>
            The <strong>EDG</strong> token incentivises and rewards the participants in the
            ecosystem, ensuring everyone remains aligned to a common purpose of expanding both the
            usefulness and awareness of the network.
          </P>
          <P>
            The token has one of the widest distributions in crypto-currency, with over 15m unique
            addresses receiving the token as part of the 2019 lockdrop.
          </P>
          <P>
            This offers the project a huge advantage over many less well distributed projects, both
            in terms of the breadth of its ownership, lack of outside influence and the scale of the
            opportunity to increase its value.
          </P>
          <P>The primary features of the EDG token and economic system:</P>
        </Token>
      </Section>

      <Section id="build" width="fluid">
        <Build />
      </Section>

      <Section id="mentions" width="fluid">
        <Mentions />
      </Section>

      <Section id="newsletter" width="normal" gap="none">
        <Newsletter />
      </Section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: 'Smart contract blockchain with a community managed treasury',
        description:
          'Edgeware is a smart contract blockchain with a community managed treasury, decentralised proposal system and network of DAOs.',
      },
    },
  };
}
