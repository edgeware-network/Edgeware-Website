import * as React from 'react';

import { H1, P } from '../components/common/typography/typography';
import { Intro } from '../components/common/intro/intro';
import { Section } from '../components/common/section/section';

import { Timeline } from '../components/pages/mission/timeline/timeline';
import { Newsletter } from '../components/common/newsletter/newsletter';

export default function Mission() {
  return (
    <>
      <Intro>
        <H1 size="1">Mission</H1>
        <P>
          Edgeware serves as a platform for the developers, creators and members of its community to build, fund and manage their projects effectively.
          Our sustainable funding, evolving organisational structure and open culture welcomes the next generation of blockchain enabled concepts, tools and services.
          While the community's interests are always evolving, our core commitment to collective ownership and governance is the heart of Edgeware.
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
