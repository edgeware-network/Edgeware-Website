import * as React from 'react';

import IconCoin from 'remixicon/icons/Finance/copper-coin-line.svg';
import { Icon } from '../../../../common/icon/icon';
import { Button } from '../../../../common/button/button';

import styles from './project-slide.module.scss';

interface ProjectSlideProps {
  funding: string;
  headline: string;
  subHeadline: string;
  href: string;
  imageUrl: string;
}

export const ProjectSlide: React.FC<ProjectSlideProps> = (props) => {
  const { funding, headline, subHeadline, children, href, imageUrl } = props;

  return (
    <div className={styles.slide}>
      <div className={styles.slideContent}>
        <span className={styles.slideFunding}>
          <Icon component={IconCoin} />
          {funding}
        </span>
        <h4 className={styles.slideHeadline}>{headline}</h4>
        <strong className={styles.slideSubHeadline}>{subHeadline}</strong>
        <p className={styles.text}>{children}</p>
        <Button>Visit Project</Button>
      </div>
      <div className={styles.slideImage}>
        <img src={imageUrl} alt={headline} />
      </div>
    </div>
  );
};
