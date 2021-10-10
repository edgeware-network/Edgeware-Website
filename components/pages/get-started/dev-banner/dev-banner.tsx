import * as React from 'react'

import styles from './dev-banner.module.scss'

interface DevBannerProps {
  headline: string;
  leadText: string;
  href: string;
}

export const DevBanner: React.FC<DevBannerProps> = ({headline, leadText, href}) => {
  const isExternal = href.match(/https/)
  return (
    <div className={styles.wrapper}>
      <a className={styles.banner} href={href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noopener noreferrer' : 'internal'}>
        <strong className={styles.headline}>{headline}</strong>
        <span className={styles.leadText}>{leadText}</span>
      </a>
    </div>
  )
}
