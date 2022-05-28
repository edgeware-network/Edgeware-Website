import { Button } from 'components/common/button';

export const DevelopersRunNode = () => {
  return (
    <section
      id="node"
      className="container mx-auto my-24 flex max-w-6xl flex-row rounded-md bg-white p-12"
    >
      <div className="w-full bg-[url('/images/developer/node.png')] bg-contain bg-right bg-no-repeat p-12">
        <div className="max-w-lg">
          <h2 className="my-4 text-5xl font-medium text-black">
            Run a validator node and earn EDG
          </h2>
          <p className="my-8 text-lg text-black">
            Earn up to 20%+ APY! Find out the benefits and how easy it is to set it up.
          </p>
        </div>
        <div className="my-8">
          <Button
            href="https://docs.edgeware.wiki/quickstart/set-up-a-validator"
            colorStyle="black"
            sizing="large"
          >
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
};
