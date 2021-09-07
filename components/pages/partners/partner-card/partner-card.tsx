import * as React from 'react';

import { Link } from 'components/common/link/link';

import styles from './partner-card.module.scss';

export interface PartnerCardProps {
  name: string;
  description: string;
  link: string;
  funded?: boolean;
}

const getImagePathFromName = (name: string) => {
  const filename = name.toLowerCase().replace(/\s/gi, '-')
  return `/images/partners/${filename}.png`
}

export const PartnerCard: React.FC<PartnerCardProps> = ({
  name,
  description,
  link,
}) => {

  const iconHref = getImagePathFromName(name)

  return (
    <div className={styles.partnerCard}>
      <div className={styles.content}>
        <span className={styles.logoImageWrapper}>
          <span className={styles.logoImage}>
            <img
              src={iconHref}
              alt={name}
              loading="lazy"
              // layout="fixed"
              // width={imageWidth}
              // height={imageHeight}
            />
          </span>
        </span>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.action}>
        <Link href={link}>Learn more</Link>
      </div>
    </div>
  );
};

export const PartnerCardList: React.FC = ({ children }) => {
  return (
    <ul className={styles.list}>
      {React.Children.map(children, (child, index) => (
        <li className={styles.listItem} key={`item-${index}`}>
          {child}
        </li>
      ))}
    </ul>
  );
};
