  // generate a function that returns an object containing nft_url and nft name
  const generate = (wallet: string, addresses: string[]): {name: string, img: string}[] => {

    let nfts: {name: string, img: string}[] = [];

    console.log(addresses, "inside function:");

    for(let address in addresses){
      const { contract } = useContract(addresses[address]);
      const { data, isLoading, error } = useOwnedNFTs(contract, wallet);
      let nft = {name: "", img: ""};
      const metadata = data?.[0].metadata;
      nft.img = metadata?.animation_url;
      useEffect(() => {
        setLoader(isLoading);
        setError(error);
      },[])
      nft.name = metadata?.name.toString().split(": ")[1];
      nfts.push(nft);
    }
    return nfts;
  };

  const nfts = generate(wallet, addresses);
  console.log(nfts)
   


import { Listbox } from '@headlessui/react';
import { useState, Fragment, useEffect } from 'react';
import { useOwnedNFTs, useContract, useAddress, MediaRenderer, useMetamask, useDisconnect } from '@thirdweb-dev/react';
import IconArrow from 'remixicon/icons/Arrows/arrow-down-s-line.svg';

const NFTsSeries = [
  {
    index: 1,
    type: 'NFTDrop Series',
    addresses: [
      "0x6B7508b491b907B2C6d86737516F3786Ddc75063",
      "0x9DD893814e0934C038EeD71eD0591DB201674747",
      "0x4d08e6e1c7607906Cd87Ef189a39aF7A68f677A3",
      "0x405355C2613B516812eA4d2159Ca8798AEdb97D5"
    ],
  },
  {
    index: 2,
    type: 'GiftDrop Series',
    addresses: ["0xcBD6701C3313aC76c529468957Fc2137484A4A51"],
  },
];

const maxIndex = Math.max(...NFTsSeries.map((m) => m.index));

export default function NftPage() {
  const [activeIndex, setActiveIndex] = useState<number>(maxIndex);
  const [loader, setLoader] = useState<boolean>(true);
  const [error, setError] = useState<unknown>();
  const selectedEdition = NFTsSeries.find((m) => m.index === activeIndex);
  const dropdownOptions = NFTsSeries.map((m) => m.type);

  console.log(selectedEdition);

  const addresses = selectedEdition.addresses;
  console.log(addresses);


  const wallet = useAddress();


  const disconnectWallet = useDisconnect();
  const connectWallet = useMetamask();

  return (
    <>
      <section id="nft-cards" className="flex flex-wrap md:place-content-between place-content-center sm:mx-auto max-w-5xl px-8 gap-8 py-8 pb-24">
        <div className="flex flex-col group hover:cursor-pointer">
          {nfts.map((nft, index) => (
            <Fragment>
            {!loader && <div key={index} className="p-4 bg-[#000] rounded-[16px] border-2 group-hover:border-green-500">
              <MediaRenderer src={nft?.img} width="100" height="100" className='bg-black'/>
            </div> }
            {console.log(nft.img)}
            <h3 className="my-2 mx-auto max-w-prose text-md leading-relaxed group-hover:text-green-500">{nft.name}</h3>
            </Fragment> */}
            {/* ))
          }
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: 'NFT Page',
        description:
          'View your NFTs here.',
      },
    },
  };
}

import { Listbox } from "@headlessui/react";
import { useState, Fragment, useEffect } from 'react';
import { useDisconnect, useMetamask } from "@thirdweb-dev/react";
import IconArrow from 'remixicon/icons/Arrows/arrow-down-s-line.svg';


const NFTsSeries = [
  {
    index: 1,
    type: 'NFTDrop Series',
    addresses: [
      "0x6B7508b491b907B2C6d86737516F3786Ddc75063",
      "0x9DD893814e0934C038EeD71eD0591DB201674747",
      "0x4d08e6e1c7607906Cd87Ef189a39aF7A68f677A3",
      "0x405355C2613B516812eA4d2159Ca8798AEdb97D5"
    ],
  },
  {
    index: 2,
    type: 'GiftDrop Series',
    addresses: ["0xcBD6701C3313aC76c529468957Fc2137484A4A51"],
  },
];

const maxIndex = Math.max(...NFTsSeries.map((m) => m.index));

export default function NFTsPage() {
  
  const [activeIndex, setActiveIndex] = useState<number>(maxIndex);
  const selectedEdition = NFTsSeries.find((m) => m.index === activeIndex);
  const dropdownOptions = NFTsSeries.map((m) => m.type);
  const disconnectWallet = useDisconnect();
  const connectWallet = useMetamask();

  return (
    <>
      <section id="nft" className="mt-24 px-4 text-center">
        <h1 className="my-8 text-6xl">Minted NFTs</h1>
        <p className="my-4 mx-auto max-w-prose text-lg leading-relaxed">
          Connect wallet to view minted NFTs:
        </p>
        <button className="py-2.5 px-5 mb-2.5 rounded-md bg-primary-500 text-white hover:bg-primary-600 hover:text-white" onClick={disconnectWallet}>Disconnect</button>
        <button className="py-2.5 px-5 mb-2.5 rounded-md bg-primary-500 text-white hover:bg-primary-600 hover:text-white" onClick={() => connectWallet() }>Connect</button>
      </section>
      <section id="nft-menu" className="px-4 text-center">
        <div className="relative mx-auto flex w-60 flex-wrap justify-center">
            <Listbox onChange={setActiveIndex} value={activeIndex}>
              <Listbox.Button className="flex w-full grow flex-row items-center justify-between rounded border border-grey-700 p-4">
                <span>{selectedEdition?.type}</span>
                <IconArrow className={`ml-2 h-6 w-6 shrink-0 fill-grey-600`} />
              </Listbox.Button>
              <Listbox.Options className="absolute top-14 z-10 mt-1 max-h-60 w-full overflow-auto rounded border border-grey-700 bg-grey-900">
                {dropdownOptions.map((type, index) => (
                  <Listbox.Option
                    key={index}
                    value={index + 1}
                    className="hover-bg-grey-800 flex cursor-pointer flex-row items-center p-4 text-left"
                  >
                    {({ active }) => (active ? <span>{type}</span> : <span>{type}</span>)}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
          </div>
      </section>
    </>
  )
}

const NFTsContractAddress = [
  {
    index: 1,
    type: "NFT Drop Series",
    address: "0x6B7508b491b907B2C6d86737516F3786Ddc75063",
  },
  {
    index: 2,
    type: "GiftDrop Series",
    address: "0xcBD6701C3313aC76c529468957Fc2137484A4A51",
  },
];

  useEffect(() => {
    const getContractMetadata = (addresses: string[]) => {
      for(let index in addresses){
        console.log(addresses[index]);
      }
    };
    getContractMetadata(contractAddresses);
  },[]);
