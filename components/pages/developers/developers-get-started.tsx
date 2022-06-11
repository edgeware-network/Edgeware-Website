import { Tab } from '@headlessui/react';
import { socialMediaUrls } from 'data/config';

import CodeSSlashLineIcon from 'remixicon/icons/Development/code-s-slash-line.svg';
import TerminalLineIcon from 'remixicon/icons/Development/terminal-line.svg';
import TerminalWindowLine from 'remixicon/icons/Development/terminal-window-line.svg';
import ServerLineIcon from 'remixicon/icons/Device/server-line.svg';
import EarthLineIcon from 'remixicon/icons/Map/earth-line.svg';

import IconWindow from 'remixicon/icons/Business/window-line.svg';
import IconExchange from 'remixicon/icons/Finance/exchange-line.svg';
import IconResume from 'remixicon/icons/System/shield-user-line.svg';
import IconToken from 'remixicon/icons/Finance/copper-coin-line.svg';
import IconChat from 'remixicon/icons/Communication/chat-1-line.svg';
import { LinksList } from '../get-started/links-list';

export const DevelopersGetStarted = () => {
  return (
    <section className="container mx-auto max-w-7xl py-8 px-4 md:py-16 lg:py-24" id="get-started">
      {/* Intro text*/}
      <div className="flex flex-col items-stretch md:flex-row md:space-x-24">
        <div className="my-8 w-full md:my-0 md:w-1/2">
          <h2 className="my-4 text-3xl font-medium md:text-4xl lg:text-5xl">
            Get Started on Edgeware
          </h2>
          <p className="my-8 text-base md:text-lg">
            This is your launchpad to find what you need to integrate Edgware. Unsure of where to
            start?
            {'  '}
            <a
              href={socialMediaUrls.discordUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-green-500"
            >
              Join the Developer Chat →
            </a>
          </p>
          <ul className="mt-8 flex flex-col space-y-4 font-semibold md:text-lg">
            <li className="flex flex-row items-center">
              <ServerLineIcon className="mr-4 h-6 w-6 fill-white" />
              Run Node/Connect to RPC Endpoint
            </li>
            <li className="flex flex-row items-center">
              <EarthLineIcon className="mr-4 h-6 w-6 fill-white" />
              Choose Environment
            </li>
            <li className="flex flex-row items-center">
              <CodeSSlashLineIcon className="mr-4 h-6 w-6 fill-white" />
              Build Dapps/Protocols
            </li>
            <li className="flex flex-row items-center">
              <TerminalWindowLine className="mr-4 h-6 w-6 fill-white" />
              Build a Pallet
            </li>
            <li className="flex flex-row items-center">
              <TerminalLineIcon className="mr-4 h-6 w-6 fill-white" />
              Build / Maintain Runtime
            </li>
          </ul>
        </div>
        <div className="my-8 w-full md:my-0 md:w-1/2">
          <NetworksInfo />
        </div>
      </div>

      {/* Banners */}
      <div className="my-16">
        <DevelopersBanners />
      </div>
    </section>
  );
};

const NetworksInfo = () => {
  const NETWORKS = {
    Mainnet: {
      EdgeEVM: {
        'RPC URL': 'https://mainnet.edgewa.re/evm',
        'Alternative RPC URL': 'https://edgeware.api.onfinality.io/public-ws/evm',
        'Chain ID': '2021',
        Symbol: 'EDG',
        Explorer: 'https://evm.edgscan.live/',
      },
      EdgeWASM: {
        'RPC URL': 'wss://mainnet.edgewa.re',
        'Alternative RPC URL': 'wss://edgeware.api.onfinality.io/public-ws',
        'Chain ID': '2021',
        'Chain Prefix': 7,
        Explorer: 'https://edgeware.subscan.io/',
      },
    },
    Testnet: {
      BeresheetEVM: {
        'RPC URL': 'https://beresheet.edgewa.re/evm',
        'Chain ID': '2022',
        Symbol: 'tEDG',
        Explorer: 'https://testnet.edgscan.live/',
      },
      BeresheetWASM: {
        'RPC URL': 'wss://beresheet.edgewa.re',
        'Chain Prefix': '7',
        Explorer: 'https://beresheet.subscan.io/',
      },
    },
  };

  const hasMetamask = typeof window !== 'undefined' && !!(window as any).ethereum;

  const handleMetamaskAdd = (networkKey: string, chainKey: string) => {
    const params = [
      {
        chainId: `0x${Number(NETWORKS[networkKey][chainKey]['Chain ID']).toString(16)}`,
        chainName: chainKey,
        nativeCurrency: {
          name: NETWORKS[networkKey][chainKey].Symbol,
          symbol: NETWORKS[networkKey][chainKey].Symbol,
          decimals: 18,
        },
        rpcUrls: [NETWORKS[networkKey][chainKey]['RPC URL']],
        blockExplorerUrls: [NETWORKS[networkKey][chainKey]['Explorer']],
      },
    ];

    (window as any).ethereum
      .request({ method: 'wallet_addEthereumChain', params })
      .then(() => console.log('Success'))
      .catch((error: Error) => console.log('Error', error.message));
  };

  return (
    <div className="h-full rounded bg-grey-800">
      <Tab.Group>
        <Tab.List className="border-b border-b-grey-700 px-4">
          {Object.keys(NETWORKS).map((network) => (
            <Tab
              key={network}
              className={({ selected }) =>
                `py-4 px-2 text-sm ${selected ? 'border-b border-b-primary-500' : ''}`
              }
            >
              {network}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {Object.entries(NETWORKS).map(([networkKey, networkInfo]) => (
            <Tab.Panel key={networkKey}>
              <Tab.Group>
                <Tab.List className="border-b border-b-grey-700 px-4">
                  {Object.keys(networkInfo).map((chain) => (
                    <Tab
                      key={chain}
                      className={({ selected }) =>
                        `py-4 px-2 text-sm ${selected ? 'border-b border-b-primary-500' : ''}`
                      }
                    >
                      {chain}
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels>
                  {Object.entries(networkInfo).map(([chainKey, chainInfo]) => (
                    <Tab.Panel key={chainKey} className="px-4 py-2">
                      <dl>
                        {Object.entries(chainInfo).map(([key, value]) => (
                          <div key={key} className="my-4">
                            <dt className="text-sm font-normal text-grey-300">{key}</dt>
                            <dd>{value}</dd>
                          </div>
                        ))}
                      </dl>
                      {hasMetamask && chainKey.includes('EVM') && (
                        <button
                          onClick={() => handleMetamaskAdd(networkKey, chainKey)}
                          className="mb-4 rounded bg-white p-2 text-grey-900"
                        >
                          <img
                            alt=""
                            src="/images/developers/metamask.png"
                            className="mr-2 inline-block h-5 w-5 align-text-top"
                          />
                          Add network to Metamask
                        </button>
                      )}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

const DevelopersBanners = () => {
  const BUILDERS_LINKS = [
    {
      label: 'Launch Your Dapp',
      icon: IconWindow,
      href: 'https://docs.edgeware.wiki/development/develop/smart-contracts',
    },
    {
      label: 'Mint a Token',
      icon: IconToken,
      href: 'https://docs.edgeware.wiki/development/develop/smart-contracts/evm-smart-contracts/tutorials/deploy-an-evm-contract/using-truffle',
    },
    {
      label: 'Integrate Exchange',
      icon: IconExchange,
      href: 'https://edgeware-a.slab.com/public/posts/yqrtzorf',
    },
    {
      label: 'List your Resume',
      icon: IconResume,
      href: 'https://commonwealth.im/edgeware/proposal/discussion/756-job-board',
    },
    { label: 'Builders Chat', icon: IconChat, href: 'https://t.me/edg_developers' },
  ];

  return (
    <>
      <div className="mt-4">
        <LinksList items={BUILDERS_LINKS} highlight />
      </div>
      <div className="mb-4">
        <a
          href={socialMediaUrls.discordUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg block rounded border border-grey-800 bg-[url('/images/common/blocks-pattern.jpg')] bg-[length:auto_200%] bg-center px-8 py-8 text-white transition-all duration-300 hover:bg-[length:auto_175%] hover:text-white md:px-16"
        >
          <span className="text-4xl">Develop Edgeware Core</span>
          <p className="mt-4 text-primary-500">
            Join our core developers to help build the future of Edgeware
          </p>
        </a>
      </div>
    </>
  );
};
