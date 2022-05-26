import { Button } from 'components/common/button';
import { config } from 'data/config';

import OpenArmLineIcon from 'remixicon/icons/User/open-arm-line.svg';

export const ContributeEDGizen = () => {
  return (
    <div className="container mx-auto max-w-5xl py-24">
      <div className="flex flex-row items-end space-x-32">
        <div className="w-1/2">
          <OpenArmLineIcon className="h-12 w-12 fill-white text-white" />
          <h2 className="my-4 text-4xl font-medium">Become an EDGizen</h2>
          <p className="my-4">
            Joining Edgeware is more than just a cryptocurrency.
            <br />
            It's a society where you contribute and earn reputation, resources, and connect with
            likeminded learners in the DAO and Substrate space.
          </p>
          <div className="mt-6">
            <Button href={config.discordUrl} colorStyle="primary">
              Join us on Discord EDG
            </Button>
          </div>
        </div>

        <div className="w-1/2">
          <div className="rounded-xl border border-green-600 p-8">
            <span>Requirements:</span>
            <ol className="mt-4 ml-5 list-decimal text-green-600">
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
