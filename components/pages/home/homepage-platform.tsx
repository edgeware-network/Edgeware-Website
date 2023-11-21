import { Button } from 'components/common/button';
import { socialMediaUrls } from 'data/config';
import FileList3LineIcon from 'remixicon/icons/Document/file-list-3-line.svg';
import DiscordFillIcon from 'remixicon/icons/Logos/discord-fill.svg';

export const HomepagePlatform = () => {
  return (
    <section id="edge-substrate-platform" className="my-6 md:my-12 lg:my-24">
      <div className="bg-[url('/images/home/platform/ecosystem-blocks@2x.png')] bg-contain">
        <div className="h-32 bg-gradient-to-t from-transparent to-grey-900" />

        {/* Intro */}
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
            Substrate Development Platform
          </h2>
          <p className="mx-auto my-8 max-w-2xl text-lg">
            Edgeware uses the same powerful framework as Kusama and Polkadot, but features three
            ways to build your dapp or project, including familiar EVM, cutting-edge WASM and
            modular, runtime-level Pallets.
          </p>
        </div>

        {/* 3 column benefits */}
        <div className="container mx-auto my-8 max-w-6xl px-4 md:my-16 lg:my-24">
          <div className="flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0 lg:space-x-10">
            {/* EdgeEVM */}
            <div className="flex w-full rounded-lg border border-grey-800 bg-[url('/images/home/platform/pink-block-bg.jpg')] bg-cover bg-center bg-no-repeat p-3 text-center md:w-1/3">
              <div className="flex h-full flex-col justify-between rounded-lg bg-grey-700 p-3">
                <h3 className="my-4 text-2xl font-normal text-primary-500">EdgeEVM</h3>
                <p className="text-lg">
                  Permissionless, familiarity, and Solidity-based, EdgeEVM makes it easy to expand
                  to new chains, debug and port your dapp with access to the largest set of tools
                  and resources.
                </p>

                <ul className="mt-16 flex flex-col space-y-2 text-center uppercase text-grey-900">
                  <li className="rounded-md bg-primary-500 p-1.5">Mature Ecosystem</li>
                  <li className="rounded-md bg-primary-500 p-1.5">Solidity Compatible</li>
                  <li className="rounded-md bg-primary-500 p-1.5">Easy Portability</li>
                  <li className="rounded-md bg-primary-500 p-1.5">Meta Transaction Ready</li>
                </ul>
              </div>
            </div>

            {/* EdgeWASM */}
            <div className="flex w-full rounded-lg border border-grey-800 bg-[url('/images/home/platform/green-block-bg.jpg')] bg-cover bg-center bg-no-repeat p-3 text-center md:w-1/3">
              <div className="flex h-full flex-col justify-between rounded-lg bg-grey-700 p-3">
                <h3 className="my-4 text-2xl font-normal text-green-500">EdgeWASM</h3>
                <p className="text-lg">
                  The permissionless environment for the experts seeking more performance and
                  future-proof scalability compared to EdgeEVM.
                </p>

                <ul className="mt-16 flex flex-col space-y-2 text-center uppercase text-grey-900">
                  <li className="rounded-md bg-green-500 p-1.5">High Performance</li>
                  <li className="rounded-md bg-green-500 p-1.5">Memory/Weight Efficient</li>
                  <li className="rounded-md bg-green-500 p-1.5">Futureproof</li>
                  <li className="rounded-md bg-green-500 p-1.5">Rust Ink</li>
                </ul>
              </div>
            </div>

            {/* Ecosystem */}
            <div className="flex w-full rounded-lg border border-grey-800 bg-[url('/images/home/platform/grey-block-bg.jpg')] bg-cover bg-center bg-no-repeat p-3 text-center md:w-1/3">
              <div className="flex h-full flex-col justify-between rounded-lg bg-grey-700 p-3">
                <h3 className="my-4 text-2xl font-normal text-grey-300">SubstratePallets</h3>
                <p className="text-lg">
                  Interoperable and future-proof, Rust-based pallets can grant the chain new
                  functions once approved by the governing community.
                </p>
                <ul className="mt-16 flex flex-col space-y-2 text-center uppercase text-grey-900">
                  <li className="rounded-md bg-grey-300 p-1.5">Interoperability</li>
                  <li className="rounded-md bg-grey-300 p-1.5">Low Level Access</li>
                  <li className="rounded-md bg-grey-300 p-1.5">Permissioned Deployment</li>
                  <li className="rounded-md bg-grey-300 p-1.5">Forkless Upgrades</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* teaser */}
        <div className="container mx-auto mt-32 max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-medium md:text-3xl lg:text-4xl">
            Want to build on the Edgeware ecosystem?
          </h2>
          <p className="m-auto my-4 max-w-xl text-lg md:text-xl lg:text-2xl">
            The go-to resource for developers to start building with Edgeware.
          </p>
        </div>

        {/* Docs links */}
        <div className="container mx-auto my-16 max-w-4xl px-4">
          <ul className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <li className="w-full md:w-1/2">
              <a
                href="https://docs.edgeware.wiki/"
                className="text-wh flex flex-row space-x-4 rounded-md border border-grey-800 bg-grey-900 p-4 hover:bg-grey-800 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="block rounded-3xl border-8 border-grey-800 bg-black p-3 pt-3">
                  <FileList3LineIcon className="h-6 w-6 fill-white" />
                </span>
                <div>
                  <span className="block">Documentation</span>
                  <p className="text-sm text-grey-300">
                    Learn about the technology and start building on the Edgeware blockchain.
                  </p>
                </div>
              </a>
            </li>
            <li className="w-full md:w-1/2">
              <a
                href={socialMediaUrls.discordUrl}
                className="text-wh flex flex-row space-x-4 rounded-md border border-grey-800 bg-grey-900 p-4 hover:bg-grey-800 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="block rounded-3xl border-8 border-grey-800 bg-black p-3 pt-3">
                  <DiscordFillIcon className="h-6 w-6 fill-white" />
                </span>
                <div>
                  <span className="block">Community</span>
                  <p className="text-sm text-grey-300">
                    Join our growing community and help shape the future of Edgeware and the
                    ecosystem.
                  </p>
                </div>
              </a>
            </li>
          </ul>

          <div className="my-16 text-center">
            <Button href="/build" sizing="large" colorStyle="primary">
              Start Building
            </Button>
          </div>
        </div>

        <div className="h-8 bg-gradient-to-b from-transparent to-grey-900 md:h-16 lg:h-32" />
      </div>
    </section>
  );
};
