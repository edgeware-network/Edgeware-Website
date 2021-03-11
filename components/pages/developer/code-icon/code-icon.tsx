import * as React from 'react';

import styles from './code-icon.module.scss';

export const CodeIcon: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <img
        src="/images/developer/code-s-slash-large.png"
        alt="Builders Guild Icon"
        loading="lazy"
        width="474"
        height="472"
      />
    </div>
  );
};
