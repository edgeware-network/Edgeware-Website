const EXCHANGES = {
  'Gate.io': 'https://www.gate.io/trade/EDG_USDT',
  Bittrex: 'https://global.bittrex.com/Market/Index?MarketName=USDT-EDG',
  Kucoin: 'https://www.kucoin.com/trade/EDG-USDT',
  HotBit: 'https://www.hotbit.io/exchange?symbol=EDG_USDT',
  'MEXC Global': 'https://www.mexc.com/exchange/EDG_USDT',
};

const WALLETS = {
  'NOVA Wallet': 'https://novawallet.io/',
  'Polkadot Apps': 'https://polkadot.js.org/apps/#/',
  'Math Wallet': 'https://mathwallet.org/en-us/',
  'Edgeware App': 'https://edgeware.app/',
};

export const HomepageTokens = () => {
  return (
    <section id="buy-edg-tokens">
      <div className="bg-[url('/images/home/token/buy-edg-bg@2x.png')] bg-cover bg-center">
        <div className="h-32 bg-gradient-to-t from-transparent to-grey-900" />

        {/* Intro */}
        <div className="container mx-auto max-w-xl text-center">
          <h2 className="text-5xl font-medium">Buy EDG Tokens</h2>
          <p className="my-4">Edgeware tokens are available in the following exchanges</p>
        </div>

        {/* exchanges */}
        <div className="container mx-auto max-w-6xl">
          <ul className="m-8 flex flex-row justify-between">
            {Object.entries(EXCHANGES).map(([name, url]) => (
              <li key={name} className="flex flex-col items-center">
                <a href={url} target="_blank" rel="noopener noreferrer" className="block">
                  <img
                    src={`/images/exchanges/${name.toLowerCase().replace(/[\s.]/g, '-')}@3x.png`}
                    alt={name}
                    className="h-8 transition-transform duration-100 hover:scale-125"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* wallets */}
        <HomepageTokenWallets />

        <div className="h-32 bg-gradient-to-b from-transparent to-grey-900" />
      </div>
    </section>
  );
};

type HomepageTokenWalletsProps = {
  className?: string;
};

export const HomepageTokenWallets = ({ className }: HomepageTokenWalletsProps) => {
  return (
    <div className={className ? className : 'container mx-auto my-24 max-w-6xl'}>
      <div className="mx-auto max-w-4xl rounded-lg border border-green-500 bg-grey-900/70 p-8 text-center">
        <h3 className="text-2xl">Wallets to store your EDG</h3>
        <ul className="my-8 mx-16 flex flex-row items-center justify-between">
          {Object.entries(WALLETS).map(([name, url]) => (
            <li key={name} className="flex flex-col items-center">
              <a href={url} target="_blank" rel="noopener noreferrer" className="block">
                <img
                  src={`/images/wallets/${name.toLowerCase().replace(/[\s.]/g, '-')}@3x.png`}
                  alt={name}
                  className="h-12 transition-transform duration-100 hover:scale-125"
                />
              </a>
            </li>
          ))}
        </ul>

        <p className="text-grey-300">More wallets coming soon</p>
      </div>
    </div>
  );
};
