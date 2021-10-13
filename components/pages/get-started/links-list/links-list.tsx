import * as React from 'react';
import cn from 'classnames';
import Link from 'next/link';

import styles from './links-list.module.scss';
import { Icon } from 'components/common/icon/icon';

export interface LinkItem {
  label: string;
  icon: any;
  href: string;
}

interface LinksListProps {
  headline: string;
  items: LinkItem[];
  highlight?: boolean;
}

export const LinksList: React.FC<LinksListProps> = ({ headline, items, highlight }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.headline}>{headline}</h2>
      <ul className={cn(styles.list, highlight && styles.listHighlight)}>
        {items.map((item, index) => {
          const isExternal = item.href.match(/https/);

          const linkBody = (
            <>
              {item.icon && (
                <span className={styles.icon}>
                  <Icon component={item.icon} />
                </span>
              )}
              {item.label}
            </>
          );

          return (
            <li className={styles.listItem} key={`ll-${index}`}>
              {isExternal ? (
                <a
                  className={cn(styles.link, highlight && styles.linkHighlight)}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {linkBody}
                </a>
              ) : (
                <Link href={item.href}>
                  <a className={cn(styles.link, highlight && styles.linkHighlight)}>{linkBody}</a>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
