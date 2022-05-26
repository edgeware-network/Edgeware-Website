import React from 'react';
import type { NextPage } from 'next';

import { Newsletter } from '../components/common/newsletter/newsletter';
import { ContributeHero } from 'components/pages/contribute/contribute-hero';
import { ContributeEDGizen } from 'components/pages/contribute/contribute-edgizen';
import { ContributeProposal } from 'components/pages/contribute/contribute-proposal';
import { ContributeExamples } from 'components/pages/contribute/contribute-examples';

const ContributePage: NextPage = () => {
  return (
    <>
      <ContributeHero />
      <ContributeExamples />
      <ContributeEDGizen />
      <ContributeProposal />

      <Newsletter />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: 'The best place to work in crypto',
        description: 'In Edgeware, we reward contributors beyond validation and staking.',
      },
    },
  };
}

export default ContributePage;
