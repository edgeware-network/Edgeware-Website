import { Newsletter } from '../components/common/newsletter';

import { SocietyIntro } from 'components/pages/society/society-intro';
import { CollectivesList } from 'components/pages/society/society-list';
import { SocietyStart } from 'components/pages/society/society-start';

export default function SocietyPage() {
  return (
    <>
      <SocietyIntro />
      <CollectivesList />
      <SocietyStart />
      <Newsletter />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: 'Find your society at Edgeware',
        description:
          'Whether you are looking to develop an idea, a team looking to launch a project or an established community looking to add rocket fuel to your dreams, Edgeware is a place you can call home.',
      },
    },
  };
}
