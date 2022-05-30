import * as React from 'react';
import { useQuery } from 'react-query';

import TokenSvg from '../../../public/images/logo/edg-token.svg';

const fetchToken = () => {
  const url =
    'https://api.coingecko.com/api/v3/simple/price?ids=edgeware&vs_currencies=usd&include_market_cap=true';
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetch(url, options).then((res) => res.json());
};

const formatCurrency = (number: number) => {
  const options = {
    style: 'currency',
    currency: 'USD',
  };

  return new Intl.NumberFormat(undefined, options).format(number).slice(0, -3).replace('US$', '$');
};

export const HomepageEconomicsTokenWidget: React.FC = () => {
  const { data } = useQuery('edgewareToken', fetchToken);

  return (
    <div className="rounded-md border border-white/10 bg-grey-900/10 p-4 lg:p-8">
      <div className="mb-4 h-16 w-16 rounded-full border-4 border-white p-2">
        <TokenSvg className="h-10 w-10 text-primary-500" />
      </div>
      <div className="divide-y divide-primary-500">
        <div className="flex flex-col">
          <span className="text-sm text-white">Current market price</span>
          <strong className="text-xl font-medium text-white md:text-2xl lg:text-3xl">
            {data?.edgeware?.usd ? `$${data.edgeware.usd.toPrecision(3)} = 1 EDG` : 'Loading...'}
          </strong>
        </div>

        <div className="mt-4 flex flex-col pt-4">
          <span className="text-sm text-white">Market cap</span>
          <strong className="text-xl font-medium text-white md:text-2xl lg:text-3xl">
            {data?.edgeware?.usd_market_cap
              ? `${formatCurrency(data.edgeware.usd_market_cap)}`
              : ''}
          </strong>
        </div>

        <div className="mt-4 flex flex-col pt-4">
          <span className="text-sm text-white">Treasury Balance</span>
          <strong className="text-xl font-medium text-white md:text-2xl lg:text-3xl">
            662.8424 MEDG
          </strong>
        </div>
      </div>
    </div>
  );
};
