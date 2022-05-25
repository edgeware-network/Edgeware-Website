import { config } from 'data/config';
import Link from 'next/link';

import CheckboxCircleFill from 'remixicon/icons/System/checkbox-circle-fill.svg';

export const HomepageHero = () => {
  return (
    <div className="min-h-[55vh]">
      <div className="container mx-auto my-8">
        {/* Intro text & CTAs */}
        <div className="max-w-screen-md">
          <h1 className="my-4 text-5xl font-medium">
            A DAO-first smart contract platform for managing, <br />
            funding, and building decentralized communities.
          </h1>
          <p className="text-lg">
            Edgeware is a scalable, sovereign and cooperatively owned smart contract platform with a
            large public treasury, strong governing community, and a focus on DAO deployments.
          </p>

          <div id="actions" className="space-x-8 py-4">
            <a
              href={config.discordUrl}
              className="inline-block rounded bg-primary-500 py-2.5 px-6 text-white hover:bg-primary-600 hover:text-white"
            >
              Join Discord
            </a>
            <Link href="/developers">
              <a className="inline-block rounded bg-grey-800 py-2.5 px-6 text-white hover:bg-grey-700 hover:text-white">
                Start Building
              </a>
            </Link>
          </div>
        </div>

        {/* Highlights */}
        <div className="my-4">
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
  );
};
