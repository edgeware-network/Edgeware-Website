import { WidgetForm } from './widget-form';
import { Web3ContextProvider } from './web3-context';

export const EcosystemWidget = () => {
  return (
    <section className="container mx-auto mb-40 max-w-6xl">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center text-5xl">EdgeWASM and EdgeEVM conversion</h2>
        <p className="my-4">
          You can convert your EdgeWASM tokens to EdgeEVM tokens and vice versa.
        </p>
      </div>
      <div className="mx-auto mt-16 mb-8 max-w-4xl rounded-lg border border-grey-800 p-8">
        <Web3ContextProvider>
          <WidgetForm />
        </Web3ContextProvider>
      </div>
      <p className="text-center">
        Need assistance or have questions? You can reach out to us on our Discord at{' '}
        <a
          href="https://discord.gg/8wrdMrAFtv"
          target="_blank"
          rel="noreferrer"
          className="text-primary-500"
        >
          #public-square
        </a>{' '}
        channel.
      </p>
    </section>
  );
};

export default EcosystemWidget;
