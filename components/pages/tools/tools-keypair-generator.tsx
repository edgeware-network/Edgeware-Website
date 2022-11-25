import { KeyPairGenerator } from './forms/keypair-generator';

export const ToolsKeypairGenerator = () => {
  return (
    <section id="keypair" className="container mx-auto my-48 max-w-7xl">
      <h2 className="my-8 text-5xl">Generate keypair</h2>
      <p className="my-2 max-w-prose">
        Please keep in mind that this method to generate a public/private key pair is not fully
        secure! The recommended way to generate a private key is using the command line or
        polkadot-js, on an air-gapped computer.
      </p>
      <p className="my-2 max-w-prose">
        Learn more about methods for{' '}
        <a
          href="https://docs.edgeware.wiki/quickstart/create-an-account"
          target="_blank"
          rel="noreferrer noopener"
          className="underline"
        >
          generating key pairs at Edgeware Docs website
        </a>
        .
      </p>
      <div>
        <KeyPairGenerator />
      </div>
    </section>
  );
};
