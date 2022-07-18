import { Button } from 'components/common/button';
import { BrandAssetList, BrandAsset } from './press-brand-assets-list';

export const PressBrandAssets = () => {
  return (
    <section id="brand-assets" className="container mx-auto max-w-6xl py-16 text-center">
      <h2 className="text-4xl font-medium">Brand Assets</h2>
      <p className="my-4 mx-auto max-w-2xl text-lg">
        The Edgeware logo displayed in the official colors and usage patterns.
        <br />
        Do not place the logo on top of other objects and leave a reasonable amount of margin around
        the outside so the logo is clearly visible.
      </p>

      <div className="my-24">
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
      </div>

      <div className="my-4 text-center">
        <Button href="/assets/press/edg-brand-assets.zip" colorStyle="white" sizing="large">
          Download all Brand Assets (zip)
        </Button>
      </div>
    </section>
  );
};
