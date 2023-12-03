import {
  useAddress,
  useDisconnect,
  useConnectionStatus,
  useMetamask,
  MediaRenderer,
} from '@thirdweb-dev/react';
import { Fragment, useEffect, useState } from 'react';

export default function NftsPage() {
  interface metadata {
    name: string;
    url: string;
  }
  const connectionStatus = useConnectionStatus();
  const address = useAddress();
  const connect = useMetamask();
  const disconnect = useDisconnect();
  const isConnected = connectionStatus === 'connected' ? true : false;
  const [metadata, setMetadata] = useState<metadata[]>([]);
  const result = [];

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://evm.edgscan.ink/api/v2/addresses/${address}/tokens?type=ERC-721`
      );

      const nfts = await res.json();
      const items = nfts.items;
      console.log(items);
      if (items.length > 0) {
        for await (const nft of items) {
          const response = await fetch(
            `https://evm.edgscan.ink/api/v2/tokens/${nft.token.address}/instances`
          );

          const token = await response.json();

          const final = token.items
            .filter((item: any) => {
              return item.owner.hash == address;
            })
            .map((item: any) => {
              return { name: item.metadata.name, url: item.image_url };
            });

          console.log('Final', final);
          result.push(final[0]);
        }
      }
      console.log('result', result);
      setMetadata([...metadata, ...result]);
    })();
    (async () => {
      const res = await fetch(
        `https://evm.edgscan.ink/api/v2/addresses/${address}/tokens?type=ERC-1155`
      );

      const nfts = await res.json();
      const items = nfts.items;
      console.log(items);
      if (items.length > 0) {
        for await (const nft of items) {
          const token = {
            name: nft.token_instance.metadata.name,
            url: nft.token_instance.metadata.animation_url,
          };
          result.push(token);
        }
      }
    })();
  }, []);

  return (
    <>
      <section id="nft" className="mt-24 px-4 text-center">
        <h1 className="my-8 text-6xl">Minted NFTs</h1>
        <p className="my-4 mx-auto max-w-prose text-lg leading-relaxed">
          {isConnected
            ? `Connected wallet address: ${address}`
            : 'Connect wallet to view the minted NFTs:'}
        </p>
        {isConnected ? (
          <button
            className="mb-2.5 rounded-md bg-primary-500 py-2.5 px-5 font-semibold text-white hover:bg-primary-600"
            onClick={disconnect}
          >
            Disconnect
          </button>
        ) : (
          <button
            className="mb-2.5 rounded-md bg-primary-500 py-2.5 px-5 font-semibold text-white hover:bg-primary-600"
            onClick={() => connect()}
          >
            Connect
          </button>
        )}
      </section>
      <section
        id="nft-cards"
        className="flex max-w-5xl flex-wrap place-content-center gap-8 px-8 py-8 pb-24 sm:mx-auto md:place-content-between"
      >
        {metadata.map((nft, index) => (
          <Fragment key={index}>
            <div className="group flex flex-col rounded-2xl border-2 border-[#656565] p-1 hover:cursor-pointer">
              <MediaRenderer src={nft.url} className="rounded-xl" />
              <h3 className="text-md my-2 mx-auto max-w-prose leading-relaxed group-hover:text-green-500">
                {nft?.name}
              </h3>
            </div>
          </Fragment>
        ))}
      </section>
    </>
  );
}
