import React from 'react';

import { ErrorIcon } from '../components/common/error-icon';

export default function NotFoundPage() {
  return (
    <>
      <section id="content" className="container mx-auto my-24 max-w-7xl">
        <div className="text-center">
          <ErrorIcon code="404" />
          <h1 className="text-6xl">Page not found</h1>
          <p className="my-4">
            You might have entered a wrong URL or this page may no longer exist.
            <br />
            But the links above or below might help you find what you were looking for.
          </p>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: 'Page not found',
        description:
          'Edgeware is a smart contract blockchain with a community-managed treasury, decentralised proposal system and network of DAOs.',
      },
    },
  };
}
