import * as React from 'react';

import IconTwitter from 'remixicon/icons/Logos/twitter-fill.svg';

import { H1, H2, P } from '../components/common/typography/typography';
import { Intro } from '../components/common/intro/intro';
import { BrandAsset, BrandAssetList } from '../components/pages/press/brand-assets/brand-assets';
import { Button } from '../components/common/button/button';
import { Section } from '../components/common/section/section';
import { Newsletter } from '../components/common/newsletter/newsletter';
import { Icon } from '../components/common/icon/icon';

export default function Press() {
  return (
    <>
      <Intro>
        <H1 size="1">
          For the latest news follow
          <br />
          <em>@EdgewareDAO</em> on Twitter
        </H1>
        <P>Want to keep up to date with all our collectives and wonderings?</P>
        <Button style="white" href="https://twitter.com/HeyEdgeware">
          Follow us on Twitter
          <Icon component={IconTwitter} />
        </Button>
      </Intro>

      <Intro bottomGap={false}>
        <H2>Brand Assets</H2>
        <P>
          The Edgeware logo displayed in the official colors and usage patterns.
          <br />
          Do not place the logo on top of other objects and leave a reasonable amount of margin
          around the outside so the logo is clearly visible.
        </P>
      </Intro>

      <Section id="brand-assets" width="narrow">
        <BrandAssetList>
          <BrandAsset name="Main Logotype" type="logotype" color="main" />
          <BrandAsset name="Dark Logotype" type="logotype" color="dark" />
          <BrandAsset name="White Logotype" type="logotype" color="white" />
        </BrandAssetList>

        <BrandAssetList>
          <BrandAsset name="Main Logotype (alternative)" type="logotype" color="solid-main" />
          <BrandAsset name="Dark Logotype (alternative)" type="logotype" color="solid-dark" />
          <BrandAsset name="White Logotype (alternative)" type="logotype" color="solid-white" />
        </BrandAssetList>

        <BrandAssetList>
          <BrandAsset name="Main Logo Mark" type="logomark" color="main" />
          <BrandAsset name="Dark Logo Mark" type="logomark" color="dark" />
          <BrandAsset name="White Logo Mark" type="logomark" color="white" />
        </BrandAssetList>

        <BrandAssetList>
          <BrandAsset name="Main Logo Mark (alternative)" type="logomark" color="solid-main" />
          <BrandAsset name="Dark Logo Mark (alternative)" type="logomark" color="solid-dark" />
          <BrandAsset name="White Logo Mark (alternative)" type="logomark" color="solid-white" />
        </BrandAssetList>

        <div className="text-center">
          <Button href="/assets/press/edg-brand-assets.zip" download style="white">
            Download all Brand Assets (zip)
          </Button>
        </div>
      </Section>

      <Section id="press-enquiries" width="narrow" gap="none">
        <div className="text-center py-3 mb-5">
          <H2 size="2">Press Enquiries</H2>
          <P>
            For media inquiries, please contact{' '}
            <a
              href="https://t.me/EdgewarePress"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              @EdgewarePress
            </a>{' '}
            Telegram group.
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
