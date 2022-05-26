export const DevelopersHero = () => {
  return (
    <div className="container mx-auto max-w-6xl py-24">
      {/* Intro text*/}
      <div className="flex flex-row space-x-16">
        <div className="w-3/5">
          <h1 className="my-4 text-5xl font-medium">Build on the cutting-edge</h1>
          <p className="text-md">
            Edgeware is built on Parity Substrate and features a combination of EVM, WASM and
            Rust-based pallets, giving developers modularity, easy deployment, and deep runtime
            features.
          </p>
        </div>
        <div className="w-2/5"></div>
      </div>
    </div>
  );
};
