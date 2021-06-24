import * as React from 'react';

import IconDone from '../../../../public/images/mission/mission-done.svg';
import IconTodo from '../../../../public/images/mission/mission-todo.svg';
import IconUnknown from '../../../../public/images/mission/mission-todo.svg';

import styles from './timeline.module.scss';

interface TimelineItemProps {
  name: string;
  date: string;
  isDone?: boolean;
  unknown?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  name,
  date,
  children,
  isDone = false,
  unknown = false,
}) => {
  return (
    <>
      <span className={styles.timelineItemSymbol}>
        <span className={styles.icon}>
          {isDone ? <IconDone /> : unknown ? <IconUnknown /> : <IconTodo />}
        </span>
      </span>
      {!unknown && (
        <div className={styles.item}>
          <span className={styles.itemDate}>{date}</span>
          <h3 className={styles.itemName}>{name}</h3>
          <div className={styles.itemContent}>
            <p>{children}</p>
          </div>
        </div>
      )}
    </>
  );
};

export const TimelineSeparator: React.FC = ({ children }) => (
  <span className={styles.timelineSeparator}>{children}</span>
);

TimelineSeparator.displayName = 'TimelineSeparator';
