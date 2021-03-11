import * as React from 'react';

import cn from 'classnames';

import IconBubbleChart from 'remixicon/icons/Business/bubble-chart-line.svg';
import IconPlus from 'remixicon/icons/System/add-line.svg';

import { Icon } from '../../../common/icon/icon';

import styles from './collective-card.module.scss';

export interface CollectiveCardProps {
  imageSrc?: string;
  title: string;
  description: string;
  members?: string;
  promo?: boolean;
  href?: string;
}

const PromoImage = () => (
  <div className={styles.promoImage}>
    <Icon component={IconPlus} />
  </div>
);

export const CollectiveCard: React.FC<CollectiveCardProps> = (props) => {
  const { imageSrc, title, description, members = '10+', promo = false, href } = props;
  const hasAction = Boolean(href);
  return (
    <div className={cn(styles.card, { [`${styles.cardPromo}`]: promo })}>
      <div className={styles.image}>
        {promo ? <PromoImage /> : <img src={imageSrc} alt={title} loading="lazy" />}
      </div>
      <div className={styles.body}>
        <strong className={styles.title}>{title}</strong>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={cn(styles.footer, promo && styles.footerPromo)}>
        {!promo && (
          <span className={styles.members}>
            <Icon component={IconBubbleChart} />
            {members} Members
          </span>
        )}
        {hasAction && (
          <a href={href} className={styles.action} target="_blank" rel="noopener noreferrer">
            {promo ? 'Start your own' : 'Join'}
          </a>
        )}
      </div>
    </div>
  );
};
