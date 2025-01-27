import { socialMediaUrls } from 'data/config';

export const BinanceEdgewareIntro = () => {
  return (
    <section
      id="edgeware"
      className="container mx-auto my-24 max-w-3xl rounded-md border border-grey-700"
    >
      <div className="bg-[url('/images/backgrounds/edg-logomark-bg.svg')] bg-[center_top_25%] bg-no-repeat px-16 py-8 text-center">
        <p className="my-12 text-2xl">
          Edgeware is a scalable, sovereign and cooperatively owned smart contract platform with a
          large public treasury, strong governing community, and a focus on DAO deployments.
        </p>
        <p className="my-12 text-lg">
          Edgeware is a society of technical and artistic thinkers striving to discover new
          economies. These visions are inclusive, equitable, automated, and fundamentally more
          human.
        </p>
        <p className="my-12 text-lg">
          We’re looking to connect and involve daring and creative minds both new and old to
          blockchain, support their ideas, and together produce a better culture than yesterday.
        </p>
        <div className="my-12">
          <a
            href={socialMediaUrls.discordUrl}
            className="inline-block rounded-lg bg-grey-500 px-12 py-4 text-xl font-medium text-white hover:bg-grey-600 hover:text-white"
          >
            Join our community on Discord
          </a>
        </div>
      </div>
    </section>
  );
};
