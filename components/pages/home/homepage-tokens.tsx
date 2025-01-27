const EXCHANGES = {
  'Gate.io': 'https://www.gate.io/trade/EDG_USDT',
  Bittrex: 'https://global.bittrex.com/Market/Index?MarketName=USDT-EDG',
  Kucoin: 'https://www.kucoin.com/trade/EDG-USDT',
  HotBit: 'https://www.hotbit.io/exchange?symbol=EDG_USDT',
  'MEXC Global': 'https://www.mexc.com/exchange/EDG_USDT',
};

const WALLETS = {
  'Edge Apps': 'https://edgeware.app/',
  Ledger: 'https://support.ledger.com/hc/en-us/articles/4409811412625-Edgeware-EDG-?docs=true',
  'NOVA Wallet': 'https://novawallet.io/',
  'Polkadot Apps': 'https://polkadot.js.org/apps/#/',
  'Math Wallet': 'https://mathwallet.org/en-us/',
};

export const HomepageTokens = () => {
  return (
    <section id="get-edg-tokens">
      <div className="bg-[url('/images/home/token/buy-edg-bg@2x.png')] bg-cover bg-center">
        <div className="h-8 bg-gradient-to-t from-transparent to-grey-900 md:h-16 lg:h-32" />

        {/* Intro */}
        <div className="container mx-auto max-w-xl px-4 text-center">
          <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">Get EDG Tokens</h2>
          <p className="my-4">Edgeware tokens are available in the following exchanges</p>
        </div>

        {/* exchanges */}
        <div className="container mx-auto max-w-6xl">
          <ul className="m-8 flex flex-col justify-between space-y-4 md:flex-row md:space-x-4 md:space-y-0">
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

        <div className="h-8 bg-gradient-to-b from-transparent to-grey-900 md:h-16 lg:h-32" />
      </div>
    </section>
  );
};

type HomepageTokenWalletsProps = {
  className?: string;
};

export const HomepageTokenWallets = ({ className }: HomepageTokenWalletsProps) => {
  return (
    <div className={className ? className : 'container mx-auto my-24 max-w-6xl px-4'}>
      <div className="mx-auto max-w-4xl rounded-lg border border-green-500 bg-grey-900/70 p-8 text-center">
        <h3 className="text-2xl">Wallets to store your EDG</h3>
        <ul className="my-8 flex flex-col items-center justify-between space-y-4 md:mx-8 md:flex-row md:space-x-4 md:space-y-0 lg:mx-16">
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
