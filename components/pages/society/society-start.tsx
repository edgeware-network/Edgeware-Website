import { IconLogo } from 'components/common/icon-logo';

import OpenArmLineIcon from 'remixicon/icons/User/open-arm-line.svg';
import FundsLineIcon from 'remixicon/icons/Finance/funds-line.svg';
import EarthLineIcon from 'remixicon/icons/Map/earth-line.svg';

import FingerprintFillIcon from 'remixicon/icons/Device/fingerprint-fill.svg';
import CompassDiscoverLineIcon from 'remixicon/icons/Map/compass-discover-line.svg';
import User4LineIcon from 'remixicon/icons/User/user-4-line.svg';

import ScalesLineIcon from 'remixicon/icons/Others/scales-line.svg';
import CommandLineIcon from 'remixicon/icons/Development/command-line.svg';
import Compass2LineIcon from 'remixicon/icons/Map/compass-2-line.svg';
import { Button } from 'components/common/button';
import { socialMediaUrls } from 'data/config';

export const SocietyStart = () => {
  return (
    <section id="start-collective" className="container mx-auto my-32 max-w-7xl">
      <div className="flex flex-col items-center px-4 text-center">
        <IconLogo />
        <h2 className="my-4 text-6xl">Start your own collective</h2>
        <p className="my-4 mx-auto max-w-prose text-lg leading-relaxed">
          In Edgeware, working groups function as mission-based development organizations that are
          composed of members who share interests, needs, and passions.
        </p>
        <p className="my-4 mx-auto max-w-prose text-lg leading-relaxed">
          Where an Ambassador team is largely formed to promote a network in a variety of ways,
          Working Groups are intended to solve issues specific to a community while also expanding
          the awareness and utility of the network.
        </p>
      </div>

      <div className="my-8 mx-auto grid max-w-6xl grid-cols-3 gap-4 text-center">
        <div className="flex flex-col items-center p-4">
          <OpenArmLineIcon className="my-4 h-8 w-8 fill-white" />
          <p>
            Solve problems using the new world of blockchain and currency and collaborate with other
            Edgeware experts.
          </p>
        </div>

        <div className="flex flex-col items-center p-4">
          <FundsLineIcon className="my-4 h-8 w-8 fill-white" />
          <p>Request funds from the Treasury to execute your mission.</p>
        </div>

        <div className="flex flex-col items-center p-4">
          <EarthLineIcon className="my-4 h-8 w-8 fill-white" />
          <p>
            Regional groups are designed to drive awareness of the network, research key areas of
            interest and solve problems within distinct geographical areas.
          </p>
        </div>

        <div className="flex flex-col items-center p-4">
          <User4LineIcon className="my-4 h-8 w-8 fill-white" />
          <p>Whatever you want, really: Your community is self-determining.</p>
        </div>
        <div className="flex flex-col items-center p-4">
          <CompassDiscoverLineIcon className="my-4 h-8 w-8 fill-white" />
          <p>
            Utilise Commonwealth's open-source interface to organize your group, project or
            community initiative.
          </p>
        </div>
        <div className="flex flex-col items-center p-4">
          <FingerprintFillIcon className="my-4 h-8 w-8 fill-white" />
          <p>Identity or Community-based solution groups: Minorities, Social Justice, or others.</p>
        </div>

        <div className="flex flex-col items-center p-4">
          <ScalesLineIcon className="my-4 h-8 w-8 fill-white" />
          <p>Organize your community into a political power within the network.</p>
        </div>
        <div className="flex flex-col items-center p-4">
          <CommandLineIcon className="my-4 h-8 w-8 fill-white" />
          <p>
            Specific technology applications,
            <br />
            Privacy for instance.
          </p>
        </div>
        <div className="flex flex-col items-center p-4">
          <Compass2LineIcon className="my-4 h-8 w-8 fill-white" />
          <p>Advance the community of EDG citizens.</p>
        </div>
      </div>

      <div className="my-4 text-center">
        <Button colorStyle="primary" href={socialMediaUrls.discordUrl} sizing="large">
          Start your collective
        </Button>
      </div>
    </section>
  );
};
