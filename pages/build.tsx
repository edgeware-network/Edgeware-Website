import { BuildHero } from 'components/pages/build/build-hero';
import { BuildQuotes } from 'components/pages/build/build-quotes';
import { BuildGetStarted } from 'components/pages/build/build-get-started';
import { BuildBuilders } from 'components/pages/build/build-builders';
import { BuildTechFeatures } from 'components/pages/build/build-tech-features';
import { BuildResources } from 'components/pages/build/build-resources';
import { BuildRunNode } from 'components/pages/build/build-run-node';

export default function Developer() {
  return (
    <>
      <BuildHero />
      <BuildQuotes />
      <BuildGetStarted />
      <BuildBuilders />
      <BuildTechFeatures />
      <BuildResources />
      <BuildRunNode />
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
