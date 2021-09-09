import * as React from 'react';
import slugify from 'slugify';
import IconFunds from 'remixicon/icons/Finance/funds-line.svg';

import { Link } from 'components/common/link/link';
import { Icon } from 'components/common/icon/icon';

import styles from './partner-card.module.scss';

export interface PartnerCardProps {
  name: string;
  description: string;
  link: string;
  funded?: boolean;
}

const getImagePathFromName = (name: string) => {
  const filename = slugify(name, { lower: true });
  return `/images/partners/${filename}.png`;
};

export const PartnerCard: React.FC<PartnerCardProps> = ({
  name,
  description,
  link,
  funded = false,
}) => {
  const iconHref = getImagePathFromName(name);

  return (
    <div className={styles.partnerCard} data-name={name}>
      <div className={styles.content}>
        <span className={styles.logoImageWrapper}>
          <span className={styles.logoImage}>
            <img src={iconHref} alt={name} loading="lazy" />
          </span>
        </span>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.description}>{description}</p>
        {funded && (
          <span className={styles.funded}>
            <Icon component={IconFunds} />
            Funded by the Edgeware Treasury
          </span>
        )}
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
