import * as React from 'react';

import styles from './projects.module.scss';
import { ProjectsSlider } from './projects-slider/projects-slider';

export const Projects: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <ProjectsSlider />
    </div>
  );
};
