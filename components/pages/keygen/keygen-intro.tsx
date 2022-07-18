export const KeygenIntro = () => {
  return (
    <section id="intro" className="container mx-auto my-16 max-w-7xl">
      <h1 className="my-8 text-6xl">Edgeware Key Generator</h1>
      <p className="my-2">
        This page generates public/private keypairs, which you can use to receive EDG from the
        Edgeware lockdrop.
      </p>
      <p className="my-2">
        Note: The preferred way to generate a private key is using the command line, on an
        air-gapped computer.
      </p>
    </section>
  );
};
