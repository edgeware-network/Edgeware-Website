import { useState, useEffect } from 'react';
import ConnectWallet from '@thirdweb-dev/react';

export default function NFTPage() {
  const [connectedWallet, setConnectedWallet] = useState(null);
  const [userNFTs, setUserNFTs] = useState([]);

  useEffect(() => {
    const fetchUserNFTs = async () => {
      if (connectedWallet) {
        try {
          const userNFTsResponse = await ConnectWallet.getUserNFTs(connectedWallet);
          setUserNFTs(userNFTsResponse);
        } catch (error) {
          console.error('Error fetching user NFTs:', error);
        }
      }
    };

    fetchUserNFTs();
  }, [connectedWallet]);

  const connectWallet = async () => {
    try {
      const wallet = await ConnectWallet.connect();
      setConnectedWallet(wallet);
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  return (
    <section id="nft-section" className="py-8 pb-24 text-center">
      <div className="my-4 mx-auto flex max-w-4xl flex-col gap-4 rounded-lg border-2 border-grey-700 border-opacity-50 bg-grey-800 bg-opacity-30 p-5">
        <h2 className="text-2xl font-bold mb-4">Connected Wallet and NFTs</h2>
        {connectedWallet ? (
          <>
            <p className="leading-relaxed">
              Wallet Address: {connectedWallet.address}
            </p>
            <p className="leading-relaxed">
              Total NFTs: {userNFTs.length}
            </p>
            <div>
              <h3 className="text-lg font-bold">Your NFTs:</h3>
              <ul>
                {userNFTs.map((nft, index) => (
                  <li key={index}>{nft.name}</li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <p className="leading-relaxed">
            Connect your wallet to view NFTs:
            <button
              className="hover:text-blue-600 ml-2 rounded-lg bg-primary-500 px-4 py-1 text-white"
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          </p>
        )}
      </div>
    </section>
  );
}
