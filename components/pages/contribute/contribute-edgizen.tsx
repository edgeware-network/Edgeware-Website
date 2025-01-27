import { Button } from 'components/common/button';
import { socialMediaUrls } from 'data/config';

import OpenArmLineIcon from 'remixicon/icons/User & Faces/open-arm-line.svg';

export const ContributeEDGizen = () => {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-24">
      <div className="flex flex-col items-end space-y-8 md:flex-row md:space-x-32 md:space-y-0">
        <div className="w-full md:w-1/2">
          <OpenArmLineIcon className="h-12 w-12 fill-white text-white" />
          <h2 className="my-4 text-3xl font-medium md:text-4xl">Become an EDGizen</h2>
          <p className="my-4">
            Joining Edgeware is more than just a cryptocurrency.
            <br />
            It's a society where you contribute and earn reputation, resources, and connect with
            likeminded learners in the DAO and Substrate space.
          </p>
          <div className="mt-6">
            <Button href={socialMediaUrls.discordUrl} colorStyle="primary" sizing="normal">
              Join us on Discord EDG
            </Button>
          </div>
        </div>

        <div className="w-full bg-[url(/images/contribute/edgizen-bg.jpg)] bg-cover md:w-1/2">
          <div className="rounded-xl border border-green-600 p-4 py-8 md:p-8">
            <span>Requirements:</span>
            <ol className="ml-5 mt-4 list-decimal space-y-2 text-green-600">
              <li>Have EDG</li>
              <li>Stake, Delegate or Vote</li>
              <li>Claim your custom on-chain ID</li>
              <li>Join Forum and Discord</li>
              <li>Introduce and explore</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
