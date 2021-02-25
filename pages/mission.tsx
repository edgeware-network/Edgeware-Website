import * as React from 'react';

import Image from 'next/image';
import { H1, H2, P } from '../components/common/typography/typography';
import { Mentions } from '../components/pages/home/08_mentions/mentions';
import { Intro } from '../components/common/intro/intro';
import { CTAButton } from '../components/common/button/cta-button';
import { Section } from '../components/common/section/section';

import { Timeline } from '../components/pages/mission/timeline/timeline';
import {
  TimelineItem,
  TimelineSeparator,
} from '../components/pages/mission/timeline/timeline-item';
import { Newsletter } from '../components/common/newsletter/newsletter';

export default function Mission() {
  return (
    <>
      <Intro>
        <H1 size="1">Mission</H1>
        <P>
          Edgeware serves as a platform for the developers, users and members of it’s community to
          build and fund their concepts effectively, and to welcome the next generation of crypto
          ideas and products. While the community’s interests are constantly changing, our core
          commitment to community ownership is the heart of Edgeware.
        </P>
      </Intro>

      <Section id="mission" width="normal">
        <Timeline />
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
        title: 'Mission based development orgs that share passion',
        description:
          'In Edgeware, working groups function as mission-based development orgs that are composed of members who share interests, needs, and passions.',
      },
      layout: {
        particles: true,
      },
    },
  };
}
