export const DevelopersBuilders = () => {
  return (
    <section className="container mx-auto max-w-6xl py-6 px-4 md:py-12 lg:py-24" id="builders">
      {/* Intro text*/}
      <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-16">
        <div className="w-full md:w-1/2">
          <img
            src="/images/developers/code-s-slash-large.png"
            alt="Builders Guild Icon"
            loading="lazy"
            width="474"
            height="472"
            className="mx-auto md:mx-0"
          />
        </div>
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h2 className="my-4 text-3xl font-medium md:text-4xl lg:text-6xl">Edgeware Builders</h2>
          <p className="text-md my-4">
            Join the developer community on our Discord for support with node operations, smart
            contract or runtime development, or Substrate questions.
          </p>
          <p className="text-md my-4">
            <a
              href="https://t.me/edg_developers"
              target="_blank"
              rel="noreferrer noopener"
              className="text-primary-500 hover:text-primary-600 hover:underline"
            >
              Learn more about the builders guild
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
