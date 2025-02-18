import { Button } from 'components/common/button';

export const PressBrandIdentity = () => {
  return (
    <section id="brand-assets" className="container mx-auto max-w-6xl py-16 text-center">
      <h2 className="text-4xl font-medium">Brand Identity Guide</h2>
      <p className="my-4 mx-auto max-w-2xl text-lg">
        This brand identity was originaly designed by Sean Ford at Hidden Stories Studios and later
        refined by Johan Steneros and the{' '}
        <em className="not-italic text-primary-500">Edgeware DAO</em> community.
      </p>

      <div className="my-8 text-center ">
        <Button
          href="https://app.bravemark.co/jsteneros/edgeware"
          colorStyle="white"
          sizing="large"
        >
          Brand Identity Guide
        </Button>
      </div>
    </section>
  );
};
