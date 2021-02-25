import * as React from 'react';

import styles from './icon-box.module.scss';

export const IconBoxList: React.FC = ({ children }) => {
  return (
    <div className={styles.list}>
      {React.Children.map(children, (child, index) => (
        <div className={styles.item} key={`item-${index}`}>
          {child}
        </div>
      ))}
    </div>
  );
};
