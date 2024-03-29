import { HomepageEconomicsTokenWidget } from './homepage-economics-token-widget';

const LOCKDROP_STATS = {
  'Public Lockdrop': {
    value: 90,
    color: 'bg-primary-500',
  },
  'Commonwealth Labs': {
    value: 4.5,
    color: 'bg-primary-400',
  },
  'Parity Technologies Labs': {
    value: 3.0,
    color: 'bg-primary-300',
  },
  'Community Incentives': {
    value: 2.5,
    color: 'bg-primary-200',
  },
};

export const HomepageEconomics = () => {
  return (
    <section id="edg-economics" className="mt-6 md:mt-12 lg:mt-24">
      <div className="bg-[url('/images/home/economics/edg-token-bg@2x.png')] bg-cover bg-center bg-no-repeat py-24">
        {/* basic info */}
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col justify-between md:flex-row">
            <div className="order-2 w-full md:order-1 md:w-2/4">
              <h2 className="my-8 text-4xl font-medium lg:text-5xl">EDG Economics</h2>
              <p className="my-4 text-lg">
                The EDG token incentivises and rewards the participants in the ecosystem, ensuring
                everyone remains aligned to a common purpose of expanding both the usefulness and
                awareness of the network.
              </p>
              <p className="my-4 text-lg">
                The token has one of the widest distributions in crypto-currency, with over 15m
                unique addresses receiving the token as part of the 2019 lockdrop.
              </p>
              <p className="my-4 text-lg">
                This offers the project a huge advantage over many less well distributed projects,
                both in terms of the breadth of its ownership, lack of outside influence and the
                scale of the opportunity to increase its value.
              </p>
            </div>
            <div className="order-1 w-full md:order-2 md:w-1/4">
              <HomepageEconomicsTokenWidget />
            </div>
          </div>
        </div>

        {/* lockdrop stats */}
        <div className="container mx-auto my-16 max-w-7xl px-4">
          <div className="flex h-5 flex-row overflow-hidden rounded-full bg-white md:h-8">
            {Object.entries(LOCKDROP_STATS).map(([name, stat]) => {
              return <span className={stat.color} key={name} style={{ width: `${stat.value}%` }} />;
            })}
          </div>

          <ul className="my-4 flex flex-col justify-between space-y-2 md:my-8 md:flex-row md:space-y-0 md:space-x-2">
            {Object.entries(LOCKDROP_STATS).map(([name, stat]) => {
              return (
                <li
                  key={name}
                  className="flex flex-row space-x-4 rounded-md bg-grey-700 p-2 pr-4 align-middle"
                >
                  <span className={`h-6 w-6 rounded-full ${stat.color}`} />
                  <span className="text-white">{stat.value}%</span>
                  <span className="text-primary-500">{name}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* highlights */}
        <div className="container mx-auto my-4 max-w-7xl px-4 md:my-8 lg:my-16">
          <div className="flex flex-col justify-between md:flex-row md:space-x-16 lg:space-x-36">
            <div className="w-full md:w-1/3">
              <h3 className="my-4 border-b border-b-primary-500 py-2 md:text-lg">
                Fair &amp; Open Launch
              </h3>
              <p className="text-sm leading-relaxed text-grey-300">
                Edgeware pioneered the lockdrop, a fully open, decentralized and fair network launch
                and token distribution mechanism. The first of its kind, it helped ensure a robust
                utility token with governance protections.
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="my-4 border-b border-b-primary-500 py-2 text-lg">
                Decentralized Bootstrapping
              </h3>
              <p className="text-sm leading-relaxed text-grey-300">
                The lockdrop used the opportunity cost of the ETH locked up and returned to set the
                price of the EDG token. Even without any real payment, the opportunity cost basis
                was enough to kickstart a large community treasury with value on the market.
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="my-4 border-b border-b-primary-500 py-2 text-lg">
                Sustainable Growth
              </h3>
              <p className="text-sm leading-relaxed text-grey-300">
                Once the token had value, it began the process of self-improvement: grants, funding
                and payments to the development of our protocol, ecosystem and more, driving utility
                into the token.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
