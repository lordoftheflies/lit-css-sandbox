module.exports = function analyzeValue(root) {
  const data = {};

  if (root.nodes && root.nodes.length) {
    root.nodes.slice().forEach(child => {
      if (child.nodes && child.nodes.length && isVarFunction(child.nodes[0])) {
        // eslint-disable-next-line no-unused-vars
        const [propertyNode, comma, ...fallbacks] = child.nodes[0].nodes.slice(
          1,
          -1
        );
        const { value: name } = propertyNode;

        if (fallbacks) {
          data.name = name;
          data.value = getValue(fallbacks);
        }
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

const getValue = array => {
  return array
    .map(node => node.toString())
    .join('')
    .trim();
};
