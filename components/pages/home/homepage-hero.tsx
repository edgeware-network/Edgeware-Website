import { Button } from 'components/common/button';
import { config } from 'data/config';
import Link from 'next/link';

import CheckboxCircleFill from 'remixicon/icons/System/checkbox-circle-fill.svg';

export const HomepageHero = () => {
  return (
    <section className="bg-[url('/images/home/hero/hero-bg@2x.png')] bg-cover bg-center pt-24">
      <div className="container mx-auto flex min-h-[75vh] max-w-7xl">
        <div className="my-auto py-8">
          {/* Intro text & CTAs */}
          <div className="max-w-screen-md">
            <h1 className="my-8 text-5xl font-medium">
              A DAO-first smart contract platform for managing, <br />
              funding, and building decentralized communities.
            </h1>
            <p className="text-lg">
              Edgeware is a scalable, sovereign and cooperatively owned smart contract platform with
              a large public treasury, strong governing community, and a focus on DAO deployments.
            </p>

            <div id="actions" className="my-8 space-x-8">
              <Button href={config.discordUrl} sizing="large" colorStyle="primary">
                Join Discord
              </Button>
              <Button href="/developers" sizing="large" colorStyle="grey">
                Start Building
              </Button>
            </div>
          </div>

          {/* Highlights */}
          <div className="my-8">
            <ul className="flex flex-row space-x-10">
              <li className="flex flex-row align-middle">
                <CheckboxCircleFill className="mr-2 h-6 w-6 fill-green-500" />
                Built on Substrate
              </li>
              <li className="flex flex-row align-middle">
                <CheckboxCircleFill className="mr-2 h-6 w-6 fill-green-500" />
                Mainnet
              </li>
              <li className="flex flex-row align-middle">
                <CheckboxCircleFill className="mr-2 h-6 w-6 fill-green-500" />
                EVM and Wasm Contracts
              </li>
              <li className="flex flex-row align-middle">
                <CheckboxCircleFill className="mr-2 h-6 w-6 fill-green-500" />
                Fairly Distributed
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-24 bg-gradient-to-b from-transparent to-grey-900" />
    </section>
  );
};
