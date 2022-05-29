import * as React from 'react';
import Head from 'next/head';

import { Header } from './header/header';
import { Footer } from './footer/layout-footer';
import { HeadFavicons } from './head/head-favicons';
import { HeadOpenGraph } from './head/head-open-graph';
import { HeadStyles } from './head/head-styles';

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

export const Layout = ({ meta, children, currentPath = '/', overlayHeader }: LayoutProps) => {
  const { title = 'Edgeware', description = '' } = meta || {};

  const path = currentPath.substring(1);
  const pageTitle = `${title} | Edgeware`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <HeadStyles />
        <HeadFavicons />
        <HeadOpenGraph path={path} pageTitle={pageTitle} description={description} />
      </Head>
      <Header overlayHeader={overlayHeader} />
      <main className="block">{children}</main>
      <Footer />
      <div id="modal-root" />
    </>
  );
};
