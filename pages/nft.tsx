import { useAddress, useDisconnect, useConnectionStatus, useMetamask, useContract, useOwnedNFTs, MediaRenderer } from "@thirdweb-dev/react";
import { BaseContract } from "ethers";
import { useCallback, useEffect, useRef, useState } from "react";

const contractAddresses = [
  "0x6B7508b491b907B2C6d86737516F3786Ddc75063",      
  "0x9DD893814e0934C038EeD71eD0591DB201674747",
  "0x4d08e6e1c7607906Cd87Ef189a39aF7A68f677A3",
  "0x405355C2613B516812eA4d2159Ca8798AEdb97D5",
  "0xcBD6701C3313aC76c529468957Fc2137484A4A51",
];

export default function NFTsPage() {

  const connectionStatus = useConnectionStatus();
  const address = useAddress();
  const connect = useMetamask();
  const disconnect = useDisconnect();
  const isConnected = (connectionStatus === "connected") ? true : false;

  const { contract } = useContract("0xcBD6701C3313aC76c529468957Fc2137484A4A51");
  const { data, isLoading, error } = useOwnedNFTs(contract, address);
  const metadata = data?.[0].metadata;

  console.log(metadata);


  return (
    <>
      <section id="nft" className="mt-24 px-4 text-center">
        <h1 className="my-8 text-6xl">Minted NFTs</h1>
        <p className="my-4 mx-auto max-w-prose text-lg leading-relaxed">
          {isConnected ? (`Connected wallet address: ${address}`): ("Connect wallet to view the minted NFTs:")}
        </p>
        {isConnected ? (
          <button className="py-2.5 px-5 mb-2.5 rounded-md font-semibold text-white bg-primary-500 hover:bg-primary-600" onClick={disconnect}>Disconnect</button>
        ) : (
          <button className="py-2.5 px-5 mb-2.5 rounded-md font-semibold bg-primary-500 text-white hover:bg-primary-600" onClick={() => connect()}>Connect</button>
        )}
      </section>
      <section id="nft-cards" className="flex flex-wrap md:place-content-between place-content-center sm:mx-auto max-w-5xl px-8 gap-8 py-8 pb-24">
        {!isLoading && (<div className="flex flex-col group hover:cursor-pointer">
          <MediaRenderer src={metadata?.animation_url} />
          <h3 className="my-2 mx-auto max-w-prose text-md leading-relaxed group-hover:text-green-500">{metadata?.name}</h3>
        </div>
        )}
      </section>
    </>
  );
};

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
};