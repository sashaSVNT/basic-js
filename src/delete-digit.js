const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let digits = String(n);
  let maxDigit = 0;
  for (let i = 0; i < digits.length; i++) {
    let currentNumber = parseInt(digits.slice(0, i) + digits.slice(i + 1));
    if (currentNumber > maxDigit) {
      maxDigit = currentNumber;
    }
  }
  return maxDigit;
}

module.exports = {
  deleteDigit
};
