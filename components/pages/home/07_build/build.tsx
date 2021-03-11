import * as React from 'react';

import { Icon } from '../../../common/icon/icon';
import { Button } from '../../../common/button/button';

import SvgFile from 'remixicon/icons/Document/file-list-3-line.svg';
import SvgCompas from 'remixicon/icons/Map/compass-discover-line.svg';

import styles from './build.module.scss';
import { H2, P } from '../../../common/typography/typography';

export const Build: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className="text-center">
            <H2 size="2">Want to build on the Edgeware ecosystem?</H2>
            <P style="large">
              The go-to resource for developers to start
              <br />
              building with Edgeware.
            </P>
          </div>
          <ul className={styles.docList}>
            <li className={styles.docItem}>
              <a
                href="https://docs.edgewa.re/"
                className={styles.docLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.docIcon}>
                  <span className={styles.docIconInner}>
                    <Icon component={SvgFile} />
                  </span>
                </span>
                <div className={styles.docLinkInfo}>
                  <strong className={styles.docLinkHeadline}>Documentation</strong>
                  <p className={styles.docLinkText}>
                    Learn about the technology and start building on the Edgeware blockchain.
                  </p>
                </div>
              </a>
            </li>
            <li className={styles.docItem}>
              <a
                href="https://commonwealth.im/edgeware"
                className={styles.docLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.docIcon}>
                  <span className={styles.docIconInner}>
                    <Icon component={SvgCompas} />
                  </span>
                </span>
                <div className={styles.docLinkInfo}>
                  <strong className={styles.docLinkHeadline}>Community</strong>
                  <p className={styles.docLinkText}>
                    Join our growing community and help shape the future of Edgeware and the
                    ecosystem.
                  </p>
                </div>
              </a>
            </li>
          </ul>
          <div className={styles.ctaSection}>
            <Button style="primary" href="/developers">
              Start developing on Edgeware
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
