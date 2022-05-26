import { Tab } from '@headlessui/react';
import { config } from 'data/config';

import CodeSSlashLineIcon from 'remixicon/icons/Development/code-s-slash-line.svg';
import TerminalLineIcon from 'remixicon/icons/Development/terminal-line.svg';
import TerminalWindowLine from 'remixicon/icons/Development/terminal-window-line.svg';
import ServerLineIcon from 'remixicon/icons/Device/server-line.svg';
import EarthLineIcon from 'remixicon/icons/Map/earth-line.svg';

export const DevelopersGetStarted = () => {
  return (
    <div className="container mx-auto max-w-6xl py-24">
      {/* Intro text*/}
      <div className="flex flex-row space-x-16">
        <div className="w-1/2">
          <h2 className="my-4 text-3xl font-medium">Get Started on Edgeware</h2>
          <p className="text-md">
            This is your launchpad to find what you need to integrate Edgware.
            <br />
            Unsure of where to start?
            {'  '}
            <a
              href={config.discordUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-green-500"
            >
              Join the Developer Chat →
            </a>
          </p>
          <ul className="my-8 flex flex-col space-y-4">
            <li className="flex flex-row">
              <ServerLineIcon className="mr-2 h-5 w-5 fill-white" />
              Run Node/Connect to RPC Endpoint
            </li>
            <li className="flex flex-row">
              <EarthLineIcon className="mr-2 h-5 w-5 fill-white" />
              Choose Environment
            </li>
            <li className="flex flex-row">
              <CodeSSlashLineIcon className="mr-2 h-5 w-5 fill-white" />
              Build Dapps/Protocols
            </li>
            <li className="flex flex-row">
              <TerminalWindowLine className="mr-2 h-5 w-5 fill-white" />
              Build a Pallet
            </li>
            <li className="flex flex-row">
              <TerminalLineIcon className="mr-2 h-5 w-5 fill-white" />
              Build / Maintain Runtime
            </li>
          </ul>
        </div>
        <div className="w-1/2">
          <NetworksInfo />
        </div>
      </div>
    </div>
  );
};

const NetworksInfo = () => {
  const networks = {
    Mainnet: {
      EdgeEVM: {
        'RPC URL': 'https://edgeware.api.onfinality.io/public-ws/evm',
        'Chain ID': '2021',
        Symbol: 'EDG',
        Explorer: 'https://mainnet.edgscan.com/',
      },
      EdgeWASM: {
        'RPC URL': 'https://edgeware.api.onfinality.io/public-ws/wasm',
        'Chain ID': '2021',
        Symbol: 'EDG',
        Explorer: 'https://mainnet.edgscan.com/',
      },
    },
    Testnet: {
      BearsheetEVM: {
        'RPC URL': 'https://edgeware-testnet.api.onfinality.io/public-ws/evm',
        'Chain ID': '2021',
        Symbol: 'EDG',
        Explorer: 'https://testnet.edgscan.com/',
      },
      BearsheetWASM: {
        'RPC URL': 'https://edgeware-testnet.api.onfinality.io/public-ws/wasm',
        'Chain ID': '2021',
        Symbol: 'EDG',
        Explorer: 'https://testnet.edgscan.com/',
      },
    },
  };

  return (
    <div className="rounded bg-grey-800">
      <Tab.Group>
        <Tab.List className="border-b border-b-grey-700 px-4">
          {Object.keys(networks).map((network) => (
            <Tab
              key={network}
              className={({ selected }) =>
                `p-2 text-sm ${selected ? 'border-b border-b-primary-500' : ''}`
              }
            >
              {network}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {Object.entries(networks).map(([networkKey, networkInfo]) => (
            <Tab.Panel key={networkKey}>
              <Tab.Group>
                <Tab.List className="border-b border-b-grey-700 px-4">
                  {Object.keys(networkInfo).map((chain) => (
                    <Tab
                      key={chain}
                      className={({ selected }) =>
                        `p-2 text-sm ${selected ? 'border-b border-b-primary-500' : ''}`
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
