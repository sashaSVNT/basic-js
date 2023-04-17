const { NotImplementedError } = require('../extensions/index.js');

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        if (result.length > 0) {
          result.pop();
        }
        break;
      case '--double-next':
        if (i + 1 < arr.length) {
          result.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        if (i - 1 >= 0 && arr[i - 2] !== '--discard-next') {
          result.push(arr[i - 1]);
        }
        break;
      default:
        if (arr[i - 1] !== '--discard-next') {
          result.push(arr[i]);
        }
    }
  }

  return result;
}
module.exports = {
  transform
};
