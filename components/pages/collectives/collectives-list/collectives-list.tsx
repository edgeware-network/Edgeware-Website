import * as React from 'react';
import cn from 'classnames';

import styles from './collectives-list.module.scss';

import { CollectiveCard, CollectiveCardProps } from '../collective-card/collective-card';

interface CollectivesListProps {
  items: CollectiveCardProps[];
}

export const CollectivesList: React.FC<CollectivesListProps> = ({ items }) => {
  if (!items.length) {
    return null;
  }

  return (
    <div className={styles.list}>
      {items.map((item, index) => (
        <div className={cn(styles.listItem, item.promo ? styles.listItemSpecial : '')} key={index}>
          <CollectiveCard {...item} />
        </div>
      ))}
    </div>
  );
};
