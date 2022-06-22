export const BinanceKabocha: React.FC = () => {
  return (
    <section className="container my-32 mx-auto flex max-w-4xl" id="kabocha-network">
      <div className="text-center">
        <div className="flex flex-col items-center justify-center">
          <img
            src="/images/binance/kabocha-network.png"
            width="128"
            height="128"
            alt="Kabocha"
            loading="lazy"
          />
          <span className="text-[#fff85b]">Kabocha Network</span>
        </div>

        <h1 className="my-4 text-5xl font-medium">
          EDG holders will be receiving Kusama Parachain tokens
        </h1>

        <p className="my-8 text-lg">
          Kabocha is an experimental parachain governed and funded by the EDG ecosystem. $KAB is
          launching soon through their crowdloan process, and you can help by providing $KSM or
          holding EDG through their snapshot.
        </p>

        <div className="my-4">
          <a
            href="https://www.kabocha.network/"
            className="inline-block rounded-lg bg-primary-500 py-4 px-12 text-xl font-medium text-white hover:bg-primary-600 hover:text-white"
          >
            Learn more about Kabocha
          </a>
        </div>
      </div>
    </section>
  );
};
