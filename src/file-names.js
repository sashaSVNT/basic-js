const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(/* names */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // const namesCounter = {};
  // const resultNames = [];
  // names.forEach((name) => {
  //   if (namesCounter[name] === undefined) {
  //     namesCounter[name] = 0;
  //     resultNames.push(name);
  //   } else {
  //     const newName = `${name}(${namesCounter[name]})`;
  //   }
  // })
  // return resultNames;
}

module.exports = {
  renameFiles
};
