import { Button } from 'components/common/button';

export const DevelopersRunNode = () => {
  return (
    <section id="node" className="container mx-auto my-6 px-4 md:my-12 lg:my-24">
      <div className="mx-auto flex max-w-6xl flex-row rounded-md bg-white p-12">
        <div className="w-full bg-contain bg-no-repeat md:bg-[url('/images/developers/node.png')] md:bg-right md:p-12">
          <div className="max-w-lg">
            <h2 className="my-4 text-3xl font-medium text-black md:text-4xl lg:text-5xl">
              Run a validator node and earn EDG
            </h2>
            <p className="my-8 bg-white text-lg text-black">
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
      </div>
    </section>
  );
};
