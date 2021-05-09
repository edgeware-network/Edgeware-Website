import React from 'react';
import { ErrorIcon } from '../components/common/error-icon/error-icon';

import { Section } from '../components/common/section/section';
import { H1, P } from '../components/common/typography/typography';

export default function NotFoundPage() {
  React.useEffect(() => {
    if (window.location.pathname === '/keygen/') {
      window.location.href = '/keygen'
    }
  }, [])

  return (
    <>
      <Section id="content" width="narrow">
        <div className="text-center">
          <ErrorIcon code="404" />
          <H1 size="2">Page not found</H1>
          <P>
            You might have entered a wrong URL or this page may no longer exist.
            <br />
            But the links above or below might help you find what you were looking for.
          </P>
        </div>
      </Section>
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
      layout: {
        particles: true,
      },
    },
  };
}
