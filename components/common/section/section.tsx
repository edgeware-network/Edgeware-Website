import * as React from 'react';
import cn from 'classnames';

import styles from './section.module.scss';

interface SectionProps {
  id: string;
  background?: 'none' | 'waves' | 'waves-middle' | 'waves-top';
  width: 'narrow' | 'normal' | 'wide' | 'fluid';
  gap?: 'none' | 'standard';
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
    styles[`sectionGap-${gap}`],
    background === 'waves' && styles.backgroundWaves,
    background === 'waves-middle' && styles.backgroundMiddle,
    background === 'waves-top' && styles.backgroundTop
  );

  const containerClass = cn(
    width === 'narrow' && styles.containerNarrow,
    width === 'normal' && 'container',
    width === 'wide' && styles.containerWide,
    width === 'fluid' && styles.containerFluid
  );

  return (
    <section id={id} className={sectionClasses}>
      <div className={containerClass}>{children}</div>
    </section>
  );
};
