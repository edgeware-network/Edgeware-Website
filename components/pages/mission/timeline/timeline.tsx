import * as React from 'react';
import cn from 'classnames';

import styles from './timeline.module.scss';
import { TimelineItem, TimelineSeparator } from './timeline-item';

const isEven = (i) => i % 2 === 0;

interface TimelineProps {
  upcoming?: boolean;
}

export const Timeline: React.FC<TimelineProps> = ({ children, upcoming = false }) => {
  return (
    <div className={styles.container}>
      <ol className={styles.timeline}>
        <li className={cn(styles.timelineItem, styles.timelineItemRight)}>
          <TimelineItem name="Edgeware Whitepaper Published" date="September 2019" isDone>
            Commonwealth Labs, after a conversation with Gavin Wood of Parity Technologies, decides
            to author a whitepaper outlining the Edgeware concept and unique decentralized launch
            process, the Lockdrop, with a vision to be the first Substrate-based smart contract
            platform and a core feature of the upcoming Polkadot ecosystem.
          </TimelineItem>
        </li>
        <li className={cn(styles.timelineItem, styles.timelineItemLeft)}>
          <TimelineItem name="Lockdrop" date="June 2020" isDone>
            Commonwealth Labs deploys the master lockdrop contract to the Ethereum network, allowing
            ETH holders to time lock their ETH in instances of locking contracts, serving as their
            ticket to the EDG world. The process scores longer and larger locks as more committed,
            and supports awarding EDG proportional to that greater commitment. The lockdrop is a
            wild success with curious users locking up more than 200M USD in value.
          </TimelineItem>
        </li>
        <li className={cn(styles.timelineItem, styles.timelineItemRight)}>
          <TimelineItem name="Decentralized Network Launch" date="February 2020" isDone>
            Using the lockdrop proofs, the network launches in February of 2020 and EDG tokens
            become one of the most widely and fairly distributed in crypto history, with names like
            Aragon, Binance and more signaling participation on behalf of their users and
            organization.
          </TimelineItem>
        </li>
        <li className={cn(styles.timelineItem, styles.timelineItemLeft)}>
          <TimelineItem name="Ink! Contracts Live on Edgeware" date="March 2020" isDone>
            The cutting edge wasm contract module comes alive in March, allowing users to write
            contracts in Rust that take advantage of cheaper deployment and more efficient contract
            storage within Edgeware.
          </TimelineItem>
        </li>
        <li className={cn(styles.timelineItem, styles.timelineItemRight)}>
          <TimelineItem name="EVM Contracts Launch on Edgeware" date="March 2021" isDone>
            The launch of Parity Frontier in Edgeware brings the ability to launch virtually
            unmodified smart contracts from the Ethereum network on Edgeware, opening up the
            Polkadot ecosystem for hundreds of popular dapps and thousands of developers.
          </TimelineItem>
        </li>
        <li className={cn(styles.timelineItemSeparator)}>
          <TimelineSeparator>Coming soon</TimelineSeparator>
        </li>
        <li className={cn(styles.timelineItem, styles.timelineItemLeft)}>
          <TimelineItem name="The Edgeware Canarynetwork launches" date="TBD">
            Canarynetworks, the new and value bearing testnet concept pioneered by Kusama, help
            Edgeware test and incentivize development on the mainnet. Edgeware’s canarynetwork is
            proposed to bond to the Kusama relaychain when KSM opens slot auctions.
          </TimelineItem>
        </li>
        <li className={cn(styles.timelineItem, styles.timelineItemRight)}>
          <TimelineItem name="Edgeware bonds for a Polkadot Parachain Slot" date="TBD">
            Edgeware’s core proposal of a cutting edge smart contract platform in Polkadot will be
            realized when the bidding is complete and DOT holders support Edgeware in their auction
            participation. Interoperability with other parachains like Acala, Paralink, Ocean and
            more will be available and the daily costs of securing the network in nPoS will decrease
            through the shared security benefits of Polkadot, allowing inflation to drop.
          </TimelineItem>
        </li>
        <li className={cn(styles.timelineItem, styles.timelineItemLeft)}>
          <TimelineItem name="Edgeware Bridges to Ethereum" date="TBD">
            Demand to bridge assets in Ethereum or wrap EDG on ETH open up a world of use-cases for
            Edgeware, teams like Chainsafe and other technologies are being developed to create the
            first bridge to crypto’s original smart contract platform, while giving EDG users access
            to the dapp ecosystem on ETH.
          </TimelineItem>
        </li>
      </ol>
    </div>
  );
};
