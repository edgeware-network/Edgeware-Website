import AsteriskIcon from 'remixicon/icons/Editor/asterisk.svg';

export const BuildTechFeatures = () => {
  return (
    <section
      className="md-my-12 container mx-auto my-6 max-w-5xl py-24 px-4 lg:my-24"
      id="technical-features"
    >
      {/* Intro text*/}
      <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-16">
        <div className="w-full md:w-1/2">
          <h2 className="my-4 text-3xl font-medium md:text-4xl lg:text-5xl">Technical Features</h2>
          <p className="text-md my-4 leading-loose">
            Edgeware is a smart contract blockchain that compiles to a client runtime, a blob of{' '}
            <strong>WebAssembly (Wasm)</strong> code that may be built and run natively or executed
            within a Wasm virtual machine. Either way, when an Edgeware native binary is compiled,
            it includes a Wasm virtual machine which can be used to execute later versions of the
            client runtime downloaded from the network.
          </p>
          <p className="text-md my-4 leading-loose">
            The client runtime interfaces with networking code and other components provided by{' '}
            <strong>Parity Substrate</strong>. Substrate includes{' '}
            <strong>
              libp2p networking, PBFT consensus, proof-of-stake block validation and finality
              [substrate]
            </strong>
            . Ultimately, the client is only responsible for downloading, executing, and validating
            blocks from the network.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <TechFeaturesList />
        </div>
      </div>
    </section>
  );
};

const TechFeaturesList = () => {
  return (
    <div className="rounded-md border border-grey-700 px-4 py-2">
      <ul className="sepa flex flex-col divide-y divide-grey-700">
        <TechFeaturesListItem title="NPoS">
          Nominated Proof of Stake consensus is one of the core pillars of true decentralization of
          Edgeware.
        </TechFeaturesListItem>

        <TechFeaturesListItem title="EVM/WASM">
          Edgeware has the best of both worlds; EVM for compatibility and WASM for
          performance/efficiency.
        </TechFeaturesListItem>

        <TechFeaturesListItem title="Security via Rust">
          Edgeware's core architecture is built on Parity's Substrate and written in Rust proving
          next-gen security.
        </TechFeaturesListItem>

        <TechFeaturesListItem title="Pallets (Treasury, Identity)">
          Edgeware has integrated various modular pallets providing every features one could ask for
          at every stage.
        </TechFeaturesListItem>

        <TechFeaturesListItem title="Block time">
          Scalability is no more a concern with 6 seconds of block generation time and 12-18 seconds
          of finality in the Edgeware network.
        </TechFeaturesListItem>

        <TechFeaturesListItem title="Weight based transactions">
          For Edgeware's weight-based transaction(s) fees are charged before the execution,
          indirectly reducing the chances of gas wars and also transaction failures.
        </TechFeaturesListItem>
      </ul>
    </div>
  );
};

type TechFeaturesListItemProps = {
  title: string;
  children: React.ReactNode;
};

const TechFeaturesListItem = ({ title, children }: TechFeaturesListItemProps) => {
  return (
    <li className="py-3">
      <strong className="flex flex-row items-center font-normal">
        <AsteriskIcon className="mr-2 h-5 w-5 fill-primary-500" />
        {title}
      </strong>
      <p className="mt-1 text-xs leading-relaxed text-grey-300">{children}</p>
    </li>
  );
};
