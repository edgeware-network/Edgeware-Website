import * as React from 'react';
import { GetStaticProps, NextPage } from 'next';
import slugify from 'slugify';
import { H2 } from '../components/common/typography/typography';
import { Section } from '../components/common/section/section';
import { StaticHero } from '../components/common/static-hero/static-hero';

import {
  PartnerCardList,
  PartnerCard,
} from '../components/pages/partners/partner-card/partner-card';
import { PartnerCategory } from 'components/pages/partners/partner-category/partner-category';
import { PartnerNav } from 'components/pages/partners/partner-nav/partner-nav';

import { getAllPartners, AllPartnersData } from 'lib/api';

interface PartnersPageStaticProps {
  allPartnersByCategory: AllPartnersData;
}

const PartnersPage: NextPage<PartnersPageStaticProps> = ({ allPartnersByCategory }) => {
  return (
    <>
      <StaticHero
        headline="Conquering crypto together"
        leadText="Edgeware is partnering with leading cryptocurrency brands and digital communities to build the future of crypto ecosystem."
        heroStyle="partners"
      />

      <Section id="roles" width="wide">
        <div className="text-center">
          <H2 size="2">Our Partners</H2>
        </div>

        <PartnerNav items={allPartnersByCategory.map((g) => g.category)} />

        <div>
          {allPartnersByCategory.map((partnerGroup) => (
            <PartnerCategory
              key={partnerGroup.category}
              categoryName={partnerGroup.category}
              id={slugify(partnerGroup.category, { lower: true })}
            >
              <PartnerCardList>
                {partnerGroup.partners.map((partner) => (
                  <PartnerCard {...partner} key={partner.name} />
                ))}
              </PartnerCardList>
            </PartnerCategory>
          ))}
        </div>
      </Section>
    </>
  );
};

export const getStaticProps: GetStaticProps<PartnersPageStaticProps> = async () => {
  const allPartnersByCategory = getAllPartners();

  return {
    props: {
      meta: {
        title: 'Conquering crypto together',
        description:
          'Edgeware is partnering with leading cryptocurrency brands and digital communities to build the future of crypto ecosystem.',
      },
      allPartnersByCategory,
    },
  };
};

export default PartnersPage;
