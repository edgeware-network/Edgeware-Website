export const BinanceGovernance: React.FC = () => {
  return (
    <section className="container mx-auto my-32 flex max-w-4xl" id="governance">
      <div className="text-center">
        <h2 className="my-4 text-6xl font-medium">Participate in Governance</h2>

        <p className="my-8 text-lg">
          Edgeware is a DAO with a complete on-chain treasury, council elections and a robust
          proposal system.
          <br />
          We use the EDG token to vote on these and we invite you to participate directly, or
          indirectly by delegating your EDG to a responsible holder in the ecosystem.
        </p>

        <div className="my-4">
          <a
            href="https://www.edgeware.app/#/delegation"
            className="inline-block rounded-lg bg-primary-500 py-4 px-12 text-xl font-medium text-white hover:bg-primary-600 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Delegate on Edgeware App
          </a>
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/watch?v=9EDufAj1_JQ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-lg hover:text-primary-500"
          >
            <img
              src="/images/binance/delegate.png"
              width="213"
              height="129"
              className="inline-block"
              alt="How to run for Council at Edgeware"
              loading="lazy"
            />

            <span className="my-4 underline">Watch EDG Delegation Video Tutorial</span>
          </a>
        </div>
        <div className="my-4">
          <a
            href="https://www.edgeware.app/#/delegation"
            className="inline-block rounded-lg bg-primary-500 py-4 px-12 text-xl font-medium text-white hover:bg-primary-600 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            View delegates
          </a>
        </div>
      </div>
    </section>
  );
};
