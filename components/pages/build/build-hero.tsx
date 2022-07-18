export const BuildHero = () => {
  return (
    <section
      className="container mx-auto max-w-7xl py-6 px-4 md:py-12 lg:py-24"
      id="build-on-cutting-edge"
    >
      {/* Intro text*/}
      <div className="flex flex-col items-center text-center md:flex-row md:space-x-16 md:text-left">
        <div className="w-full md:w-4/6">
          <h1 className="my-4 text-4xl font-medium md:text-5xl lg:text-6xl">
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
        <div className="w-full p-8 text-center md:w-3/6 md:p-0">
          <img
            src="/images/build/developers-hexagon.png"
            alt=""
            loading="lazy"
            className="inline-block w-full"
          />
        </div>
      </div>
    </section>
  );
};
