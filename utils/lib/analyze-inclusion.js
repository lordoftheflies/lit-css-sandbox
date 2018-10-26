const parser = require('postcss-values-parser');

module.exports = function analyzeInclusion(root, customProperties) {
	const data = {};

  if (root.nodes && root.nodes.length) {
    root.nodes.slice().forEach(child => {

      if (child.nodes && child.nodes.length && isVarFunction(child.nodes[0])) {
				// eslint-disable-next-line no-unused-vars
				const [propertyNode, comma, ...fallbacks] = child.nodes[0].nodes.slice(1, -1);
				const { value: name } = propertyNode;

				data.name = name;

				if (fallbacks) {
          data.fallback = getFallback(fallbacks);

          // check if fallback value includes custom properties
          if (fallbacks.some(node => isVarFunction(node))) {
            data.computed = getComputed(fallbacks, customProperties);
            // TODO: process `calc()` and other complex cases recursively
          }
					// data.fallback = asClonedArrayWithBeforeSpacing(fallbacks, child.nodes[0].raws.before).toString();
					// TODO: calculate computed fallback value
				}
      } else {
				// TODO handle multiple values
      }
    });
  }

  return data;
};

// match var() functions
const varRegExp = /^var$/i;

// whether the node is a var() function
const isVarFunction = node =>
  node.type === 'func' &&
  varRegExp.test(node.value) &&
	Object(node.nodes).length > 0;

const getFallback = array => {
  return array.map(node => node.toString()).join('').trim();
}

function compute(prop, customProperties) {
  const value = customProperties[prop];
  // TODO process complex cases
  return ' ' + value;
}

const getComputed = (array, customProperties) => {
  return array.map(node => {
    if (isVarFunction(node)) {
      return compute(node.nodes[1].toString(), customProperties);
    } else {
      return node.toString();
    }
  }).join('').trim();
}
