import * as React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import { Header } from './header/header';
import { Main } from './main/main';
import { Footer } from './footer/footer';

const Particles = dynamic(() => import('./particles/particles'), { ssr: false });
interface LayoutProps {
  meta?: {
    title: string;
    description: string;
  };
  currentPath: string;
  title: string;
  simpleLayout?: boolean;
  particles: boolean;
}

const DOMAIN = 'https://edgewa.re';
const SITE_NAME = 'edgewa.re';

export const Layout: React.FC<LayoutProps> = ({
  meta = {},
  children,
  simpleLayout,
  particles,
  currentPath,
}) => {
  const { title, description } = meta;

  const path = currentPath.substring(1);
  const pageTitle = `${title} | Edgeware`;
  const pageUrl = `${DOMAIN}/${path}`;
  const ogImage = `/images/og/og-image-${path === '' ? 'home' : path}.jpg`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />

        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;500;600&amp;display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#151515" />
        <meta name="msapplication-TileColor" content="#151515" />
        <meta name="theme-color" content="#151515" />

        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@HeyEdgeware" />
        <meta property="twitter:domain" content={SITE_NAME} />
        <meta property="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Head>
      <Header />
      <Main layout={simpleLayout ? 'simple' : 'advanced'}>{children}</Main>
      <Footer />
      <div id="modal-root" />
      {particles && <Particles />}
    </>
  );
};
