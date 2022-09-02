const { NotImplementedError } = require('../extensions/index.js');

const chainMaker = {
  chain: [],

  getLength() {
   return chainMaker.chain.length;
  },

  addLink(value = '( )') {
    this.chain.push(`( ${value} )`);
    return chainMaker;
  },

  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || position > chainMaker.chain.length) {
      chainMaker.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    chainMaker.chain.splice(position - 1, 1);
    return chainMaker;
  },
  
  reverseChain() {
    chainMaker.chain.reverse();
    return chainMaker;
  },
  
  finishChain() {
    let result = chainMaker.chain.join('~~');
    chainMaker.chain = [];
    return result;
  }
};


module.exports = {
  chainMaker
};
