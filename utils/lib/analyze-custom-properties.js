const parser = require('postcss-values-parser');
const analyzeInclusion = require('./analyze-inclusion.js');

module.exports = function analyzeCustomProperties(root, customProperties) {
  const result = [];

  // walk decls that can be transformed
  root.walkDecls(decl => {
    if (isTransformableDecl(decl)) {
      const { prop, value } = decl;

      const valueAST = parser(value).parse();

      const { name, fallback, computed } = analyzeInclusion(valueAST, customProperties);

      const data = { prop, name, fallback };

      if (computed) {
        Object.assign(data, {computed});
      }

      result.push(data);
    }
  });

  console.log(result);

  return result;
};

// match custom properties
const customPropertyRegExp = /^--[A-z][\w-]*$/;

// match custom property inclusions
const customPropertiesRegExp = /(^|[^\w-])var\([\W\w]+\)/;

// whether the declaration should be potentially transformed
const isTransformableDecl = decl =>
  !customPropertyRegExp.test(decl.prop) &&
  customPropertiesRegExp.test(decl.value);
