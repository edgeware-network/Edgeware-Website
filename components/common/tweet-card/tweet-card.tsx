import * as React from 'react';

import IconTwitter from 'remixicon/icons/Logos/twitter-fill.svg';
import { Icon } from '../icon/icon';

import styles from './tweet-card.module.scss';

export interface TweetCardProps {
  text: string;
  date: string;
  name: string;
  handle: string;
  avatar: string;
  url?: string;
}

export const TweetCard: React.FC<TweetCardProps> = ({ name, handle, text, date, avatar, url }) => {
  const profileUrl = `https://twitter.com/${handle}`;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={avatar} className={styles.avatar} alt={name} loading="lazy" />
        <strong className={styles.name}>{name}</strong>
        <span className={styles.handle}>
          <a href={profileUrl} className="link" target="_blank" rel="noopener noreferrer">
            {handle}
          </a>
        </span>
        <span className={styles.icon}>
          <Icon component={IconTwitter} />
        </span>
      </div>
      <div className={styles.body}>{text}</div>
      <div className={styles.footer}>
        {url ? (
          <a href={url} className="link" target="_blank" rel="noopener noreferrer">
            {date}
          </a>
        ) : (
          date
        )}
      </div>
    </div>
  );
};
