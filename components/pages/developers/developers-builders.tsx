export const DevelopersBuilders = () => {
  return (
    <section className="container mx-auto max-w-6xl py-24" id="builders">
      {/* Intro text*/}
      <div className="flex flex-row items-center space-x-16">
        <div className="w-1/2">
          <img
            src="/images/developers/code-s-slash-large.png"
            alt="Builders Guild Icon"
            loading="lazy"
            width="474"
            height="472"
          />
        </div>
        <div className="w-1/2">
          <h2 className="my-4 text-6xl font-medium">Edgeware Builders</h2>
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
