import { useState } from 'react';

const WidgetMonths = [
  {
    month: 'July 2023',
    src: 'https://embed.ipfscdn.io/ipfs/bafybeihazpt6pkm4azgtupdz7hc2j3o4zpjsvtcgfq4t2keozxkss3ud6q/?contract=0x6B7508b491b907B2C6d86737516F3786Ddc75063&chain=%7B%22name%22%3A%22Edgeware+EdgeEVM+Mainnet%22%2C%22chain%22%3A%22EDG%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fedgeware-edgeevm.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Edgeware%22%2C%22symbol%22%3A%22EDG%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22edg%22%2C%22chainId%22%3A2021%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22edgeware-edgeevm%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmS3ERgAKYTmV7bSWcUPSvrrCC9wHQYxtZqEQYx9Rw4RGA%22%2C%22width%22%3A352%2C%22height%22%3A304%2C%22format%22%3A%22png%22%7D%7D&clientId=57b1f3ff173c0acef018fbca1356a7af&primaryColor=purple&month=July&year=2023',
  },
  {
    month: 'August 2023',
    src: 'https://embed.ipfscdn.io/ipfs/bafybeihazpt6pkm4azgtupdz7hc2j3o4zpjsvtcgfq4t2keozxkss3ud6q/?contract=0x9DD893814e0934C038EeD71eD0591DB201674747&chain=%7B%22name%22%3A%22Edgeware+EdgeEVM+Mainnet%22%2C%22chain%22%3A%22EDG%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fedgeware-edgeevm.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Edgeware%22%2C%22symbol%22%3A%22EDG%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22edg%22%2C%22chainId%22%3A2021%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22edgeware-edgeevm%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmS3ERgAKYTmV7bSWcUPSvrrCC9wHQYxtZqEQYx9Rw4RGA%22%2C%22width%22%3A352%2C%22height%22%3A304%2C%22format%22%3A%22png%22%7D%7D&clientId=57b1f3ff173c0acef018fbca1356a7af&primaryColor=yellow&month=August&year=2023',
  },
  {
    month: 'September 2023',
    src: 'https://embed.ipfscdn.io/ipfs/bafybeihazpt6pkm4azgtupdz7hc2j3o4zpjsvtcgfq4t2keozxkss3ud6q/?contract=0x4d08e6e1c7607906Cd87Ef189a39aF7A68f677A3&chain=%7B%22name%22%3A%22Edgeware+EdgeEVM+Mainnet%22%2C%22chain%22%3A%22EDG%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fedgeware-edgeevm.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Edgeware%22%2C%22symbol%22%3A%22EDG%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22edg%22%2C%22chainId%22%3A2021%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22edgeware-edgeevm%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmS3ERgAKYTmV7bSWcUPSvrrCC9wHQYxtZqEQYx9Rw4RGA%22%2C%22width%22%3A352%2C%22height%22%3A304%2C%22format%22%3A%22png%22%7D%7D&clientId=57b1f3ff173c0acef018fbca1356a7af&theme=dark&primaryColor=teal&month=September&year=2023',
  },
];

const getCurrent = () => {
  const now = new Date();
  const month = now.toLocaleString('default', { month: 'long' });
  const year = now.getFullYear();
  return `${month} ${year}`;
};

export default function SocietyPage() {
  // find key for current month
  const currentMonth = getCurrent();
  const [activeMonth, setActiveMonth] = useState<string>(currentMonth);

  const currentWidget = WidgetMonths.find((m) => m.month === activeMonth);

  return (
    <>
      <section id="edgeware-csp" className="mt-24 px-4 text-center">
        <h1 className="my-8 text-6xl">Contributors' Support Program</h1>
        <p className="my-4 mx-auto max-w-prose text-lg leading-relaxed">
          Contributors' Support Program allows anyone to support the currently non-treasury funded
          contributors to continue their contributions to the Edgeware community through the monthly
          limited editions of NFTs. This program aims to provide basic minimal monthly incentives
          for Edgeware contributors who are consistent with their contributions.
        </p>
        <p className="my-4 mx-auto max-w-prose leading-relaxed">
          Click on the month below to mint the corresponding CSP NFT(s):
        </p>
      </section>

      <section id="edgeware-csp-widget" className="py-8 pb-24 text-center">
        <div className="flex flex-wrap justify-center">
          {WidgetMonths.map((m) => (
            <button
              key={m.month}
              className={`mx-2 my-2 rounded-lg border-2  px-4 py-2 ${
                activeMonth === m.month
                  ? 'border-primary-500 bg-primary-500 font-semibold text-white'
                  : 'border-primary-700 bg-primary-700 opacity-90 hover:opacity-100'
              }`}
              onClick={() => setActiveMonth(m.month)}
            >
              {m.month}
            </button>
          ))}
        </div>
        <div className="mb-8 py-4">
          <iframe
            className="mx-auto rounded-lg border-0 shadow-2xl outline-none focus:outline-none focus:ring-0"
            title="Edgeware CSP Widget"
            src={currentWidget?.src}
            width="600px"
            height="600px"
          />
        </div>
        <p className="my-4 mx-auto max-w-3xl leading-relaxed">
          Minted the NFT(s)? Claim your discord role and perks now:{' '}
          <a
            href="https://discord.gg/uNY622UGh4"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 text-primary-500 underline"
          >
            click here
          </a>
          🤘
        </p>
        <p className="my-4 mx-auto max-w-3xl leading-relaxed">
          To learn more about the Contributors' Support Program, please visit{' '}
          <a
            href="https://gov.edgewa.re/discussion/12279-contributors-support-program-csp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 text-primary-500 underline"
          >
            the governance forum thread
          </a>
          .
        </p>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: 'Edgeware Contributors Support Program',
        description:
          'Support the ongoing community contributions through the monthly editions of limited NFTs and get exclusive perks.',
      },
    },
  };
}
