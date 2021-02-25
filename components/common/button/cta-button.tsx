import * as React from 'react';
import cn from 'classnames';

import IconArrowRight from 'remixicon/icons/System/arrow-drop-right-line.svg';
import IconArrowDown from 'remixicon/icons/System/arrow-down-s-line.svg';

import styles from './button.module.scss';
import { Icon } from '../icon/icon';

interface CTAButtonProps {
  arrow?: 'right' | 'down' | 'none';
  href?: string;
  download?: boolean;
  onClick?: () => void;
  style: 'normal' | 'large';
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  arrow = 'right',
  style,
  href,
  download,
  onClick,
}) => {
  const buttonClasses = cn(styles.CTAButton, styles[`CTAButton-${style}`]);
  const arrowClasses = cn(
    styles.CTAButtonIcon,
    arrow !== 'none' && styles.CTAButtonWithArrow,
    arrow === 'right' && styles.CTAButtonIconRight,
    arrow === 'down' && styles.CTAButtonIconDown
  );

  if (href) {
    const isExternal = href.match(/http/);
    const externalProps = {
      target: '_blank',
      rel: 'noopener noreferrer',
    };

    return (
      <a
        href={href}
        className={buttonClasses}
        download={download}
        {...(isExternal ? externalProps : {})}
      >
        {children}
        {arrow !== 'none' && (
          <span className={arrowClasses}>
            <Icon component={arrow === 'down' ? IconArrowDown : IconArrowRight} />
          </span>
        )}
      </a>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
      {arrow !== 'none' && (
        <span className={arrowClasses}>
          <Icon component={arrow === 'down' ? IconArrowDown : IconArrowRight} />
        </span>
      )}
    </button>
  );
};
