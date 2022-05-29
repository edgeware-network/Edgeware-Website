import * as React from 'react';

const TEASERS = {
  binance: {
    href: 'https://blog.edgewa.re/binance-distributes-10-of-edg-supply-to-users-2/',
    alt: 'Binance sends out EDG',
  },
  evm: {
    href: 'https://docs.edgeware.wiki/development/develop/smart-contracts/evm-smart-contracts',
    alt: 'EdgeEVM coming soon - ETH developers now port their work to EDG with virtually zero changes. Grow your Dapp.',
  },
  kabocha: {
    href: 'https://www.kabocha.network/',
    alt: 'Kabocha Crowdloan',
  },
  events: {
    href: 'https://calendar.google.com/calendar/u/0/embed?src=commonwealth.im_ihbs892pqubvogtoim6c1hf7ck@group.calendar.google.com',
    alt: 'Community Events every week',
  },
};

export const HomepageTeasers: React.FC = () => {
  return (
    <section className="container mx-auto max-w-7xl" id="teasers">
      <ul className="flex flex-row space-x-4">
        {Object.keys(TEASERS).map((key) => (
          <li className="block" key={key}>
            <a href={TEASERS[key].href} className="block" target="_blank" rel="noopener noreferrer">
              <img
                className="block"
                src={`/images/home/banners/banners-${key}.png`}
                alt={TEASERS[key].alt}
                width="280"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
