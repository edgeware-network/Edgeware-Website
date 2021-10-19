import * as React from 'react';

// Icons for the items
import IconWindow from 'remixicon/icons/Business/window-line.svg';
import IconExchange from 'remixicon/icons/Finance/exchange-line.svg';
import IconResume from 'remixicon/icons/System/shield-user-line.svg';
import IconToken from 'remixicon/icons/Finance/copper-coin-line.svg';
import IconChat from 'remixicon/icons/Communication/chat-1-line.svg';

import IconBank from 'remixicon/icons/Buildings/bank-line.svg';
import IconPost from 'remixicon/icons/Document/draft-line.svg';
import IconList from 'remixicon/icons/Document/file-list-3-line.svg';
import IconUser from 'remixicon/icons/User/open-arm-line.svg';

import IconGov from 'remixicon/icons/Buildings/government-line.svg';
import IconFunds from 'remixicon/icons/Finance/funds-line.svg';
import IconPaper from 'remixicon/icons/Document/file-list-line.svg';
import IconDiscord from 'remixicon/icons/Logos/discord-line.svg';
import IconBubbles from 'remixicon/icons/Business/bubble-chart-line.svg';

import IconTerminal from 'remixicon/icons/Development/terminal-window-line.svg';
import IconCommand from 'remixicon/icons/Development/command-line.svg';
import IconOrga from 'remixicon/icons/Editor/organization-chart.svg';
import IconStake from 'remixicon/icons/Finance/safe-line.svg';

import IconWallet from 'remixicon/icons/Finance/wallet-3-line.svg';

import IconSearch from 'remixicon/icons/System/search-line.svg';
import IconCompass from 'remixicon/icons/Map/compass-discover-line.svg';
import IconApps from 'remixicon/icons/System/apps-2-line.svg';
import IconYoutube from 'remixicon/icons/Logos/youtube-line.svg';
import IconNews from 'remixicon/icons/Document/newspaper-line.svg';
import IconArticle from 'remixicon/icons/Document/article-line.svg';
import IconDocs from 'remixicon/icons/Development/code-s-slash-line.svg';
import IconMarkets from 'remixicon/icons/Business/line-chart-line.svg';

import { H1 } from '../components/common/typography/typography';
import { Section } from '../components/common/section/section';
import { LinksList, LinkItem } from '../components/pages/get-started/links-list/links-list';
import { DevBanner } from '../components/pages/get-started/dev-banner/dev-banner';

const LINKS: Record<string, LinkItem[]> = {
  builders: [
    {
      label: 'Launch Your Dapp',
      icon: IconWindow,
      href: 'https://docs.edgeware.wiki/development/develop/smart-contracts',
    },
    {
      label: 'Mint a Token',
      icon: IconToken,
      href: 'https://docs.edgeware.wiki/development/develop/smart-contracts/evm-smart-contracts/tutorials/deploy-an-evm-contract/using-truffle',
    },
    {
      label: 'Integrate Exchange',
      icon: IconExchange,
      href: 'https://edgeware-a.slab.com/public/posts/yqrtzorf',
    },
    {
      label: 'List your Resume',
      icon: IconResume,
      href: 'https://commonwealth.im/edgeware/proposal/discussion/756-job-board',
    },
    { label: 'Builders Chat', icon: IconChat, href: 'https://t.me/edg_developers' },
  ],
  venture: [
    {
      label: 'Apply for Funding',
      icon: IconBank,
      href: 'https://commonwealth.im/edgeware/treasury',
    },
    {
      label: 'Post a Proposal',
      icon: IconPost,
      href: 'https://commonwealth.im/edgeware/proposals',
    },
    { label: 'View Proposals', icon: IconList, href: 'https://commonwealth.im/edgeware/proposals' },
    {
      label: 'Join Community',
      icon: IconUser,
      href: 'https://gov.edgewa.re/proposal/discussion/959--new-to-edgeware-start-here/',
    },
  ],
  holders: [
    { label: 'Governance', icon: IconGov, href: 'https:/gov.edgewa.re' },
    {
      label: 'Benefits',
      icon: IconFunds,
      href: 'https://gov.edgewa.re/proposal/discussion/1101-concept-edgpass-citizen-benefits',
    },
    {
      label: 'Whitepaper',
      icon: IconPaper,
      href: 'https://arena-attachments.s3.amazonaws.com/4643268/c8d128724f36b716660e4bf21823e760.pdf?1563310093',
    },
    { label: 'Discord', icon: IconDiscord, href: 'https://discord.gg/bkBctVs5F5' },
    { label: 'Collectives', icon: IconBubbles, href: '/collectives' },
  ],
  staking: [
    {
      label: 'Run a Validator',
      icon: IconTerminal,
      href: 'https://docs.edgeware.wiki/quickstart/set-up-a-validator',
    },
    { label: 'Infrastructure WG', icon: IconCommand, href: 'https://t.me/edgewareinfra' },
    {
      label: 'Nominate EDG',
      icon: IconOrga,
      href: 'https://docs.edgeware.wiki/edgeware-stack/staking/nominating',
    },
    {
      label: 'Stake EDG',
      icon: IconStake,
      href: 'https://docs.edgeware.wiki/edgeware-stack/staking/',
    },
  ],
  wallets: [
    {
      label: 'Edgeware Apps',
      icon: IconWallet,
      href: 'https://www.edgeware.app/?rpc=wss%3A%2F%2Fmainnet.edgewa.re#/',
    },
    {
      label: 'Polkadot Apps',
      icon: IconWallet,
      href: 'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fmainnet.edgewa.re#/',
    },
    {
      label: 'Ledger Wallet',
      icon: IconWallet,
      href: 'https://docs.edgeware.wiki/quickstart/ledger',
    },
    { label: 'Polkadot Extension', icon: IconWallet, href: 'https://polkadot.js.org/extension/' },
    {
      label: 'Four Wallet',
      icon: IconWallet,
      href: 'https://wiki.4thtech.io/intro/assets.html#wallet',
    },
    { label: 'Mathwallet', icon: IconWallet, href: 'https://mathwallet.org/' },
    { label: 'Polkawallet', icon: IconWallet, href: 'https://polkawallet.io/' },
    { label: 'Clover Wallet', icon: IconWallet, href: 'https://clover.finance/' },
  ],
  other: [
    { label: 'Subscan Explorer', icon: IconSearch, href: 'https://edgeware.subscan.io/' },
    { label: 'Commonwealth', icon: IconCompass, href: 'https://commonwealth.im/' },
    { label: 'Node Telemetry', icon: IconApps, href: 'https://telemetry.polkadot.io/' },
    { label: 'Dev Digest', icon: IconArticle, href: 'https://blog.edgewa.re/' },
    { label: 'Dev Docs', icon: IconDocs, href: 'https://docs.edgeware.wiki/' },
    { label: 'Cutting Edge News', icon: IconNews, href: 'https://blog.edgewa.re/' },
    {
      label: 'Video Tutorials',
      icon: IconYoutube,
      href: 'https://www.youtube.com/channel/UC7LAzthbMfggA28kE1fihaA',
    },
    {
      label: 'Markets',
      icon: IconMarkets,
      href: 'https://www.coingecko.com/en/coins/edgeware#markets',
    },
  ],
};

export default function GetStarted() {
  return (
    <>
      <Section id="intro" width="wide" gap="narrow">
        <H1 size="1" className="text-center">
          Get Started
        </H1>

        <LinksList headline="Builders" items={LINKS.builders} highlight />
        <DevBanner
          headline="Develop Edgeware Core"
          leadText="Join our core developers to help build the future of Edgeware"
          href="/jobs"
        />

        <LinksList headline="Venture & Funding" items={LINKS.venture} />
        <LinksList headline="Holders" items={LINKS.holders} />
        <LinksList headline="Staking" items={LINKS.staking} />
        <LinksList headline="Wallets" items={LINKS.wallets} />
        <LinksList headline="Other" items={LINKS.other} />
      </Section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: 'Get Started',
        description: '',
      },
    },
  };
}
