import { DevelopersHero } from 'components/pages/developers/developers-hero';
import { DevelopersQuotes } from 'components/pages/developers/developers-quotes';
import { DevelopersGetStarted } from 'components/pages/developers/developers-get-started';
import { DevelopersBuilders } from 'components/pages/developers/developers-builders';
import { DevelopersTechFeatures } from 'components/pages/developers/developers-tech-features';
import { DevelopersResources } from 'components/pages/developers/developers-resources';
import { DevelopersRunNode } from 'components/pages/developers/developers-run-node';

export default function Developer() {
  return (
    <>
      <DevelopersHero />
      <DevelopersQuotes />
      <DevelopersGetStarted />
      <DevelopersBuilders />
      <DevelopersTechFeatures />
      <DevelopersResources />
      <DevelopersRunNode />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: 'Build governance focused smart contracts',
        description:
          'Edgeware gives blockchain developers an easy-to-use framework to build governance focused smart contracts.',
      },
    },
  };
}
