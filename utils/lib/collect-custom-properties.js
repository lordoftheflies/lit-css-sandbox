const valueParser = require('postcss-values-parser');

// return custom selectors from the css root
module.exports = function collectCustomProperties(root) {
  // initialize custom selectors
  const customPropertiesFromHtmlElement = {};
  const customPropertiesFromRootPseudo = {};
  const customPropertiesFromShadowHost = {};

  // for each html or :root rule
  root.nodes.slice().forEach(rule => {
    const customPropertiesObject = isHtmlRule(rule)
      ? customPropertiesFromHtmlElement
      : isRootRule(rule)
        ? customPropertiesFromRootPseudo
        : isHostRule(rule)
          ? customPropertiesFromShadowHost
          : null;

    // for each custom property
    if (customPropertiesObject) {
      rule.nodes.slice().forEach(decl => {
        if (isCustomDecl(decl)) {
          const { prop } = decl;

          // write the parsed value to the custom property
          customPropertiesObject[prop] = valueParser(decl.value).parse().nodes;
        }
      });
    }
  });

  // return all custom properties
  return {
    ...customPropertiesFromShadowHost,
    ...customPropertiesFromHtmlElement,
    ...customPropertiesFromRootPseudo
  };
};

// match html, :root and :host rules
const htmlSelectorRegExp = /^html$/i;
const rootSelectorRegExp = /^:root$/i;
const hostSelectorRegExp = /^:host$/i;
const customPropertyRegExp = /^--[A-z][\w-]*$/;

// whether the node is an html, :root or :host rule
const isHtmlRule = node =>
  node.type === 'rule' &&
  htmlSelectorRegExp.test(node.selector) &&
  Object(node.nodes).length;
const isRootRule = node =>
  node.type === 'rule' &&
  rootSelectorRegExp.test(node.selector) &&
  Object(node.nodes).length;
const isHostRule = node =>
  node.type === 'rule' &&
  hostSelectorRegExp.test(node.selector) &&
  Object(node.nodes).length;

// whether the node is an custom property
const isCustomDecl = node =>
  node.type === 'decl' && customPropertyRegExp.test(node.prop);
