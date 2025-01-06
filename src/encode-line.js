const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  const symbols = str.split('');
  symbols.reduce((acc, cur, index) => {
    acc += cur;
    if (cur !== symbols[index + 1]) {
      result += acc.length > 1 ? acc.length + cur : cur;
      acc = '';
    }
    return acc;
  }, '');
  return result;
}

module.exports = {
  encodeLine
};
