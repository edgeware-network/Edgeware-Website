import * as React from 'react';
import cn from 'classnames';

import styles from './timeline.module.scss';
import { TimelineItem, TimelineSeparator } from './timeline-item';
interface TimelineProps {
  upcoming?: boolean;
}

export const Timeline: React.FC<TimelineProps> = () => {
  return (
    <div className={styles.container}>
      <ol className={styles.timeline}>
        <li className={cn(styles.timelineItem, styles.timelineItemRight)}>
          <TimelineItem name="Edgeware Whitepaper Published" date="September 2019" isDone>
            After a conversation with Gavin Wood of Parity Technologies, Commonwealth Labs author a
            whitepaper outlining the Edgeware concept and 'the lockdrop' a unique decentralized
            launch process alongside a vision to be the first Substrate-based smart contract
            platform and a core chain in the upcoming Polkadot ecosystem.
          </TimelineItem>
        </li>
        <li className={cn(styles.timelineItem, styles.timelineItemLeft)}>
          <TimelineItem name="Lockdrop" date="June 2019" isDone>
            Commonwealth Labs deploys the master lockdrop contract to the Ethereum network, allowing
            ETH holders to time-lock their ETH in smart contracts, with EDG returned after either
            3/6/9 or 12 months. The process scores commitment higher for longer and larger locks and
            awards EDG proportional to that greater commitment. The lockdrop is a great success with
            a diverse mix of users locking up more than 200M USD in value.
          </TimelineItem>
        </li>
        <li className={cn(styles.timelineItem, styles.timelineItemRight)}>
          <TimelineItem name="Decentralised Network Launch" date="February 2020" isDone>
            Using the lockdrop proofs, the network launches in February of 2020 and EDG tokens
            become one of the most widely and fairly distributed in crypto history, with. well known
            names like Binance, Coinbase and Aragon and signaling participation on behalf of the ETH
            held by their users and organisations.
          </TimelineItem>
        </li>
        <li className={cn(styles.timelineItem, styles.timelineItemLeft)}>
          <TimelineItem name="Ink! Contracts Live on Edgeware" date="March 2020" isDone>
            The cutting edge WASM contract module is activated in March, allowing users to write
            contracts in Rust that take advantage of cheaper deployment and more efficient contract
            storage within Edgeware.
          </TimelineItem>
        </li>
        <li className={cn(styles.timelineItem, styles.timelineItemRight)}>
          <TimelineItem name="Emerging Organisational Structures" date="October 2020" isDone>
            With the help of a healthy treasury supporting continued innovation, a connection to Commonwealth's evolving community governance interface, alongside multi-signature wallets, a number of DAOs are emerging that focus on a range of areas. Funding and responsibility are delegated to groups such as the Edgeware Agency (which delivered this website) and the Builders Guild. A new generation of more ambitious Ecosystem DAOs are also close to launch led by Decent Partners and BuilDAO.
          </TimelineItem>
        </li>

        <li className={cn(styles.timelineItem, styles.timelineItemLeft)}>
          <TimelineItem name="EVM Contracts Launch on Edgeware" date="March 2021" isDone>
            The launch of Parity Frontier in Edgeware brings the ability to launch virtually
            unmodified smart contracts from the Ethereum network on Edgeware, opening up the
            Polkadot ecosystem for hundreds of popular dapps and thousands of developers.
          </TimelineItem>
        </li>

        <li className={cn(styles.timelineItemSeparator)}>
          <TimelineSeparator>Coming soon</TimelineSeparator>
        </li>

        <li className={cn(styles.timelineItem, styles.timelineItemRight)}>
          <TimelineItem name="The Edgeware Canary network launches" date="TBD">
            Canary networks are the new and value bearing testnet concept pioneered by Kusama. This
            approach helps Edgeware test and incentivize development on the mainnet. Edgeware’s
            canary network is proposed to bond to the Kusama relaychain when KSM opens slot
            auctions.
          </TimelineItem>
        </li>
        <li className={cn(styles.timelineItem, styles.timelineItemLeft)}>
          <TimelineItem name="Edgeware bonds for a Polkadot Parachain Slot" date="TBD">
            Edgeware’s core proposal of a cutting edge smart contract platform on Polkadot will be
            realized when the bidding is complete and DOT holders support Edgeware in their auction
            participation. Interoperability with other parachains like Acala, Paralink, Ocean and
            more will be available and the daily costs of securing the network in nPoS will decrease
            through the shared security benefits of Polkadot, allowing Edgeware's existing monetary
            inflation to drop.
          </TimelineItem>
        </li>
        <li className={cn(styles.timelineItem, styles.timelineItemRight)}>
          <TimelineItem name="Edgeware Bridges to Ethereum" date="TBD">
            Demand to bridge assets in Ethereum or wrap EDG on ETH open up a world of use-cases for
            Edgeware. Teams like Chainsafe and other technologies are being developed to create the
            first bridge to crypto’s original smart contract platform, while giving EDG users access
            to the dapp ecosystem on ETH.
          </TimelineItem>
        </li>
      </ol>
    </div>
  );
};
