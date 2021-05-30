const withSvgr = require("next-svgr");

module.exports = withSvgr({
  future: {
    webpack5: true,
  },
  generateBuildId: async () => 'current',
});
