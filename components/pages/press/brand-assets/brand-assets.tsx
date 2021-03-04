import * as React from 'react';
import cn from 'classnames';

import styles from './brand-assets.module.scss';

interface BrandAssetProps {
  type: 'logo' | 'logomark';
  name: string;
  color: string;
}

const logoPath = (type: string, color: string, format: string) =>
  `/assets/press/edgeware-${type}-${color}.${format}`;

export const BrandAsset: React.FC<BrandAssetProps> = ({ type, name, color }) => {
  return (
    <div className={styles.asset}>
      <div
        className={cn(
          styles.assetImage,
          styles[`assetImage-${color}`],
          styles[`assetImage-${type}`]
        )}
      >
        <img src={logoPath(type, color, 'svg')} alt={`Logo asset ${name}`} loading="lazy" />
      </div>
      <div className={styles.assetMeta}>
        <span className={styles.assetName}>{name}</span>
        <span className={styles.assetTypes}>
          <a href={logoPath(type, color, 'png')} target="_blank" rel="noreferrer" download>
            PNG
          </a>
          <a href={logoPath(type, color, 'svg')} target="_blank" rel="noreferrer" download>
            SVG
          </a>
        </span>
      </div>
    </div>
  );
};

export const BrandAssetList: React.FC = ({ children }) => {
  return (
    <ul className={styles.assetList}>
      {React.Children.map(children, (child) => (
        <li className={styles.assetListItem}>{child}</li>
      ))}
    </ul>
  );
};
