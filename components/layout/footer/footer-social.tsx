import * as React from 'react';

import IconTwitter from 'remixicon/icons/Logos/twitter-fill.svg';
import IconTelegram from 'remixicon/icons/Logos/telegram-fill.svg';
import IconDiscord from 'remixicon/icons/Logos/discord-fill.svg';
import IconGithub from 'remixicon/icons/Logos/github-fill.svg';
import IconReddit from 'remixicon/icons/Logos/reddit-fill.svg';
import { socialMediaUrls } from 'data/config';

const SOCIAL_LINKS = {
  Twitter: {
    icon: IconTwitter,
    href: socialMediaUrls.twitterUrl,
  },
  Telegram: {
    icon: IconTelegram,
    href: socialMediaUrls.telegramUrl,
  },
  Discord: {
    icon: IconDiscord,
    href: socialMediaUrls.discordUrl,
  },
  Github: {
    icon: IconGithub,
    href: socialMediaUrls.githubUrl,
  },
  IconReddit: {
    icon: IconReddit,
    href: socialMediaUrls.redditUrl,
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
