export const FooterCopyright = () => {
  return (
    <>
      <p className="text-lg">
        © 2019 - {new Date().getFullYear()} Edgeware is maintained by the Edgeware Community
      </p>
      <div className="m-auto max-w-3xl">
        <p className="my-4 text-sm text-grey-500">
          Edgeware is a blockchain network focused on funding and promoting open collectives through
          decentralised governance. This governance process is used to fund, manage, and deploy
          improvements to the network, creating a self-improving system that coordinates and
          supports its own development.
        </p>
      </div>
    </>
  );
};
