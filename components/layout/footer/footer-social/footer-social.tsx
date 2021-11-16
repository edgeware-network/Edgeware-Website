import * as React from 'react';

import styles from './footer-social.module.scss';

import IconTwitter from 'remixicon/icons/Logos/twitter-fill.svg';
import IconTelegram from 'remixicon/icons/Logos/telegram-fill.svg';
import IconDiscord from 'remixicon/icons/Logos/discord-fill.svg';
import IconGithub from 'remixicon/icons/Logos/github-fill.svg';
import IconReddit from 'remixicon/icons/Logos/reddit-fill.svg';

import { Icon } from '../../../common/icon/icon';

const SOCIAL_LINKS = {
  Twitter: {
    icon: IconTwitter,
    href: 'https://twitter.com/HeyEdgeware',
  },
  Telegram: {
    icon: IconTelegram,
    href: 'https://t.me/heyedgeware',
  },
  Discord: {
    icon: IconDiscord,
    href: 'https://discord.com/invite/bDktqyj',
  },
  Github: {
    icon: IconGithub,
    href: 'https://github.com/orgs/Edgeware-Network',
  },
  IconReddit: {
    icon: IconReddit,
    href: 'https://www.reddit.com/r/edgeware',
  },
};

export const FooterSocial: React.FC = () => {
  const linkEntries = Object.entries(SOCIAL_LINKS);
  return (
    <div className={styles.socialLinks}>
      {linkEntries.map(([key, linkData]) => (
        <a
          href={linkData.href}
          className={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
          key={key}
          aria-label={key}
        >
          <Icon component={linkData.icon} />
        </a>
      ))}
    </div>
  );
};
