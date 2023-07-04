import dynamic from 'next/dynamic';
import { GetStaticProps, NextPage } from 'next';

import { EcosystemHero } from 'components/pages/ecosystem/ecosystem-hero';
import { EcosystemPartnersList } from 'components/pages/ecosystem/ecosystem-list';

import { AllPartnersData, getAllPartners } from 'lib/api';

const DynamicEcosystemWidget = dynamic(
  () => import('../components/pages/ecosystem/widget/ecosystem-widget'),
  {
    ssr: false,
  }
);

type PartnersPageStaticProps = {
  allPartnersByCategory: AllPartnersData;
};

const PartnersPage: NextPage<PartnersPageStaticProps> = ({
  allPartnersByCategory,
}: PartnersPageStaticProps) => {
  return (
    <>
      <EcosystemHero />
      <DynamicEcosystemWidget />
      <EcosystemPartnersList allPartnersByCategory={allPartnersByCategory} />
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
