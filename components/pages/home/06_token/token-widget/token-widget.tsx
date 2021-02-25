import * as React from 'react';
import cn from 'classnames';
import { useQuery } from 'react-query';

import TokenSvg from '../../../../../public/images/logo/edg-token.svg';
import CoingGeckoSvg from '../../../../../public/images/home/token/coingecko-logo.svg';
import styles from './token-widget.module.scss';

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

export const TokenWidget: React.FC = () => {
  const { data } = useQuery('edgewareToken', fetchToken);

  return (
    <div className={styles.tokenBox}>
      <div className={styles.tokenLogo}>
        <TokenSvg />
      </div>
      <div className={styles.marketInfo}>
        <span className={styles.marketInfoLabel}>Current market price</span>
        <strong className={styles.marketInfoValue}>
          {data?.edgeware?.usd ? `$${data.edgeware.usd.toPrecision(3)} = 1 EDG` : 'Loading...'}
        </strong>
      </div>
      <div className={styles.marketInfo}>
        <span className={cn(styles.marketInfoLabel, styles.marketInfoLabelBorder)}>Market cap</span>
        <strong className={styles.marketInfoValue}>
          {data?.edgeware?.usd_market_cap ? `${formatCurrency(data.edgeware.usd_market_cap)}` : ''}
        </strong>
      </div>
      <div className={styles.tokenInfo}>
        <span className={styles.coingeckoLogo}>
          <img src="/images/home/token/coingecko-logo.png" alt="CoinGecko" />
        </span>
        Live prices from CoinGecko
      </div>
    </div>
  );
};
