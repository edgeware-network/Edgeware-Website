import * as React from 'react';
import cn from 'classnames';

import { FooterForm } from './footer-form/footer-form';
import { FooterNav } from './footer-nav/footer-nav';
import { FooterSocial } from './footer-social/footer-social';

import styles from './footer.module.scss';

type LinkLabel = string;
type LinkValue = string;
interface FooterLinksGroup {
  headline: string;
  items: Record<LinkLabel, LinkValue>;
}

const FOOTER_LINKS: FooterLinksGroup[] = [
  {
    headline: 'Ecosystem',
    items: {
      Mission: '/mission',
      Collectives: '/collectives',
      Lockdrop: 'https://commonwealth.im/edgeware/stats',
      Press: '/press',
      'Swag Store': 'https://edgeware.store/#',
    },
  },
  {
    headline: 'Developers',
    items: {
      'Get started': '/developers',
      Documentation: 'https://main.edgeware.wiki/',
      Validators: 'https://main.edgeware.wiki/quickstart/set-up-a-validator',
      Whitepaper:
        'https://arena-attachments.s3.amazonaws.com/4643268/c8d128724f36b716660e4bf21823e760.pdf?1563310093',
      Keygen: '/keygen',
    },
  },
  {
    headline: 'Community',
    items: {
      Collectives: '/collectives',
      Commonwealth: 'https://commonwealth.im/',
      'Decent Partners': 'https://www.decent.partners/',
      'Edgeware Agency': 'https://edgeware.agency/',
      Jobs: '/jobs',
    },
  },
  {
    headline: 'Legal',
    items: {
      'Privacy Policy': '/privacy',
    },
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerNavSection}>
          {FOOTER_LINKS.map((group, index) => (
            <div className={styles.footerNavSectionItem} key={`group-${index}`}>
              <strong className={styles.footerNavSectionHeadline}>{group.headline}</strong>
              <FooterNav items={group.items} />
            </div>
          ))}

          <div className={cn(styles.footerNavSectionItem, styles.footerNavSectionItemForm)}>
            <div>
              <strong className={styles.footerNavSectionHeadline}>Sign up for our updates</strong>
              <FooterForm />
            </div>
            <div>
              <strong className={styles.footerNavSectionHeadline}>Find us on</strong>
              <FooterSocial />
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>© 2019 - {new Date().getFullYear()} Edgeware built by the Commonwealth Community</p>
          <span className={styles.copyrightMinor}>
            Edgeware is a blockchain network focused on funding and promoting open collectives
            through decentralised governance. This governance process is used to fund, manage, and
            deploy improvements to the network, creating a self-improving system that coordinates
            and supports its own development.
          </span>
        </div>
      </div>
    </footer>
  );
};
