import * as React from 'react';
import { GetStaticProps, NextPage } from 'next';

import { getAllPartners, AllPartnersData } from 'lib/api';
import { PartnersHero } from 'components/pages/partners/partners-hero';
import { PartnersList } from 'components/pages/partners/partners-list';

type PartnersPageStaticProps = {
  allPartnersByCategory: AllPartnersData;
};

const PartnersPage: NextPage<PartnersPageStaticProps> = ({
  allPartnersByCategory,
}: PartnersPageStaticProps) => {
  return (
    <>
      <PartnersHero />
      <PartnersList allPartnersByCategory={allPartnersByCategory} />
    </>
  );
};

export const getStaticProps: GetStaticProps<PartnersPageStaticProps> = async () => {
  const allPartnersByCategory = getAllPartners();

  return {
    props: {
      meta: {
        title: 'Ecosystem - Home to next generation networks',
        description:
          'Edgeware partners with leading cryptocurrency teams, projects and collectives to create the future of Web3',
      },
      layout: {
        overlayHeader: true,
      },
      allPartnersByCategory,
    },
  };
};

export default PartnersPage;
