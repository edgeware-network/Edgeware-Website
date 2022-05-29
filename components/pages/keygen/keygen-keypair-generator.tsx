import { KeyPairGenerator } from './forms/keypair-generator';

export const KeygenKeypairGenerator = () => {
  return (
    <section id="keypair" className="container mx-auto my-48">
      <h2 className="my-8 text-5xl">Generate keypair</h2>
      <p className="my-2 max-w-prose">
        Please keep in mind that this method to generate a public/private key pair is insecure!
        <br />
        The preferred way to generate a private key is using the command line or polkadot-js, on an
        air-gapped computer.
      </p>
      <div>
        <KeyPairGenerator />
      </div>
    </section>
  );
};
