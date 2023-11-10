import { Listbox } from '@headlessui/react';
import { useState } from 'react';
import IconArrow from 'remixicon/icons/Arrows/arrow-down-s-line.svg';

const WidgetCampaign = [
  {
    index: 1,
    campaign: 'Halloween Edition',
    src: 'https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/erc1155.html?contract=0xcBD6701C3313aC76c529468957Fc2137484A4A51&chain=%7B%22name%22%3A%22Edgeware+EdgeEVM+Mainnet%22%2C%22chain%22%3A%22EDG%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fedgeware-edgeevm.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Edgeware%22%2C%22symbol%22%3A%22EDG%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22edg%22%2C%22chainId%22%3A2021%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22edgeware-edgeevm%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmS3ERgAKYTmV7bSWcUPSvrrCC9wHQYxtZqEQYx9Rw4RGA%22%2C%22width%22%3A352%2C%22height%22%3A304%2C%22format%22%3A%22png%22%7D%7D&clientId=57b1f3ff173c0acef018fbca1356a7af&tokenId=0&theme=dark&primaryColor=red',
  },
];

const maxIndex = Math.max(...WidgetCampaign.map((m) => m.index));

export default function SocietyPage() {
  const [activeIndex, setActiveIndex] = useState<number>(maxIndex);

  const currentWidget = WidgetCampaign.find((m) => m.index === activeIndex);
  const dropdownOptions = WidgetCampaign.map((m) => m.campaign).reverse();

  return (
    <>
      <section id="edgeware-giftdrop" className="mt-24 px-4 text-center">
        <h1 className="my-8 text-6xl">GiftDrops</h1>
        <p className="my-4 mx-auto max-w-prose text-lg leading-relaxed">
          GiftDrop is a series of free commemorative mint drops for the EDGizens! Flex your
          community presence through your GiftDrop NFTs collection{' '}
          <span role="img" aria-label="Cool Emoji">
            😎
          </span>
        </p>
        <p className="my-4 mx-auto max-w-prose leading-relaxed">
          Mint your free GiftDrop NFT today:
        </p>
      </section>

      <section id="edgeware-giftdrop-widget" className="py-8 pb-24 text-center">
        <div className="relative mx-auto flex w-60 flex-wrap justify-center">
          <Listbox onChange={setActiveIndex} value={activeIndex}>
            <Listbox.Button className="flex w-full grow flex-row items-center justify-between rounded border border-grey-700 p-4">
              <span>{currentWidget?.campaign}</span>
              <IconArrow className={`ml-2 h-6 w-6 shrink-0 fill-grey-600`} />
            </Listbox.Button>
            <Listbox.Options className="absolute top-14 z-10 mt-1 max-h-60 w-full overflow-auto rounded border border-grey-700 bg-grey-900">
              {dropdownOptions.map((campaign, index) => (
                <Listbox.Option
                  key={index}
                  value={index + 1}
                  className="hover-bg-grey-800 flex cursor-pointer flex-row items-center p-4 text-left"
                >
                  {({ active }) => (active ? <span>{campaign}</span> : <span>{campaign}</span>)}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </div>
        <div className="mb-8 py-4">
          <iframe
            className="mx-auto rounded-lg border-0 shadow-2xl outline-none focus:outline-none focus:ring-0"
            title="Edgeware GiftDrop Widget"
            src={currentWidget?.src}
            width="600px"
            height="600px"
          />
        </div>
        <div className="my-4 mx-auto flex max-w-4xl flex-col gap-4 rounded-lg border-2 border-grey-700 border-opacity-50 bg-grey-800 bg-opacity-30 p-5">
          <h3 className="text-xl font-bold">Minted the NFT(s)?</h3>
          <p className="leading-relaxed">
            Claim your discord role:{' '}
            <a
              href="https://discord.gg/CMbVmB3GMp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 ml-2 rounded-lg bg-primary-500 px-4 py-1 text-white"
            >
              click here
            </a>
          </p>
          <p className="leading-relaxed">
            To learn more about the GiftDrops, please visit{' '}
            <a
              href="https://gov.edgewa.re/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 text-primary-500 underline"
            >
              the governance forum thread
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: 'Edgeware GiftDrops',
        description: 'GiftDrop is a series of free commemorative mint drops for the EDGizens!',
      },
    },
  };
}
