export const BinanceHero: React.FC = () => {
  return (
    <section className="bg-[url('/images/binance/hero-binance@2x.jpg')] bg-cover bg-center pt-36">
      <div className="container mx-auto flex min-h-[75vh] max-w-4xl">
        <div className="my-auto text-center">
          <div className="flex justify-center">
            <img
              src="/images/binance/binance-logo@2x.png"
              // layout="fixed"
              width="90"
              height="90"
              alt="Binance"
              loading="lazy"
            />
          </div>

          <h1 className="my-4 text-6xl font-medium">
            Welcome to Edgeware,
            <br />
            Binance Users
          </h1>

          <p className="my-8 text-lg">
            Binance participated in the Edgeware token distribution, receiving 509,349,615 EDG on
            behalf of ETH holders. If you held ETH on Binance during this time, you received 201 EDG
            per ETH.
          </p>

          <div className="my-4">
            <a
              href="https://www.binance.com/en/support/announcement/aa00aba48425441683b23994ad25ee45"
              className="inline-block rounded-lg bg-primary-500 py-4 px-12 text-xl font-medium text-white hover:bg-primary-600 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more at Binance announcement
            </a>
          </div>

          <p className="my-8 text-2xl">
            Don't just <em>hodl</em>! Find out how you can become a full EDGizen and earn benefits
            through staking and voting
          </p>
        </div>
      </div>
    </section>
  );
};
