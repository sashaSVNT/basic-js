const { NotImplementedError } = require('../extensions/index.js');


function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const firstChars = s1.split('');
  for (let i = 0; i < s2.length; i++) {
    let charOfSecondString = s2[i];
    let charIndex = firstChars.indexOf(charOfSecondString);
    if (charIndex !== -1) {
      count++;
      firstChars.splice(charIndex, 1)
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
