const { NotImplementedError } = require('../extensions/index.js');


function repeater(str, options) {
  const string = String(str);
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = options.addition !== undefined ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  let newString = '';
  for (let i = 0; i < repeatTimes; i++) {
    newString += string;
    for (let j = 0; j < additionRepeatTimes; j++) {
      newString += addition;
      if (j < additionRepeatTimes - 1) {
        newString += additionSeparator;
      }
    }
    if (i < repeatTimes - 1) {
      newString += separator;
    }
  }
  return newString;
}
module.exports = {
  repeater
};
