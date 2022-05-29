import * as React from 'react';

import { PressIntro } from 'components/pages/press/press-intro';
import { PressBrandAssets } from 'components/pages/press/press-brand-assets';
import { PressEnquiries } from 'components/pages/press/press-enquiries';

import { Newsletter } from '../components/common/newsletter/newsletter';

export default function Press() {
  return (
    <>
      <PressIntro />
      <PressBrandAssets />
      <PressEnquiries />
      <Newsletter />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: 'News and Announcements',
        description:
          'The latest updates on Edgeware, product releases and announcements and media mentions.',
      },
    },
  };
}
