type FooterLinksGroup = {
  headline: string;
  items: Record<string, string>;
};

export const footerLinks: FooterLinksGroup[] = [
  {
    headline: 'Community',
    items: {
      Interface: 'https://www.edgeware.app/?rpc=wss%3A%2F%2Fmainnet.edgewa.re#/explorer',
      Governance: 'https://gov.edgewa.re/',
      Discord: 'https://discord.gg/4pnzjWTJ9b',
      Society: '/society',
      Press: '/press',
      Blog: 'https://blog.edgewa.re/',
    },
  },
  {
    headline: 'Developers',
    items: {
      Build: '/build',
      'Block Explorer': 'https://edgeware.subscan.io/',
      Github: 'https://github.com/edgeware-network',
      Documentation: 'https://docs.edgeware.wiki/',
      Validators: 'https://docs.edgeware.wiki/quickstart/set-up-a-validator',
      Tools: '/tools',
    },
  },
  {
    headline: 'Decentralization',
    items: {
      Whitepaper: '/assets/whitepaper/edgeware-whitepaper.pdf',
      Lockdrop:
        'https://gov.edgewa.re/discussion/102-examining-the-edgeware-lockdrop-gini-coefficients-and-successes',
      Democracy: 'https://docs.edgeware.wiki/edgeware-stack/governance/',
      'Decent Partners': 'https://www.decent.partners/',
      Ecosystem: '/ecosystem',
    },
  },
  {
    headline: 'Legal',
    items: {
      'Privacy Policy': '/privacy',
    },
  },
];
