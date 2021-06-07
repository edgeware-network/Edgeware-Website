import * as React from 'react';
import { Button } from '../components/common/button/button';

import IconArm from 'remixicon/icons/User/open-arm-line.svg';
import IconFunds from 'remixicon/icons/Finance/funds-line.svg';
import IconEarth from 'remixicon/icons/Map/earth-line.svg';

import IconFingerprint from 'remixicon/icons/Device/fingerprint-fill.svg';
import IconCompass from 'remixicon/icons/Map/compass-discover-line.svg';
import IconUser from 'remixicon/icons/User/user-4-line.svg';

import IconScale from 'remixicon/icons/Others/scales-line.svg';
import IconCommand from 'remixicon/icons/Development/command-line.svg';
import IconCompass2 from 'remixicon/icons/Map/compass-2-line.svg';

import { CollectiveCardProps } from '../components/pages/collectives/collective-card/collective-card';
import { CollectivesList } from '../components/pages/collectives/collectives-list/collectives-list';
import { HeadlineSection } from '../components/common/headline-section/headline-section';
import { Icon } from '../components/common/icon/icon';
import { IconAndText } from '../components/common/icon-and-text/icon-and-text';
import { IconLogo } from '../components/common/logo/icon-logo';
import { Section } from '../components/common/section/section';
import { H1, H2, P } from '../components/common/typography/typography';
import { Newsletter } from '../components/common/newsletter/newsletter';

const COLLECTIVES: CollectiveCardProps[] = [
  {
    imageSrc: '/images/collectives/edgeware-proposals.jpg',
    title: 'Proposals',
    description:
      "Join Edgeware's Proposals channel to discuss, debate and develop proposals for the community to fund. Proposals cover chain upgrades, changes to core governance principles and a wide range of project plans by a wide range of teams.",
    members: '+40',
    href: 'https://t.me/EdgewareGWG',
  },
  {
    imageSrc: '/images/collectives/edgeware-agency.jpg',
    title: 'Edgeware Agency',
    description:
      'Focuses on developing and exploring the brand, including visual, emotional, experiential values of Edgeware, evangelizing use cases, and developing assets to communicate the above.',
    members: '+80',
    href: 'https://t.me/EdgewareAgency',
  },
  {
    imageSrc: '/images/collectives/builders.jpg',
    title: 'Builders Guild',
    description:
      'Works to create an ecosystem of support for developers and application builders in the network. Resources, Q/A, and discussion about technical advancement of the network are the usual activities.',
    members: '+90',
    href: 'https://linktr.ee/edg_developers',
  },
  {
    imageSrc: '/images/collectives/dao-working-group.jpg',
    title: 'DAO Working Group',
    description:
      'Works to enable a robust infrastructure and cutting-edge support for DAOs and organizational primitives within Edgeware: Legal bridging, budgeting tools, organizational structures, reputation and deployment of DAOs.',
    members: '20+',
    href: 'https://t.me/EDGDAOWG',
  },
  {
    imageSrc: '/images/collectives/nft-strategy-group.jpg',
    title: 'NFT Strategy Group',
    description:
      'This working group works with artists and art industry actors across mediums of visual, music, NFT and more to ensure that Artists and the Arts are a healthy and innovative sector of Edgeware, and seeks to solve problems with the sustainability, production and consumption of art works.',
    members: '+40',
    href: 'https://t.me/EdgewareNFTs',
  },
  {
    imageSrc: '/images/collectives/edgeware-economics.jpg',
    title: 'Economics',
    description:
      'This working group draws community members from Edgeware, other blockchain projects and curious people  to talk about market chatter, parachain economics, token price Qs, memes and moons.',
    members: '+400',
    href: 'https://t.me/edgewareeconomics',
  },
  {
    imageSrc: '/images/collectives/edg-games.jpg',
    title: 'Games',
    description:
      'Dedicated to cutting-edge technology but also having a good time, the Gaming Working Group is for discussing all things cryptographic and how they might be used in building games of the future.',
    members: '+10',
    href: 'https://t.me/edgewaregamesWG',
  },
  {
    imageSrc: '/images/collectives/edg-university.jpg',
    title: 'University',
    description:
      'The University group focuses on building bridges to academia and students via research grants and initiatives that can help unlock education around the power of Edgeware, blockchain technology in general and how applications can be created across different industries.',
    members: '+10',
    href: 'https://t.me/EDGuniWG',
  },
  {
    imageSrc: '/images/collectives/zk-wg.jpg',
    title: 'ZK Working Group',
    description:
      "The ZK Working Group is interested in advancing zero-knowledge and privacy primitives for Edgeware and for the Substrate ecosystem for a variety of applications such as bridges, DeFi, identity, and governance. The group's core focus is on identifying research that can be used in novel ways in the ecosystem.",
    members: '+20',
    href: 'https://t.me/zkedge',
  },
  // {
  //   title: 'Start your own',
  //   description:
  //     'Contact @thom_ivy on Telegram, and he will work with you to create a discussion forum on Commonwealth.im, open a chat channel on your preferred platform, and help organise and communicate your new community to all of Edgeware.',
  //   promo: true,
  //   href: 'https://t.me/thom_ivy',
  // },
];

export default function Collectives() {
  return (
    <>
      <Section id="collectives" width="narrow">
        {/* Headline */}
        <HeadlineSection>
          <H1 size="1">Edgeware collectives</H1>
          <P>
            A collective is a group of entities that share or are motivated by at least one common
            issue or interest, or work together to achieve a common objective.
          </P>
        </HeadlineSection>

        {/* Collectives list */}
        <div className="py-3">
          <CollectivesList items={COLLECTIVES} />
        </div>
      </Section>

      <Section id="start-collective" width="fluid">
        {/* Start collective promo */}
        <HeadlineSection center>
          <IconLogo />
          <H2 size="1">Start your own collective</H2>
          <P>
            In Edgeware, working groups function as mission-based development organizations that are
            composed of members who share interests, needs, and passions. <br/>
            Where an Ambassador team is largely formed to promote a network in a variety of ways,
            Working Groups are intended to solve issues specific to a community while also expanding the awareness and utility
            of the network.
          </P>
        </HeadlineSection>

        <div className="my-3 container text-center">
          {/* Features: row 1 */}
          <div className="row">
            <div className="col-md">
              <IconAndText>
                <Icon component={IconArm} />
                <p>
                  Solve problems using the new world of blockchain and currency and collaborate with
                  other Edgeware experts.
                </p>
              </IconAndText>
            </div>
            <div className="col-md">
              <IconAndText>
                <Icon component={IconFunds} />
                <p>Request funds from the Treasury to execute your mission.</p>
              </IconAndText>
            </div>
            <div className="col">
              <IconAndText>
                <Icon component={IconEarth} />
                <p>
                  Regional groups are designed to drive awareness of the network, research key areas
                  of interest and solve problems within distinct geographical areas.
                </p>
              </IconAndText>
            </div>
          </div>

          {/* Features: row 2 */}
          <div className="row">
            <div className="col-md">
              <IconAndText>
                <Icon component={IconUser} />
                <p>Whatever you want, really: Your community is self-determining.</p>
              </IconAndText>
            </div>
            <div className="col-md">
              <IconAndText>
                <Icon component={IconCompass} />
                <p>
                  Utilise Commonwealth's open-source interface to organize your group, project or
                  community initiative.
                </p>
              </IconAndText>
            </div>
            <div className="col-md">
              <IconAndText>
                <Icon component={IconFingerprint} />
                <p>
                  Identity or Community-based solution groups: Minorities, Social Justice, or
                  others.
                </p>
              </IconAndText>
            </div>
          </div>
          {/* Features: row 3 */}
          <div className="row">
            <div className="col-md">
              <IconAndText>
                <Icon component={IconScale} />
                <p>Organize your community into a political power within the network.</p>
              </IconAndText>
            </div>
            <div className="col-md">
              <IconAndText>
                <Icon component={IconCommand} />
                <p>
                  Specific technology applications,
                  <br />
                  Privacy for instance.
                </p>
              </IconAndText>
            </div>
            <div className="col-md">
              <IconAndText>
                <Icon component={IconCompass2} />
                <p>Advance the community of EDG citizens.</p>
              </IconAndText>
            </div>
          </div>
        </div>

        <div className="py-0 py-lg-3 px-3 px-lg-0 text-center">
          <Button style="primary" href="https://t.me/thom_ivy">
            Start your collective
          </Button>
        </div>
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
        title: 'Find your people or start a collective',
        description:
          'Whether you are looking to develop an idea, a team looking to launch a project or an established community looking to add rocket fuel to your dreams, Edgeware is a place you can call home.',
      },
    },
  };
}
