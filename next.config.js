const withSvgr = require('next-svgr');

module.exports = withSvgr({
  reactStrictMode: false, // <- See https://github.com/tailwindlabs/headlessui/issues/681
  generateBuildId: async () => 'current',
});
