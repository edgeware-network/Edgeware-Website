import * as React from 'react';

import IconDone from '../../../../public/images/mission/mission-done.svg';
import IconTodo from '../../../../public/images/mission/mission-todo.svg';

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
          <span className={styles.icon}>
            <IconDone />
          </span>
        )}
        {!isDone && (
          <span className={styles.icon}>
            <IconTodo />
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
