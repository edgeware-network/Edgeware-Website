import * as React from 'react';

const TEASERS = {
  binance: {
    href: '/binance',
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
    <section className="container mx-auto max-w-7xl px-4" id="teasers">
      <ul className="flex flex-wrap md:flex-row">
        {Object.keys(TEASERS).map((key) => {
          const isExternal = TEASERS[key].href.startsWith('http');

          return (
            <li className="m-4" key={key}>
              <a
                href={TEASERS[key].href}
                className="block"
                {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <img
                  className="block"
                  src={`/images/home/banners/banners-${key}.png`}
                  alt={TEASERS[key].alt}
                  width="280"
                />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
