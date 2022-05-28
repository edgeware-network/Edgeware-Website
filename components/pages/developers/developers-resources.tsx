import { Button } from 'components/common/button';
import Link from 'next/link';
import Apps2LineIcon from 'remixicon/icons/System/apps-2-line.svg';

export const DevelopersResources = () => {
  return (
    <section id="resources" className="container mx-auto my-24 max-w-4xl">
      <div className="flex flex-row items-center space-x-24">
        <div className="flex w-1/2 flex-col items-center text-center">
          <div className="py-4">
            <div className="mx-auto h-fit w-fit rounded-full bg-white p-6">
              <Apps2LineIcon className="h-8 w-8 fill-primary-500" />
            </div>
            <h2 className="my-4 text-5xl">Resources</h2>
            <p className="my-4 text-lg">
              Jump straight into our developer tutorials and easy to follow documentation.
            </p>
          </div>
          <Button href="https://github.com/Edgeware-Network" sizing="large" colorStyle="white">
            Follow us on Github
          </Button>
        </div>
        <div className="w-1/2 py-4">
          <DevelopersResourcesLinks />
        </div>
      </div>
    </section>
  );
};

const DevelopersResourcesLinks = () => {
  const LINKS_GET_STARTED = {
    'Block Explorer': 'https://edgeware.subscan.io/',
    'Wallet & Governance':
      'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fmainnet4.edgewa.re#/accounts',
    'Forum & Proposals': 'https://commonwealth.im/edgeware',
  };

  const LINKS_DEVELOP = {
    Docs: 'https://docs.edgeware.wiki/',
    'Smart Contracts Workshop': 'https://docs.edgeware.wiki/development/develop/smart-contracts',
    'Developer Chat': 'https://t.me/edg_developers',
  };

  return (
    <div className="my-2 rounded border border-grey-800 bg-grey-900 p-8">
      <h3 className="mb-4 text-2xl font-medium">Get Started</h3>
      <ul className="mb-8 border-b border-b-grey-700 pb-8 text-lg">
        {Object.entries(LINKS_GET_STARTED).map(([label, url]) => (
          <li key={label}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:text-primary-400 hover:underline "
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <h3 className="mb-4 text-2xl font-medium">Develop</h3>
      <ul className="text-lg">
        {Object.entries(LINKS_DEVELOP).map(([label, url]) => (
          <li key={label}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:text-primary-400 hover:underline "
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
