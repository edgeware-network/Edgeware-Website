type FooterLinksGroup = {
  headline: string;
  items: Record<string, string>;
};

export const footerLinks: FooterLinksGroup[] = [
  {
    headline: 'Ecosystem',
    items: {
      Mission: '/mission',
      Collectives: '/collectives',
      Partners: '/partners',
      Lockdrop: 'https://commonwealth.im/edgeware/stats',
      Press: '/press',
      'Swag Store': 'https://edgeware.store/#',
    },
  },
  {
    headline: 'Developers',
    items: {
      'Get started': '/developers',
      Documentation: 'https://docs.edgeware.wiki/',
      Validators: 'https://docs.edgeware.wiki/quickstart/set-up-a-validator',
      Whitepaper:
        'https://arena-attachments.s3.amazonaws.com/4643268/c8d128724f36b716660e4bf21823e760.pdf?1563310093',
      Keygen: '/keygen',
    },
  },
  {
    headline: 'Community',
    items: {
      Collectives: '/collectives',
      Commonwealth: 'https://commonwealth.im/',
      'Decent Partners': 'https://www.decent.partners/',
      'Edgeware Agency': 'https://edgeware.agency/',
      Jobs: '/jobs',
    },
  },
  {
    headline: 'Legal',
    items: {
      'Privacy Policy': '/privacy',
    },
  },
];
