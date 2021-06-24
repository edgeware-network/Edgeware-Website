import * as React from 'react';

import styles from './banners.module.scss';

const BANNERS = {
  bittrex: {
    href: 'https://medium.com/bittrexglobal/new-listing-edgeware-edg-db01ec89250c',
    alt: 'Bittex Global Lists Edgeware',
  },
  evm: {
    href: 'https://blog.edgewa.re/evm-launch-on-edgeware-brings-wealth-of-ethereum-contracts-and-developers-to-substrate/',
    alt: 'Use EVM on EDG today',
  },
  coinbase: {
    href: 'https://ventures.coinbase.com/',
    alt: 'Coinbase Ventures ❤️ EDG',
  },
  events: {
    href: 'https://calendar.google.com/calendar/u/0/embed?src=commonwealth.im_ihbs892pqubvogtoim6c1hf7ck@group.calendar.google.com',
    alt: 'Community Events every week',
  },
};

export const Banners: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {Object.keys(BANNERS).map((key) => (
          <li className={styles.item} key={key}>
            <a
              href={BANNERS[key].href}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`/images/home/banners/banners-${key}.jpg`}
                alt={BANNERS[key].alt}
                width="280"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
