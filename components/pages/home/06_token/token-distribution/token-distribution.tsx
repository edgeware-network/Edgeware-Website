import * as React from 'react';
import Image from 'next/image';

import styles from './token-distribution.module.scss';

export const TokenDistribution: React.FC = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className="row justify-content-center">
        <div className="col-md-4">{children}</div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div className={styles.tokenDistribution}>
            <span className={styles.tokenDistributionBig}>
              <img
                src="/images/home/token/edg-distribution-chart-desktop.png?v=2"
                width="1492"
                height=" 614"
                loading="lazy"
                alt="EDG Token Distribution: Public Lockdrop: 90%, Commonwealth Labs: 4.5%, Parity: 3%, Strategic Advisors 2.5%"
                // quality="100"
              />
            </span>
            <span className={styles.tokenDistributionSmall}>
              <img
                src="/images/home/token/edg-distribution-chart-mobile.png?v=2"
                width="320"
                height="539"
                loading="lazy"
                alt="EDG Token Distribution: Public Lockdrop: 90%, Commonwealth Labs: 4.5%, Parity: 3%, Strategic Advisors 2.5%"
                // quality="100"
                // layout="fixed"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
