const { NotImplementedError } = require('../extensions/index.js');


const chainMaker = {
  chainContainer: [],
  getLength() {
    return this.chainContainer.length;
  },
  addLink(value) {
    let valueType = String(value);
    this.chainContainer.push(`( ${valueType} )`);
    return this;
  },
  removeLink(position) {
    if (
      position < 1 ||
      position > this.chainContainer.length ||
      !Number.isInteger(position)
    ) {
      this.chainContainer = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chainContainer.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainContainer.reverse();
    return this;
  },
  finishChain() {
    let finalChain = this.chainContainer.join('~~');
    this.chainContainer = [];
    return finalChain;
  }
};

module.exports = {
  chainMaker
};
