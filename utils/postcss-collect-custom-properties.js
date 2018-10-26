const postcss = require('postcss');
const collectCustomProperties = require('./lib/collect-custom-properties.js');

module.exports = postcss.plugin(
  'postcss-collect-custom-properties',
  callback => {
    return root => {
      const customProperties = collectCustomProperties(root);
      callback(customProperties);
    };
  }
);
