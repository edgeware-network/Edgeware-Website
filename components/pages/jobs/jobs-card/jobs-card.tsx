import * as React from 'react';

import { Button } from '../../../common/button/button';

import styles from './jobs-card.module.scss';

export interface JobsCardProps {
  title: string;
  role: string;
  buttonText?: string;
  buttonHref: string;
}

export const JobsCard: React.FC<JobsCardProps> = ({ title, role, buttonText = "Learn more", buttonHref } ) => {
  return (
    <div className={styles.jobsCard}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.role}>
          {role}
        </p>
      </div>
      <div className={styles.button}>
        <Button href={buttonHref} style="primary-small" as="link">
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

export const JobsCardList: React.FC = ({ children }) => {
  return (
    <ul className={styles.list}>
      {React.Children.map(children, (child, index) => (
        <li className={styles.listItem} key={`item-${index}`}>
          {child}
        </li>
      ))}
    </ul>
  )
}
