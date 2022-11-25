import { Button } from 'components/common/button';
import { socialMediaUrls } from 'data/config';

import CheckboxCircleFill from 'remixicon/icons/System/checkbox-circle-fill.svg';

export const HomepageHero = () => {
  return (
    <section className="bg-[url('/images/home/hero/hero-bg@2x.png')] bg-cover bg-center pt-24">
      <div className="container mx-auto flex min-h-[75vh] max-w-7xl">
        <div className="my-auto py-4 px-4 md:py-8 lg:py-24">
          {/* Intro text & CTAs */}
          <div className="max-w-screen-md">
            <h1 className="my-8 text-3xl font-medium md:text-4xl lg:text-6xl">
              A DAO-first smart contract platform for managing, <br />
              funding, and building decentralized communities.
            </h1>
            <p className="text-lg">
              Edgeware is a scalable, sovereign and cooperatively owned smart contract platform with
              a large public treasury, strong governing community, and a focus on DAO deployments.
            </p>

            <div
              id="actions"
              className="my-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8"
            >
              <Button href={socialMediaUrls.discordUrl} sizing="large" colorStyle="primary">
                Join Discord
              </Button>
              <Button href="https://edgeware.app/" sizing="large" colorStyle="primary">
                Use EdgeApps
              </Button>
              <Button href="/tools" sizing="large" colorStyle="grey">
                Tools
              </Button>
              <Button href="/build" sizing="large" colorStyle="grey">
                Start Building
              </Button>
            </div>
          </div>

          {/* Highlights */}
          <div className="my-8">
            <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-10">
              <li className="flex flex-row align-middle">
                <CheckboxCircleFill className="mr-2 h-6 w-6 fill-green-500" />
                Oldest Substrate Solochain
              </li>
              <li className="flex flex-row align-middle">
                <CheckboxCircleFill className="mr-2 h-6 w-6 fill-green-500" />
                Self-sustainable Ecosystem
              </li>
              <li className="flex flex-row align-middle">
                <CheckboxCircleFill className="mr-2 h-6 w-6 fill-green-500" />
                Dual Smart Contracts Environments
              </li>
              <li className="flex flex-row align-middle">
                <CheckboxCircleFill className="mr-2 h-6 w-6 fill-green-500" />
                Fairly Distributed through Lockdrop
              </li>
              <li className="flex flex-row align-middle">
                <CheckboxCircleFill className="mr-2 h-6 w-6 fill-green-500" />
                Full Democracy since the Genesis
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-6 bg-gradient-to-b from-transparent to-grey-900 md:h-12 lg:h-24" />
    </section>
  );
};
