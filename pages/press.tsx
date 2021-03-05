import * as React from 'react';

import Image from 'next/image';
import { H1, H2, P } from '../components/common/typography/typography';
import { Mentions } from '../components/pages/home/08_mentions/mentions';
import { Intro } from '../components/common/intro/intro';
import { BrandAsset, BrandAssetList } from '../components/pages/press/brand-assets/brand-assets';
import { CTAButton } from '../components/common/button/cta-button';
import { Section } from '../components/common/section/section';
import { Newsletter } from '../components/common/newsletter/newsletter';

export default function Press() {
  return (
    <>
      <Intro>
        <H1 size="2">
          For the latest news, follow
          <br />
          <em>Edgeware</em> on Twitter
        </H1>
        <P>
          Want to keep up to date with all our collectives and wonderings. <br />
          Follow us on Twitter and engage with us.
        </P>
        <CTAButton arrow="none" href="https://twitter.com/HeyEdgeware" style="normal">
          Follow us on Twitter
        </CTAButton>
      </Intro>

      {/* <Section id="twitter" width="fluid">
        <Mentions />
      </Section> */}

      <Intro bottomGap={false}>
        <H2>Brand Assets</H2>
        <P>
          The Edgeware logo displayed in the official colors and usage patterns.<br/>
          Do not place the
          logo on top of other objects and leave a reasonable amount of margin <br/>
          around the outside so the logo is clearly visible.
        </P>
      </Intro>

      <Section id="brand-assets" width="narrow">
        <BrandAssetList>
          <BrandAsset name="Logo White" type="logo" color="white" />
          <BrandAsset name="Logo Dark Grey" type="logo" color="dark" />
          <BrandAsset name="Logo Magenta" type="logo" color="magenta" />
        </BrandAssetList>

        <BrandAssetList>
          <BrandAsset name="Logo Mark White" type="logomark" color="white" />
          <BrandAsset name="Logo Mark Dark Grey" type="logomark" color="dark" />
          <BrandAsset name="Logo Mark Magenta" type="logomark" color="magenta" />
        </BrandAssetList>

        <div className="text-center">
          <CTAButton
            arrow="none"
            href="/assets/press/edg-brand-assets.zip"
            download
            style="large"
          >
            Download Brand Assets
          </CTAButton>
        </div>
      </Section>

      <Section id="press-enquiries" width="narrow" gap="none">
        <div className="text-center py-3 mb-5">
          <H2 size="2">Press Enquiries</H2>
          <P>
            For media inquiries, please contact{' '}
            <a href="mailto:press@edgewa.re" className="link">
              press@edgewa.re
            </a>
          </P>
        </div>
      </Section>

      <Section id="newsletter" width="normal" gap="none">
        <Newsletter />
      </Section>
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
