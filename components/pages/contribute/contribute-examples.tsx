export const ContributeExamples = () => {
  return (
    <div className="container mx-auto max-w-6xl px-4">
      <div className="my-4 grid grid-cols-1 justify-center gap-4 md:gap-8 lg:my-8 lg:grid-cols-3 lg:gap-12">
        <ContributeExampleCard
          tag="Case Study"
          title="Pizza Drop"
          url="https://gov.edgewa.re/discussion/3679-pizza-airdrop?comment=15878"
          prominent
          bgCover="pizza"
        >
          Community members gamified Twitter marketing and made a community moment through publicly
          funded pizza.
        </ContributeExampleCard>
        <ContributeExampleCard
          tag="Case Study"
          title="Exit Theory by Justin Murphy"
          url="https://commonwealth.im/edgeware/proposal/discussion/1131-exit-theory-a-content-and-community-project"
          prominent
          bgCover="city"
        >
          EDG aligned with the values of the text, exploring crypto-seccession and more.
        </ContributeExampleCard>
        <ContributeExampleCard
          tag="Case Study"
          title="Edgeware Agency"
          url="https://edgeware.agency/"
          prominent
          bgCover="atoms"
        >
          Decentralizing chain operations from core teams, the Agency proposal funded the growth of
          both talent and our chain’s development.
        </ContributeExampleCard>
      </div>
      <div className="my-4 grid grid-cols-1 justify-center gap-4 md:grid-cols-2 md:gap-8 lg:my-8 lg:grid-cols-3 lg:gap-12">
        <ContributeExampleCard tag="DAO" title="Identity Registrar" url="https://edgewa.re/">
          Earn EDG for each user’s on-chain identity you manually or automatically verified.
        </ContributeExampleCard>
        <ContributeExampleCard tag="DAO" title="Curator" url="https://edgewa.re/">
          These fixers work with bounty-hunters to select solutions that fulfil the bounty, and pay
          out the reward as a service.
        </ContributeExampleCard>
        <ContributeExampleCard
          tag="Validator"
          title="Validator"
          url="https://docs.edgeware.wiki/quickstart/set-up-a-validator"
        >
          Provide security for the network, validate transactions, and earn block rewards.
          <em className="text-green-500">20%+ APY for active set</em>
        </ContributeExampleCard>

        <ContributeExampleCard
          tag="Validator"
          title="Nominate"
          url="https://docs.edgeware.wiki/edgeware-stack/staking/nominating"
        >
          Help provide network security by nominating to keep validators in the live set, and earn a
          percentage of rewards.
          <em className="text-green-500">20%+ APY</em>
        </ContributeExampleCard>

        <ContributeExampleCard
          tag="Governance"
          title="Grants"
          url="https://docs.edgeware.wiki/community/public-grants"
        >
          Edgeware has an on-chain public treasury composed of funds from several sources, including
          transaction fees, validator fees, and inflation. The public can vote and propose to
          utilize these funds through a democratic and open process.
        </ContributeExampleCard>

        <ContributeExampleCard tag="DAO" title="Community Ops" url="https://edgewa.re/">
          Provide support and moderation services for Edgeware Community.
        </ContributeExampleCard>

        <ContributeExampleCard
          tag="Validator"
          title="Delegate"
          url="https://docs.edgeware.wiki/edgeware-stack/governance/democracy/delegation"
        >
          Become a protocol politician and lead your fellow EDGizens by collecting delegated EDG to
          vote with, becoming a trusted representative in governance on EDG.
          <em className="text-green-500">20%+ APY</em>
        </ContributeExampleCard>

        <ContributeExampleCard
          tag="Governance"
          title="Bounties"
          url="https://commonwealth.im/edgeware/proposal/discussion/1398-onchain-bounties-ideas-meta-discussion"
        >
          We support on-chain bounties; great for bugs, documentation improvements, translations,
          and more.
        </ContributeExampleCard>

        <ContributeExampleCard
          tag="Governance"
          title="Treasury Tips"
          url="https://docs.edgeware.wiki/edgeware-stack/economics/treasury/tipping-function"
        >
          Receive tips for small, one-off tasks, such as bug fixes, documentation, translations and
          more.
        </ContributeExampleCard>
      </div>
    </div>
  );
};

type ContributeExampleCardProps = {
  children?: React.ReactNode;
  tag: 'Case Study' | 'DAO' | 'Validator' | 'Governance';
  title: string;
  url: string;
  prominent?: boolean;
  bgCover?: 'city' | 'atoms' | 'pizza';
};

const ContributeExampleCard = ({
  children,
  tag,
  title,
  url,
  prominent,
  bgCover,
}: ContributeExampleCardProps) => {
  const tagColors = {
    'Case Study': 'bg-green-200 text-green-600',
    DAO: 'bg-primary-200 text-primary-600',
    Validator: 'bg-[#afe5ff] text-[#30a3ed]',
    Governance: 'bg-[#ffdeb2] text-[#ff9528]',
  };

  const bgClasses = {
    base: 'bg-cover bg-bottom bg-no-repeat',
    city: 'bg-[url(/images/contribute/city-bg.jpg)]',
    atoms: 'bg-[url(/images/contribute/atoms-bg.jpg)]',
    pizza: 'bg-[url(/images/contribute/pizza-bg.jpg)]',
  };

  const additionalClasses = bgCover ? `${bgClasses.base} ${bgClasses[bgCover]}` : '';

  return (
    <div
      className={`flex flex-col rounded-lg border border-grey-700 bg-grey-900 p-4 ${additionalClasses}`}
    >
      <div className={prominent ? 'mb-24' : ''}>
        <span className={`rounded-lg p-1 px-3 text-xs ${tagColors[tag]}`}>{tag}</span>
        <h3 className="my-4 text-xl text-white">{title}</h3>
        <p className="text-sm text-grey-300">{children}</p>
      </div>
      <div className="mt-auto pt-12">
        <a
          href={url}
          className="inline-block rounded bg-grey-800 px-6 py-2 text-white hover:bg-grey-700 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};
