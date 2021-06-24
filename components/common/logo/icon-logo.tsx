import * as React from 'react';

import styles from './icon-logo.module.scss';

export const IconLogo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <img
        src="/images/logo/edg-profile-image-magenta@2x.png"
        width="196"
        height="196"
        alt="Edgeware"
      />
    </div>
  );
};
