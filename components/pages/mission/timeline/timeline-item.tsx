import * as React from 'react';

import IconCheckmark from 'remixicon/icons/System/check-line.svg';
import IconArrow from 'remixicon/icons/System/arrow-down-s-line.svg';

import { Icon } from '../../../common/icon/icon';

import styles from './timeline.module.scss';

interface TimelineItemProps {
  name: string;
  date: string;
  isDone?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ name, date, children, isDone }) => {
  return (
    <>
      <span className={styles.timelineItemSymbol}>
        {isDone && (
          <span className={styles.iconCheckmark}>
            <Icon component={IconCheckmark} />
          </span>
        )}
        {!isDone && (
          <span className={styles.iconTodo}>
            <Icon component={IconArrow} />
          </span>
        )}
      </span>
      <div className={styles.item}>
        <span className={styles.itemDate}>{date}</span>
        <h3 className={styles.itemName}>{name}</h3>
        <div className={styles.itemContent}>
          <p>{children}</p>
        </div>
      </div>
    </>
  );
};

export const TimelineSeparator: React.FC = ({ children }) => (
  <span className={styles.timelineSeparator}>{children}</span>
);

TimelineSeparator.displayName = 'TimelineSeparator';
