import React from 'react';

export const ToolsIntro = () => {
  const TOOLS = {
    deposit: 'Deposit to EVM',
    withdraw: 'Withdraw from EVM',
    'convert-address': ' Convert address to public key',
    'convert-public-key': 'Convert public key to address',
    keypair: 'Generate keypair',
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const anchorTarget = document.getElementById(href.replace('#', ''));
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="intro" className="container mx-auto my-16 max-w-7xl">
      <h1 className="my-8 text-6xl">Edgeware Key Generator and Tools</h1>
      <p className="my-2 max-w-prose">
        This page is a collection of tools to generate keys, do the public key to address
        transformation and do EdgeEVM/EdgeWASM transfers.
        <br />
        It is not a wallet and does not store your keys or data.
      </p>
      <p className="my-4">Available tools:</p>
      <nav className="space-2 flex max-w-sm flex-col flex-wrap">
        {Object.keys(TOOLS).map((tool) => (
          <a
            key={tool}
            href={`#${tool}`}
            onClick={handleClick}
            className="my-2 rounded-md bg-grey-800 px-4 py-2 hover:bg-grey-700 hover:text-white"
          >
            → {TOOLS[tool]}
          </a>
        ))}
      </nav>
    </section>
  );
};
