export const HomepageSubstratePlatform = () => {
  return (
    <section id="edge-substrate-platform" className="my-24 py-24">
      {/* Intro */}
      <div className="container mx-auto max-w-xl text-center">
        <h2 className="text-5xl font-medium">Substrate Development Platform</h2>
        <p className="my-4 text-lg">
          Edgeware uses the same powerful framework as Kusama and Polkadot, but features three ways
          to build your dapp or project, including familiar EVM, cutting-edge WASM and modular,
          runtime-level Pallets.
        </p>
      </div>

      {/* 3 column benefits */}
      <div className="container mx-auto my-12 max-w-5xl">
        <div className="flex space-x-16">
          {/* EdgeEVM */}
          <div className="flex w-1/3 flex-col justify-between rounded-lg bg-grey-700 px-3 py-3 text-center">
            <div>
              <h3 className="my-2 text-2xl font-normal text-primary-500">EdgeEVM</h3>
              <p>
                Permissionless, familiar, and Solidity-based, EdgeEVM makes it easy to expand to new
                chains, debug and port your dapps, and gives you access to the largest set of tools
                and resources.
              </p>
            </div>

            <ul className="mt-12 flex flex-col space-y-2">
              <li className="rounded-md bg-primary-500 p-1.5 text-center uppercase text-grey-900">
                Mature Ecosystem
              </li>
              <li className="rounded-md bg-primary-500 p-1.5 text-center uppercase text-grey-900">
                Solidity Compatible
              </li>
              <li className="rounded-md bg-primary-500 p-1.5 text-center uppercase text-grey-900">
                Easy Portability
              </li>
              <li className="rounded-md bg-primary-500 p-1.5 text-center uppercase text-grey-900">
                Meta Transaction Ready
              </li>
            </ul>
          </div>

          {/* EdgeWASM */}
          <div className="flex w-1/3 flex-col justify-between rounded-lg bg-grey-700 px-3 py-3 text-center">
            <div>
              <h3 className="my-2 text-2xl font-normal text-green-500">EdgeWASM</h3>
              <p>
                The permissionless environment for the experts seeking more performance and
                future-proof scalability compared to EdgeEVM.
              </p>
            </div>

            <ul className="mt-12 flex flex-col space-y-2">
              <li className="rounded-md bg-green-500 p-1.5 text-center uppercase text-grey-900">
                High Performing Permissionless Environment
              </li>
              <li className="rounded-md bg-green-500 p-1.5 text-center uppercase text-grey-900">
                Memory/Weight Efficient
              </li>
              <li className="rounded-md bg-green-500 p-1.5 text-center uppercase text-grey-900">
                Futureproof
              </li>
              <li className="rounded-md bg-green-500 p-1.5 text-center uppercase text-grey-900">
                Rust Ink
              </li>
            </ul>
          </div>

          {/* Ecosystem */}
          <div className="flex w-1/3 flex-col justify-between rounded-lg bg-grey-700 px-3 py-3 text-center">
            <div>
              <h3 className="my-2 text-2xl font-normal text-grey-300">SubstratePallets</h3>
              <p>
                Unlock the full power and performance of the runtime using Substrate Pallets. Fully
                interoperable and future-proof, Rust-based pallets can grant the chain new functions
                once approved by the governing community.
              </p>
            </div>

            <ul className="mt-12 flex flex-col space-y-2">
              <li className="rounded-md bg-grey-300 p-1.5 text-center uppercase text-grey-900">
                Interoperability with other Pallets
              </li>
              <li className="rounded-md bg-grey-300 p-1.5 text-center uppercase text-grey-900">
                Low Level Access
              </li>
              <li className="rounded-md bg-grey-300 p-1.5 text-center uppercase text-grey-900">
                Permissioned Deployment
              </li>
              <li className="rounded-md bg-grey-300 p-1.5 text-center uppercase text-grey-900">
                Forkless Upgrades
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
