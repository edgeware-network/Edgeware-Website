import * as React from 'react';
import { Button } from '../../../common/button/button';
import { Icon } from '../../../common/icon/icon';

import styles from './icon-box.module.scss';

interface IconBoxProps {
  headline: string;
  headlineSeparator?: boolean;
  targetButton?: string;
  iconComponent?: any;
  imageUrl?: string;
  imageWidth?: React.ReactText;
  imageHeight?: React.ReactText;
}

export const IconBox: React.FC<IconBoxProps> = (props) => {
  const {
    headline,
    headlineSeparator,
    children,
    iconComponent,
    imageUrl,
    imageWidth,
    imageHeight,
    targetButton,
  } = props;
  return (
    <div className={styles.box}>
      {iconComponent && <Icon component={iconComponent} />}
      {imageUrl && (
        <span className={styles.image}>
          <img
            src={imageUrl}
            alt={headline}
            loading="lazy"
            // layout="fixed"
            width={imageWidth}
            height={imageHeight}
          />
        </span>
      )}
      {headlineSeparator && <span className={styles.headlineSeparator} />}
      <strong className={styles.headline}>{headline}</strong>
      <p className={styles.text}>{children}</p>

      {targetButton && (
        <div className={styles.actions}>
          <Button style="secondary" href={targetButton}>
            Visit Project
          </Button>
        </div>
      )}
    </div>
  );
};
