const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits( n ) {
  let sumOfDigits = n.toString(10).split('').reduce((accum, curr) => accum + +curr, 0);
  if (sumOfDigits < 10) {
    return sumOfDigits;
  } else {
    sum = 0;
    sum += getSumOfDigits(sumOfDigits);
    return sum;
  }
}

module.exports = {
  getSumOfDigits
};
