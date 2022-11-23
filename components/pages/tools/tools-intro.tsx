export const ToolsIntro = () => {
  return (
    <section id="intro" className="container mx-auto my-16 max-w-7xl">
      <h1 className="my-8 text-6xl">Edgeware Key Generator and Tools</h1>
      <p className="my-2 leading-relaxed">
        This page is a collection of tools to generate keys, do the public key to address
        transformation and do EdgeEVM/EdgeWASM transfers.
        <br />
        It is not a wallet and does not store your keys or data.
        <br />
        Note: The preferred way to generate a private key is{' '}
        <a
          href="https://docs.edgeware.wiki/quickstart/create-an-account#subkey"
          target="_blank"
          className="underline"
          rel="noreferrer noopener"
        >
          using the command line
        </a>
        , on an air-gapped computer.
      </p>
      <p className="my-4">Tools this page:</p>
      <ol className="my-4 list-inside list-decimal">
        <li>
          <a href="#keypair" className="text-primary-500 underline hover:text-primary-400">
            Generate keypair
          </a>
        </li>
        <li>
          <a
            href="#convert-public-key"
            className="text-primary-500 underline hover:text-primary-400"
          >
            Convert public key to address
          </a>
        </li>
        <li>
          <a href="#convert-address" className="text-primary-500 underline hover:text-primary-400">
            Convert address to public key
          </a>
        </li>
        <li>
          <a href="#deposit" className="text-primary-500 underline hover:text-primary-400">
            Deposit to EVM
          </a>
        </li>
        <li>
          <a href="#withdraw" className="text-primary-500 underline hover:text-primary-400">
            Withdraw from EVM
          </a>
        </li>
      </ol>
    </section>
  );
};
