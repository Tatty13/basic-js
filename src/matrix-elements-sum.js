const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === 0) break;
      sum += matrix[j][i];
    }
  }
  return sum;

  
  /* without cycle within a cycle */

  /* 
  let sum = 0;
  let colomnNum = 0;

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][colomnNum] === 0) {
      if (colomnNum === matrix[0].length - 1) return sum;
      colomnNum++;
      i = -1;
    } else {
      sum += matrix[i][colomnNum];
      if (i === (matrix.length - 1) && colomnNum === matrix[0].length - 1) return sum;
      if (i === (matrix.length - 1) && colomnNum < (matrix[0].length - 1)) {
        i = -1; 
        colomnNum++;
      }
    }
  } 
  */
}

module.exports = {
  getMatrixElementsSum
};
