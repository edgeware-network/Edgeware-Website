import { Tab } from '@headlessui/react';
import { socialMediaUrls } from 'data/config';

import CodeSSlashLineIcon from 'remixicon/icons/Development/code-s-slash-line.svg';
import TerminalLineIcon from 'remixicon/icons/Development/terminal-line.svg';
import TerminalWindowLine from 'remixicon/icons/Development/terminal-window-line.svg';
import ServerLineIcon from 'remixicon/icons/Device/server-line.svg';
import EarthLineIcon from 'remixicon/icons/Map/earth-line.svg';

import IconGithub from 'remixicon/icons/Logos/github-fill.svg';

import IconWindow from 'remixicon/icons/Business/window-line.svg';
import IconExchange from 'remixicon/icons/Finance/exchange-line.svg';
import IconResume from 'remixicon/icons/System/shield-user-line.svg';
import IconToken from 'remixicon/icons/Finance/copper-coin-line.svg';
import IconChat from 'remixicon/icons/Communication/chat-1-line.svg';
import { LinksList } from '../get-started/links-list';

export const BuildGetStarted = () => {
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
              className="text-green-500 hover:text-green-600"
            >
              Join the Developer Chat →
            </a>
          </p>
          <div className="mt-8">
            <GetStartedLinks />
          </div>
        </div>
        <div className="my-8 w-full md:my-0 md:w-1/2">
          <NetworksInfo />
        </div>
      </div>

      {/* Banners */}
      <div className="my-16">
        <BuildBanners />
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
                            src="/images/build/metamask.png"
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

const GetStartedLinks = () => {
  const GET_STARTED_LINKS = [
    {
      label: 'Github',
      icon: IconGithub,
      href: 'https://github.com/edgeware-network',
    },
    {
      label: 'Builders Chat',
      icon: EarthLineIcon,
      href: 'https://t.me/edg_developers',
    },
    {
      href: 'https://docs.edgeware.wiki/',
      icon: CodeSSlashLineIcon,
      label: 'Documentation',
    },
    {
      label: 'Block Explorer',
      icon: TerminalWindowLine,
      href: 'https://edgeware.subscan.io/',
    },
    {
      label: 'Post your resume',
      icon: IconResume,
      href: 'https://gov.edgewa.re/discussions/Recruitment',
    },
  ];

  return (
    <ul className="flex flex-col space-y-4 font-semibold md:text-lg">
      {GET_STARTED_LINKS.map(({ label, icon, href }) => {
        const Icon = icon;
        return (
          <li key={label}>
            <a href={href} className="flex flex-row items-center hover:text-green-500">
              <Icon className="mr-4 h-6 w-6 fill-white" />
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const BuildBanners = () => {
  const BUILDERS_LINKS = [
    {
      label: 'Launch a Dapp',
      icon: IconWindow,
      href: 'https://docs.edgeware.wiki/development/develop/smart-contracts',
    },
    {
      label: 'Run a Node',
      icon: IconToken,
      href: 'https://docs.edgeware.wiki/quickstart/set-up-a-full-node',
    },
    {
      label: 'Run a Validator',
      icon: IconExchange,
      href: 'https://docs.edgeware.wiki/quickstart/set-up-a-validator',
    },
    {
      label: 'Build a Pallet',
      icon: TerminalLineIcon,
      href: 'https://docs.edgeware.wiki/development/develop/smart-contracts/wasm-smart-contracts/#contracts-pallet',
    },
    {
      label: 'Build/Maintain Runtime',
      icon: ServerLineIcon,
      href: 'https://docs.edgeware.wiki/development/develop/smart-contracts/wasm-smart-contracts/#runtime-environment-types',
    },
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
