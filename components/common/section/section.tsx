import * as React from 'react';
import cn from 'classnames';

import styles from './section.module.scss';

interface SectionProps {
  id: string;
  background?: 'none' | 'blocks' | 'waves' | 'waves-middle' | 'waves-top';
  width: 'narrow' | 'normal' | 'wide' | 'fluid';
  gap?: 'none' | 'narrow' | 'standard';
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  background = 'none',
  width = 'normal',
  gap = 'standard',
}) => {
  const sectionClasses = cn(
    styles.section,
    styles[`sectionGap--${gap}`],
    styles[`background--${background}`]
  );

  const containerClass = cn(styles.container, styles[`container--${width}`]);

  return (
    <section id={id} className={sectionClasses}>
      <div className={containerClass}>{children}</div>
    </section>
  );
};
