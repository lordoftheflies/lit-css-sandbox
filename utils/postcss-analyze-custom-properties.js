const postcss = require('postcss');
const analyzeCustomProperties = require('./lib/analyze-custom-properties.js');

module.exports = postcss.plugin('postcss-analyze-custom-properties', opts => {
  return root => {
    opts = opts || {};
    const customProperties = opts.customProperties || {};
    analyzeCustomProperties(root, customProperties);
  };
});
