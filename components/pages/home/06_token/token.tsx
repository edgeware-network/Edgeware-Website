import * as React from 'react';

import { H2, P } from '../../../common/typography/typography';
import { TokenDistribution } from './token-distribution/token-distribution';
import { TokenWidget } from './token-widget/token-widget';
import { HeaderAndTextList, HeaderAndText } from '../../../common/header-and-text/header-and-text';

import styles from './token.module.scss';
import { TokenWallet } from './token-wallet/token-wallet';

export const Token: React.FC = ({ children }) => {
  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className={styles.textContent}>{children}</div>
            </div>
            <div className="col-lg-5 col-xl-4 offset-lg-1 offset-xl-2 order-1 order-lg-2">
              <TokenWidget />
            </div>
          </div>

          <HeaderAndTextList>
            <HeaderAndText headline="GAS">
              EDG is used to pay for transaction fees and contract rental.
            </HeaderAndText>
            <HeaderAndText headline="Voting power">
              Token holders can use their tokens to vote on decisions in the network.
            </HeaderAndText>
            <HeaderAndText headline="Funding development">
              A proportion of EDG tokens are pooled into the projects native treasury.
            </HeaderAndText>
            <HeaderAndText headline="Staking rewards">
              By locking up tokens as a validator or by nominating, holders receive rewards.
            </HeaderAndText>
          </HeaderAndTextList>

          <TokenDistribution>
            <H2>EDG Token Distribution</H2>
            <P>
              Edgeware has one of the widest and fairest distributions in all of the cryptocurrencies market.
            </P>
          </TokenDistribution>
        </div>
        <div className={styles.narrowContainer}>
          <TokenWallet headline="Open a wallet to store your EDG on" />
        </div>
      </div>
    </div>
  );
};
