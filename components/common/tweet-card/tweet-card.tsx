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
}

export const TweetCard: React.FC<TweetCardProps> = ({ name, handle, text, date, avatar }) => {
  const url = `https://twitter.com/${handle}`;
  const onLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(url);
  };
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={avatar} className={styles.avatar} alt={name} loading="lazy" />
        <strong className={styles.name}>{name}</strong>
        <span className={styles.handle}>
          <a href={url} className="link" onClick={onLinkClick}>
            {handle}
          </a>
        </span>
        <span className={styles.icon}>
          <Icon component={IconTwitter} />
        </span>
      </div>
      <div className={styles.body}>{text}</div>
      <div className={styles.footer}>{date}</div>
    </div>
  );
};
