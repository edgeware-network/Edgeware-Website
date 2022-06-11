import BubbleChartLineIcon from 'remixicon/icons/Business/bubble-chart-line.svg';

const COLLECTIVES = [
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
];

export const CollectivesList = () => {
  return (
    <section id="collectives-list" className="my-24 mx-auto max-w-6xl px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-16">
        {COLLECTIVES.map((item, index) => (
          <div className="" key={index}>
            <CollectivesListItem {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

type CollectiveCardProps = {
  imageSrc?: string;
  title: string;
  description: string;
  members?: string;
  href?: string;
};

const CollectivesListItem = (props: CollectiveCardProps) => {
  const { imageSrc, title, description, members = '10+', href } = props;

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
        <span className="flex flex-row items-center">
          <BubbleChartLineIcon className="mr-2 h-6 w-6 fill-white" />
          {members} Members
        </span>

        <a
          href={href}
          className="inline-block rounded bg-grey-800 py-2 px-8 hover:bg-grey-600 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join
        </a>
      </div>
    </div>
  );
};
