export const DevelopersHero = () => {
  return (
    <section className="container mx-auto max-w-7xl py-24" id="build-on-cutting-edge">
      {/* Intro text*/}
      <div className="flex flex-row items-center space-x-16">
        <div className="w-4/6 p-4">
          <h1 className="my-4 text-6xl font-medium">
            Build on the
            <br />
            cutting-edge
          </h1>
          <p className="my-8 max-w-2xl text-lg leading-relaxed">
            Edgeware is built on Parity Substrate and features a combination of EVM, WASM and
            Rust-based pallets, giving developers modularity, easy deployment, and deep runtime
            features.
          </p>
        </div>
        <div className="w-3/6">
          <img src="/images/developers/developers-hexagon.png" alt="" loading="lazy" />
        </div>
      </div>
    </section>
  );
};
