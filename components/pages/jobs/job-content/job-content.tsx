import * as React from 'react';

interface JobContentProps {
  content: string;
}

import styles from './job-content.module.scss';

export const JobContent: React.FC<JobContentProps> = ({ content }) => {
  return (
    <div className={styles.content}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};
