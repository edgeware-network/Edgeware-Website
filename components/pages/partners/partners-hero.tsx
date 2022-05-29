export const PartnersHero: React.FC = () => {
  return (
    <section className="bg-[url('/images/partners/partners-bg@2x.jpg')] bg-cover bg-center pt-36">
      <div className="container mx-auto flex min-h-[75vh] max-w-6xl">
        <div className="my-auto w-full text-center">
          <h1 className="my-4 text-6xl font-medium">Home to next generation networks</h1>
          <p className="my-8 mx-auto max-w-prose text-lg">
            Edgeware partners with leading cryptocurrency teams, projects and collectives to create
            the future of Web3.
          </p>
        </div>
      </div>
      <div className="h-32 bg-gradient-to-b from-transparent to-grey-900" />
    </section>
  );
};
