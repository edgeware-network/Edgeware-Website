import * as React from 'react';

import styles from './banners.module.scss';

const BANNERS = {
  kucoin: {
    href: 'https://www.kucoin.com/news/en-edg-gets-listed-on-kucoin',
    alt: 'Kucoin Lists Edgeware',
  },
  evm: {
    href: 'https://docs.edgeware.wiki/development/develop/smart-contracts/evm-smart-contracts',
    alt: 'EdgeEVM coming soon',
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
                src={`/images/home/banners/banners-${key}.png`}
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
