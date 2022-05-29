import * as React from 'react';

import IconTwitter from 'remixicon/icons/Logos/twitter-fill.svg';
import IconTelegram from 'remixicon/icons/Logos/telegram-fill.svg';
import IconDiscord from 'remixicon/icons/Logos/discord-fill.svg';
import IconGithub from 'remixicon/icons/Logos/github-fill.svg';
import IconReddit from 'remixicon/icons/Logos/reddit-fill.svg';

const SOCIAL_LINKS = {
  Twitter: {
    icon: IconTwitter,
    href: 'https://twitter.com/EdgewareDAO',
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

export const FooterSocial = () => {
  const linkEntries = Object.entries(SOCIAL_LINKS);
  return (
    <div className="flex flex-row justify-start">
      {linkEntries.map(([key, linkData]) => {
        const Icon = linkData.icon;
        return (
          <a
            href={linkData.href}
            className="mr-4 opacity-25 hover:opacity-50"
            target="_blank"
            rel="noopener noreferrer"
            key={key}
            aria-label={key}
          >
            <Icon className="h-6 w-6 fill-white" />
          </a>
        );
      })}
    </div>
  );
};
