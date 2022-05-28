import { Newsletter } from '../components/common/newsletter/newsletter';

import { CollectivesSocietyIntro } from 'components/pages/collectives/collectives-society-intro';
import { CollectivesList } from 'components/pages/collectives/collectives-list';
import { CollectivesStart } from 'components/pages/collectives/collectives-start';

export default function Collectives() {
  return (
    <>
      <CollectivesSocietyIntro />
      <CollectivesList />
      <CollectivesStart />
      <Newsletter />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: 'Find your people or start a collective',
        description:
          'Whether you are looking to develop an idea, a team looking to launch a project or an established community looking to add rocket fuel to your dreams, Edgeware is a place you can call home.',
      },
    },
  };
}
