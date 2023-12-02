import * as React from 'react';

import IconTwitter from 'remixicon/icons/Logos/twitter-fill.svg';
import IconTelegram from 'remixicon/icons/Logos/telegram-fill.svg';
import IconDiscord from 'remixicon/icons/Logos/discord-fill.svg';
import IconGithub from 'remixicon/icons/Logos/github-fill.svg';
import IconReddit from 'remixicon/icons/Logos/reddit-fill.svg';
import { socialMediaUrls } from 'data/config';

import IconMatrix from '../../../public/images/common/matrix-logo-white.svg';
import IconPeeranha from '../../../public/images/common/peeranha-logo-white.svg';

const SOCIAL_LINKS = {
  Discord: {
    icon: IconDiscord,
    href: socialMediaUrls.discordUrl,
  },
  Twitter: {
    icon: IconTwitter,
    href: socialMediaUrls.twitterUrl,
  },
  Telegram: {
    icon: IconTelegram,
    href: socialMediaUrls.telegramUrl,
  },
  Github: {
    icon: IconGithub,
    href: socialMediaUrls.githubUrl,
  },
  Reddit: {
    icon: IconReddit,
    href: socialMediaUrls.redditUrl,
  },
  Matrix: {
    icon: IconMatrix,
    href: socialMediaUrls.matrixUrl,
  },
  Peeranha: {
    icon: IconPeeranha,
    href: socialMediaUrls.peeranhaUrl,
  },
};

export const FooterSocial = () => {
  const linkEntries = Object.entries(SOCIAL_LINKS);
  return (
    <div className="flex flex-row justify-start">
      {linkEntries.map(([key, linkData]) => {
        const Icon = linkData.icon;
        if (key === 'Matrix') {
          return (
            <a
              href={linkData.href}
              className="mr-2 opacity-25 hover:opacity-50"
              target="_blank"
              rel="noopener noreferrer"
              key={key}
              aria-label={key}
            >
              <Icon className="h-8 fill-white" />
            </a>
          );
        }

        return (
          <a
            href={linkData.href}
            className="mr-4 opacity-25 hover:opacity-50"
            target="_blank"
            rel="noopener noreferrer"
            key={key}
            aria-label={key}
          >
            <Icon className="h-8 w-8 fill-white" />
          </a>
        );
      })}
    </div>
  );
};
