import * as React from 'react';
import Head from 'next/head';

import { Header } from './header/header';
import { LayoutMain } from './layout-main';
import { Footer } from './footer/layout-footer';

type LayoutProps = {
  children: React.ReactNode;
  meta: {
    title: string;
    description: string;
  };
  currentPath?: string;
  simpleLayout?: boolean;
  overlayHeader?: boolean;
};

const DOMAIN = 'https://edgewa.re';
const SITE_NAME = 'edgewa.re';

export const Layout = ({ meta, children, currentPath = '/', overlayHeader }: LayoutProps) => {
  const { title, description } = meta || {};

  const path = currentPath.substring(1);
  const pageTitle = `${title} | Edgeware`;
  const pageUrl = `${DOMAIN}/${path}`;
  const ogImageUrl = `${DOMAIN}/images/og/og-image-${path === '' ? 'home' : path}.jpg?v3`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff3b80" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImageUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@EdgewareDAO" />
        <meta property="twitter:domain" content={SITE_NAME} />
        <meta property="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <Header overlayHeader={overlayHeader} />
      <LayoutMain>{children}</LayoutMain>
      <Footer />
      <div id="modal-root" />
    </>
  );
};
