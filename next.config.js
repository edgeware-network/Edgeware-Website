const withSvgr = require('next-svgr');

module.exports = withSvgr({
  reactStrictMode: false, // <- See https://github.com/tailwindlabs/headlessui/issues/681
  generateBuildId: async () => 'current',
  redirects: async () => {
    return [
      {
        source: '/partners',
        destination: '/ecosystem',
        permanent: true,
      },
      {
        source: '/collectives',
        destination: '/society',
        permanent: true,
      },
      {
        source: '/developers',
        destination: '/build',
        permanent: true,
      },
    ];
  },
});
