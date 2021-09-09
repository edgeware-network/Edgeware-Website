import * as React from 'react';
import slugify from 'slugify';

interface PartnerNavProps {
  items: string[];
}

import styles from './partner-nav.module.scss';

export const PartnerNav: React.FC<PartnerNavProps> = ({ items }) => {
  return (
    <div className={styles.items}>
      {items.map((cat) => (
        <a
          className={styles.anchorLink}
          href={`#category-${slugify(cat, { lower: true })}`}
          key={cat}
        >
          {cat}
        </a>
      ))}
    </div>
  );
};
