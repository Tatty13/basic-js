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
function deleteDigit2( n ) {
  let arrOfNums = n.toString(10).split('');

  for (let i = 0; i < arrOfNums.length - 1; i++) {
    if (arrOfNums[i] === arrOfNums[i + 1]) continue;
    if (arrOfNums[i] > arrOfNums[i + 1]) {
      arrOfNums.splice(i + 1, 1);
      return +arrOfNums.join('');
    } else {
      arrOfNums.splice(i, 1);
      return +arrOfNums.join('');
    }
  }  
}

function deleteDigit(n) {
  let arrOfNums = n.toString(10).split('');
  let min = `${Math.min(...arrOfNums)}`;
  let arrOfNumsWithoutMinInt = [...arrOfNums];
  
  arrOfNumsWithoutMinInt.splice(arrOfNums.indexOf(min), 1);
  arrOfNums.splice(0, 1);
  
  return +arrOfNumsWithoutMinInt.join('') > +arrOfNums.join('') ? 
+arrOfNumsWithoutMinInt.join('') : +arrOfNums.join('')
}

module.exports = {
  deleteDigit
};
