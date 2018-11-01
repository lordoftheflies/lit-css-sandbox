module.exports = function analyzeType(name, value = '') {
  if (
    name.includes('padding') ||
    name.includes('margin') ||
    name.includes('radius') ||
    name.includes('shadow') ||
    value.endsWith('px') ||
    value.endsWith('em') ||
    value.includes('px ') ||
    value.includes('em ')
  ) {
    return 'size';
  } else if (
    name.includes('color') ||
    value.startsWith('hsl') ||
    value.startsWith('#') ||
    value.startsWith('rgb')
  ) {
    return 'color';
  } else if (value.endsWith('ms')) {
    return 'duration';
  } else if (value.endsWith('00') || value == 'normal') {
    return 'font-weight';
  }

  return 'string';
};
