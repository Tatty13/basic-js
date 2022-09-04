const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let result = [];

  for (let i = 0; i < matrix.length; i++) {
    let row = [];
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j]) {
        row.push(1);
      } else {
        let count = 0;

        if (matrix[i - 1]) {
          matrix[i - 1][j - 1]  ? count++ :
            matrix[i - 1][j] ? count++ :
            matrix[i - 1][j + 1] ? count++ :
            count;
        }

        if (matrix[i + 1]) {
          matrix[i + 1][j - 1] ? count++ :
            matrix[i + 1][j] ? count++ :
            matrix[i + 1][j + 1] ? count++ :
            count;
        }

        matrix[i][j - 1] ? count++ :
          matrix[i][j + 1] ? count++ :
          count;
        
         row.push(count);
      }
    }
    result.push(row);
  }
  return result;
}

module.exports = {
  minesweeper
};
