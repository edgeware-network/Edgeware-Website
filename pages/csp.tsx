// prettier-ignore
const widgetSrc = 'https://bafybeidpp4d3znpjxlvlhitaylbqwmyk2gzcxazp5wkftvwu7r3lsyku2q.gateway.ipfscdn.io/?contract=0x02F67349EA20256F8Fb2354fb5E4ae5b62c0f8A6&chain=%7B%22name%22%3A%22Edgeware+EdgeEVM+Mainnet%22%2C%22chain%22%3A%22EDG%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fedgeware-edgeevm.rpc.thirdweb.com%2Fa8a7f8aa7ddd8115bad1892b179be99f%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Edgeware%22%2C%22symbol%22%3A%22EDG%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22edg%22%2C%22chainId%22%3A2021%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22edgeware-edgeevm%22%7D&primaryColor=purple';

export default function SocietyPage() {
  return (
    <>
      <section id="edgeware-csp" className="my-24 px-4 text-center">
        <h1 className="my-8 text-6xl">Contributor Support Program</h1>
        <p className="my-4 mx-auto max-w-prose text-lg leading-relaxed">
          The Edgeware Contributors Support Program (CSP) is a program designed to support the
          growth of the Edgeware community by providing grants to projects that contribute to the
          Edgeware ecosystem.
        </p>
        <p className="my-4 mx-auto max-w-prose leading-relaxed">
          Use the widget below to mint your own CSP NFT.
        </p>
      </section>

      <section id="edgeware-csp-widget" className="my-24 px-4 py-8 pb-24 text-center">
        <div className="py-4">
          <iframe
            className="mx-auto rounded-lg border-0 shadow-2xl outline-none focus:outline-none focus:ring-0"
            title="Edgeware CSP Widget"
            src={widgetSrc}
            width="600px"
            height="600px"
          />
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: 'Edgeware Community Contributors Program',
        description:
          'The Edgeware Community Contributors Program (CSP) is a program designed to support the growth of the Edgeware community by providing grants to projects that contribute to the Edgeware ecosystem.',
      },
    },
  };
}
