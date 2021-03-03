import * as React from 'react';
import { Button } from '../button/button';
import { Icon } from '../icon/icon';

import styles from './action-card.module.scss';

export interface IActionCardProps {
  iconComponent?: any;
  headline: string;
  text: string;
  buttonText: string;
  buttonHref: string;
  onButtonClick?: () => void;
}

export function ActionCard(props: IActionCardProps) {
  const { iconComponent, headline, text, buttonText, buttonHref, onButtonClick } = props;

  return (
    <div className={styles.card}>
      <div className={styles.icon}>{iconComponent && <Icon component={iconComponent} />}</div>
      <div className={styles.content}>
        <h2 className={styles.headline}>{headline}</h2>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.button}>
        <Button href={buttonHref} fullWidth onClick={onButtonClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
