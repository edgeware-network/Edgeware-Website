import * as React from 'react';

import IconBank from 'remixicon/icons/Buildings/bank-line.svg';
import IconPost from 'remixicon/icons/Document/draft-line.svg';
import IconList from 'remixicon/icons/Document/file-list-3-line.svg';
import IconUser from 'remixicon/icons/User/open-arm-line.svg';

import IconGov from 'remixicon/icons/Buildings/government-line.svg';
import IconPaper from 'remixicon/icons/Document/file-list-line.svg';
import IconDiscord from 'remixicon/icons/Logos/discord-line.svg';
// import IconBubbles from 'remixicon/icons/Business/bubble-chart-line.svg';
import IconTools from 'remixicon/icons/Design/tools-line.svg';

import IconTerminal from 'remixicon/icons/Development/terminal-window-line.svg';
import IconCommand from 'remixicon/icons/Development/command-line.svg';
import IconOrganizationChart from 'remixicon/icons/Editor/organization-chart.svg';
import IconStake from 'remixicon/icons/Finance/safe-line.svg';

import IconWallet from 'remixicon/icons/Finance/wallet-3-line.svg';

import IconSearch from 'remixicon/icons/System/search-line.svg';
import IconCompass from 'remixicon/icons/Map/compass-discover-line.svg';
import IconApps from 'remixicon/icons/System/apps-2-line.svg';
import IconYouTube from 'remixicon/icons/Logos/youtube-line.svg';
import IconNews from 'remixicon/icons/Document/newspaper-line.svg';
import IconArticle from 'remixicon/icons/Document/article-line.svg';
import IconDocs from 'remixicon/icons/Development/code-s-slash-line.svg';
import IconMarkets from 'remixicon/icons/Business/line-chart-line.svg';
import IconShakeHands from 'remixicon/icons/Business/ri-shake-hands-line.svg';

import { LinksList } from '../components/pages/get-started/links-list';
import type { LinkItem } from '../components/pages/get-started/links-list';

const LINKS: Record<string, LinkItem[]> = {
  holders: [
    { label: 'Governance', icon: IconGov, href: 'https://gov.edgewa.re' },
    {
      label: 'EdgeApps',
      icon: IconWallet,
      href: 'https://www.edgeware.app/?rpc=wss%3A%2F%2Fedgeware.jelliedowl.net#/',
    },
    {
      label: 'Whitepaper',
      icon: IconPaper,
      href: '/assets/whitepaper/edgeware-whitepaper.pdf',
    },
    { label: 'Tools', icon: IconTools, href: '/tools' },
    { label: 'Contributors Support Program', icon: IconShakeHands, href: '/csp' },
  ],

  wallets: [
    {
      label: 'EdgeApps',
      icon: IconWallet,
      href: 'https://www.edgeware.app/?rpc=wss%3A%2F%2Fmainnet.edgewa.re#/',
    },
    {
      label: 'PolkadotApps',
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
      label: '4THTECH Wallet',
      icon: IconWallet,
      href: 'https://wiki.4thtech.io/intro/assets.html#wallet',
    },
    { label: 'Nova Wallet', icon: IconWallet, href: 'https://novawallet.io/' },
    { label: 'Math Wallet', icon: IconWallet, href: 'https://mathwallet.org/' },
    { label: 'Polkawallet', icon: IconWallet, href: 'https://polkawallet.io/' },
    { label: 'Clover Wallet', icon: IconWallet, href: 'https://clover.finance/' },
  ],

  explorers: [
    { label: 'Subscan Explorer', icon: IconSearch, href: 'https://edgeware.subscan.io/' },
    { label: 'EdgeEVM Explorer', icon: IconSearch, href: 'https://edgscan.live/' },
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
      icon: IconOrganizationChart,
      href: 'https://docs.edgeware.wiki/edgeware-stack/staking/nominating',
    },
    {
      label: 'Stake EDG',
      icon: IconStake,
      href: 'https://docs.edgeware.wiki/edgeware-stack/staking/',
    },
  ],

  venture: [
    {
      label: 'Apply for Funding',
      icon: IconBank,
      href: 'https://gov.edgewa.re/treasury',
    },
    {
      label: 'Post a Proposal',
      icon: IconPost,
      href: 'https://gov.edgewa.re/proposals',
    },
    { label: 'View Proposals', icon: IconList, href: 'https://gov.edgewa.re/proposals' },
    {
      label: 'Join Community',
      icon: IconUser,
      href: 'https://gov.edgewa.re/proposal/discussion/959--new-to-edgeware-start-here/',
    },
  ],

  other: [
    {
      label: 'Markets',
      icon: IconMarkets,
      href: 'https://www.coingecko.com/en/coins/edgeware#markets',
    },
    {
      label: 'Video Tutorials',
      icon: IconYouTube,
      href: 'https://www.youtube.com/channel/UC7LAzthbMfggA28kE1fihaA',
    },
    { label: 'Cutting Edge News', icon: IconNews, href: 'https://blog.edgewa.re/tag/weekly/' },
    { label: 'Dev Digest', icon: IconArticle, href: 'https://blog.edgewa.re/tag/weekly/' },
    { label: 'Dev Docs', icon: IconDocs, href: 'https://docs.edgeware.wiki/' },
    { label: 'Commonwealth', icon: IconCompass, href: 'https://commonwealth.im/edgeware' },
    {
      label: 'Node Telemetry',
      icon: IconApps,
      href: 'https://telemetry.polkadot.io/#list/0x742a2ca70c2fda6cee4f8df98d64c4c670a052d9568058982dad9d5a7a135c5b',
    },
  ],
};

export default function GetStarted() {
  return (
    <section id="get-started" className="container mx-auto my-24 max-w-7xl px-4">
      <h1 className="text-center text-6xl">Get Started</h1>

      <LinksList headline="Holders" items={LINKS.holders} highlight />
      <LinksList headline="Wallets" items={LINKS.wallets} />
      <LinksList headline="Explorers" items={LINKS.explorers} />
      <LinksList headline="Staking" items={LINKS.staking} />
      <LinksList headline="Venture &amp; Funding" items={LINKS.venture} />
      <LinksList headline="Other" items={LINKS.other} />
    </section>
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
