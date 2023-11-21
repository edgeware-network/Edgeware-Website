import BubbleChartLineIcon from 'remixicon/icons/Business/bubble-chart-line.svg';
import IconTelegram from 'remixicon/icons/Logos/telegram-fill.svg';
import IconDiscord from 'remixicon/icons/Logos/discord-fill.svg';

import IconMatrix from '../../../public/images/common/matrix-logo-white.svg';

const COLLECTIVES = [
  {
    imageSrc: '/images/society/edgeware-proposals.jpg',
    title: 'Proposals',
    description:
      "Join Edgeware's Proposals channel to discuss, debate and develop proposals for the community to fund. Proposals cover chain upgrades, changes to core governance principles and a wide range of project plans by a wide range of teams.",
    members: '+40',
    hrefs: {
      discord: 'https://discord.gg/YQQQh5KP2p',
      telegram: 'https://t.me/EdgewareGWG',
      matrix: 'https://matrix.to/#/#edgeware-proposals:matrix.org',
    },
  },
  {
    imageSrc: '/images/society/edgeware-agency.jpg',
    title: 'Edgeware Agency',
    description:
      'Focuses on developing and exploring the brand, including visual, emotional, experiential values of Edgeware, evangelizing use cases, and developing assets to communicate the above.',
    members: '+80',
  },
  {
    imageSrc: '/images/society/builders.jpg',
    title: 'Builders Guild',
    description:
      'Works to create an ecosystem of support for developers and application builders in the network. Resources, Q/A, and discussion about technical advancement of the network are the usual activities.',
    members: '+90',
    hrefs: {
      discord: 'https://discord.gg/vrER5Bs',
      telegram: 'https://t.me/edg_developers',
      matrix: 'https://matrix.to/#/#edgeware-builders:matrix.org',
    },
  },
  {
    imageSrc: '/images/society/dao-working-group.jpg',
    title: 'DAO Working Group',
    description:
      'Works to enable a robust infrastructure and cutting-edge support for DAOs and organizational primitives within Edgeware: Legal bridging, budgeting tools, organizational structures, reputation and deployment of DAOs.',
    members: '20+',
    hrefs: {
      discord: 'https://discord.gg/ugPyMUFYmb',
      telegram: 'https://t.me/EDGDAOWG',
      matrix: 'https://matrix.to/#/#edgeware-dao-wg:matrix.org',
    },
  },
  {
    imageSrc: '/images/society/nft-strategy-group.jpg',
    title: 'NFT Strategy Group',
    description:
      'This working group works with artists and art industry actors across mediums of visual, music, NFT and more to ensure that Artists and the Arts are a healthy and innovative sector of Edgeware, and seeks to solve problems with the sustainability, production and consumption of art works.',
    members: '+40',
    hrefs: {
      discord: 'https://discord.gg/JYAdmvrvd4',
      telegram: 'https://t.me/EdgewareNFTs',
      matrix: 'https://matrix.to/#/#edgeware-web3_media:matrix.org',
    },
  },
  {
    imageSrc: '/images/society/edgeware-economics.jpg',
    title: 'Economics',
    description:
      'This working group draws community members from Edgeware, other blockchain projects and curious people  to talk about market chatter, parachain economics, token price Qs, memes and moons.',
    members: '+400',
    hrefs: {
      discord: 'https://discord.gg/WDXKMkBSxn',
      telegram: 'https://t.me/edgewareeconomics',
    },
  },
];

export const SocietyCollectivesList = () => {
  return (
    <section id="collectives-list" className="mx-auto my-24 max-w-6xl px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-16">
        {COLLECTIVES.map((item, index) => (
          <div className="" key={index}>
            <SocietyListItem {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

type SocietyCardProps = {
  imageSrc?: string;
  title: string;
  description: string;
  members?: string;
  hrefs?: Record<string, string>;
};

const SocietyListItem = (props: SocietyCardProps) => {
  const { imageSrc, title, description, members = '10+', hrefs } = props;

  return (
    <div className="flex h-full flex-col rounded-md border border-grey-700 bg-grey-900">
      <div className="block">
        <img src={imageSrc} alt={title} loading="lazy" className="h-auto w-full rounded-t-md" />
      </div>
      <div className="flex-1 p-6">
        <strong className="text-lg font-semibold">{title}</strong>
        <p className="my-4 text-grey-300">{description}</p>
      </div>
      <div className="flex justify-between px-4 py-4">
        <span className="flex flex-row items-center text-sm">
          <BubbleChartLineIcon className="mr-1 h-6 w-6 fill-white " />
          {members} Members
        </span>

        {title === 'Edgeware Agency' ? (
          <span className="text-grey-600">Decentralized</span>
        ) : (
          <span>
            {hrefs &&
              Object.keys(hrefs).map((key) => (
                <a
                  key={key}
                  href={hrefs[key]}
                  className="group inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {key === 'telegram' && (
                    <IconTelegram className="ml-2 h-6 w-6 fill-white opacity-70 group-hover:opacity-100" />
                  )}
                  {key === 'discord' && (
                    <IconDiscord className="ml-2 h-6 w-6 fill-white opacity-70 group-hover:opacity-100" />
                  )}
                  {key === 'matrix' && (
                    <IconMatrix className="relative top-1 ml-2 h-8 fill-white opacity-70 group-hover:opacity-100" />
                  )}
                </a>
              ))}
          </span>
        )}
      </div>
    </div>
  );
};
