import * as React from 'react';
import { Button } from '../../../common/button/button';
import { H2, P } from '../../../common/typography/typography';

import styles from './edgeware-node.module.scss';

export const EdgewareNode: React.FC = () => {
  return (
    <div className={styles.containerBox}>
      <div className={styles.inner}>
        <H2 inverted>
          Want to be a validator and run your own <em>Edgeware</em> node?
        </H2>
        <P inverted>Find out the benefits and how easy it is to set it up.</P>
        <div className={styles.cta}>
          <Button href="https://docs.edgeware.wiki/quickstart/set-up-a-validator" style="black">
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};
