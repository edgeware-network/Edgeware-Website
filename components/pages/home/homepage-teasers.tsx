import * as React from 'react';

const TEASERS = {
  giftdrop: {
    href: '/giftdrop',
    alt: 'GiftDrop is a series of free commemorative mint drops for the EDGizens!',
  },
  nft: {
    href: '/nft',
    alt: 'Your NFT Page!',
  },
  csp: {
    href: '/csp',
    alt: 'Support the ongoing community contributions through the monthly editions of limited NFTs and get exclusive perks.',
  },
  evm: {
    href: 'https://docs.edgeware.wiki/development/develop/smart-contracts/evm-smart-contracts',
    alt: 'Explore the vanilla implementation of full-fledged EVM running in the same high-performant substrate solochain.',
  },
  binance: {
    href: '/binance',
    alt: 'Binance distributed EDG to their ETH holding users of lockdrop timeframe.',
  },
  kabocha: {
    href: 'https://www.kabocha.network/',
    alt: 'Kabocha Parachain',
  },
  events: {
    href: 'https://calendar.google.com/calendar/u/0/embed?src=commonwealth.im_ihbs892pqubvogtoim6c1hf7ck@group.calendar.google.com',
    alt: 'Join the weekly Community Calls to shape the evolution of Edgeware ecosystem.',
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
