import * as React from 'react';

import Icon404 from '../../../public/images/custom/404.svg';
import Icon500 from '../../../public/images/custom/500.svg';

import styles from './error-icon.module.scss';

interface ErrorIconProps {
  code: '404' | '500';
}

export const ErrorIcon: React.FC<ErrorIconProps> = ({ code }) => {
  return <div className={styles.errorIcon}>{code === '404' ? <Icon404 /> : <Icon500 />}</div>;
};
