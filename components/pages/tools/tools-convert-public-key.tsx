import { AddressConverter } from './forms/address-converter';

export const ToolsConvertPublicKey = () => {
  return (
    <section id="convert-public-key" className="container mx-auto my-48 max-w-7xl">
      <h2 className="my-8 text-5xl">Convert public key to address</h2>
      <p className="my-2  max-w-prose">
        If you have a public key (0x1234...), you can use this tool to convert it into a
        mainnet/testnet address.
      </p>
      <div>
        <AddressConverter type="public-key" />
      </div>
    </section>
  );
};
