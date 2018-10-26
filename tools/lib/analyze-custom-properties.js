const parser = require('postcss-values-parser');
const analyzeValue = require('./analyze-value.js');
const analyzeType = require('./analyze-type.js');

module.exports = function analyzeCustomProperties(root) {
  const result = [];

  // walk decls that can be transformed
  root.walkDecls(decl => {
    if (isTransformableDecl(decl)) {
      const { prop, value: originalValue } = decl;

      const valueAST = parser(originalValue).parse();

      const { name, value } = analyzeValue(valueAST);

      const type = analyzeType(prop, value);

      result.push({ name, type, value });
    }
  });

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
