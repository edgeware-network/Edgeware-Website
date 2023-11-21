import { Button } from 'components/common/button';

import CompassDiscoverLineIcon from 'remixicon/icons/Map/compass-discover-line.svg';

export const ContributeProposal = () => {
  return (
    <div className="container mx-auto max-w-6xl px-4">
      <div className="flex flex-col items-center rounded-md bg-white px-4 py-8 text-center md:py-16">
        <CompassDiscoverLineIcon className="h-12 w-12 fill-black text-black" />
        <h2 className="my-4 text-3xl font-medium text-black md:text-4xl">Design a Proposal</h2>
        <p className="max-w-prose text-grey-400">
          Have a contribution, project, or role you or your team is interested in?
          <br />
          Design your own and negotiate with the community.
        </p>
        <div className="mt-6">
          <Button
            href="https://gov.edgewa.re/discussion/1132-edgeware-proposal-process-and-template"
            colorStyle="black"
            sizing="normal"
          >
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};
