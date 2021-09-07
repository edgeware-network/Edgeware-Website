import * as React from 'react';

import { H3 } from 'components/common/typography/typography';

interface PartnerCategoryProps {
  categoryName: string
  id: string
}

import styles from './partner-category.module.scss';

export const PartnerCategory: React.FC<PartnerCategoryProps> = ({ categoryName, id, children }) => {
  return (
    <div className={styles.category} id={`category-${id}`}>
      <div className="text-center">
        <H3>{categoryName}</H3>
      </div>
      <div className={styles.items}>
        {children}
      </div>
    </div>
  );
};
