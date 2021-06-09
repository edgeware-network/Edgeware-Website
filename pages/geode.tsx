
import * as React from 'react';
import dynamic from 'next/dynamic'

import { H1, P } from '../components/common/typography/typography';
import { Section } from '../components/common/section/section';

const WalletComponent = dynamic(() => import('../components/pages/geode/wallet/wallet'), { ssr: false })

export default function Geode() {

  return (
    <>
      <Section id="intro" width="normal" gap="narrow">
        <div className="text-center py-5">
          <H1 size="1">Edgeware Geode PoC</H1>
          <P>Have some fun by staking Edgeware</P>
          <div className="py-2">
            <WalletComponent />
          </div>
        </div>
      </Section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: 'Edgeware Geode',
        description: '',
        robots: 'noindex'
      },
    },
  };
}
