const postcss = require('postcss');
const analyzeCustomProperties = require('./lib/analyze-custom-properties.js');

module.exports = postcss.plugin('postcss-analyze-custom-properties', cb => {
  return root => {
    const analysis = analyzeCustomProperties(root);
		cb({
      file: root.source.input.file,
      data: analysis
    });
  };
});
