const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = options;
  
  if (typeof str !== 'string') str = String(str);
  if (typeof addition !== 'string') addition = String(addition);
  
  let addArr = [];
  while (addArr.length < additionRepeatTimes) {
    addArr.push(addition);
  }

  str = str + addArr.join(additionSeparator);

  let strArr = [];
  while (strArr.length < repeatTimes) {
    strArr.push(str);
  }

  return strArr.join(separator);
}

module.exports = {
  repeater
};
