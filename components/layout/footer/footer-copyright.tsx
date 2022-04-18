export const FooterCopyright = () => {
  return (
    <>
      <p className="text-lg">
        © 2019 - {new Date().getFullYear()} Edgeware built by the Edgeware Community
      </p>
      <div className="max-w-4xl m-auto">
        <p className="text-md text-gray-500 my-4">
          Edgeware is a blockchain network focused on funding and promoting open collectives through
          decentralised governance. This governance process is used to fund, manage, and deploy
          improvements to the network, creating a self-improving system that coordinates and
          supports its own development.
        </p>
      </div>
    </>
  );
};
