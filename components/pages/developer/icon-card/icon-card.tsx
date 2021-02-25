import * as React from 'react';

import styles from './icon-card.module.scss';

interface IconCardProps {
  headline: string;
  iconSrc: string;
}

export const IconCard: React.FC<IconCardProps> = ({ headline, children, iconSrc }) => {
  return (
    <div className={styles.card}>
      <img src={iconSrc} alt={headline} className={styles.icon} />
      <strong className={styles.headline}>{headline}</strong>
      <p className={styles.text}>{children}</p>
    </div>
  );
};
