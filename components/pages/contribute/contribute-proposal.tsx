import { Button } from 'components/common/button';
import { config } from 'data/config';

import CompassDiscoverLineIcon from 'remixicon/icons/Map/compass-discover-line.svg';

export const ContributeProposal = () => {
  return (
    <div className="container mx-auto max-w-6xl px-4">
      <div className="flex flex-col items-center rounded-md bg-white py-8 px-4 text-center md:py-16">
        <CompassDiscoverLineIcon className="h-12 w-12 fill-black text-black" />
        <h2 className="my-4 text-3xl font-medium text-black md:text-4xl">Design a Proposal</h2>
        <p className="max-w-prose text-grey-400">
          Have a contribution, project, or role you or your team is interested in?
          <br />
          Design your own and negotiate with the community.
        </p>
        <div className="mt-6">
          <Button href={config.discordUrl} colorStyle="black" sizing="normal">
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};