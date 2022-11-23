import { AddressConverter } from './forms/address-converter';

export const ToolsConvertAddress = () => {
  return (
    <section id="convert-address" className="container mx-auto my-48 max-w-7xl">
      <h2 className="my-8 text-5xl">Convert address to public key</h2>
      <p className="my-2 max-w-prose">
        If you have a testnet EDG address (5G7Agn...), you can use this tool to convert it into a
        public key (0x1234...)
      </p>
      <div>
        <AddressConverter type="ss58-address" />
      </div>
    </section>
  );
};
