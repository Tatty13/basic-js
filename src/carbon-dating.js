const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample( finalActivity ) {
  if (typeof finalActivity !== 'string' || (+finalActivity  + '') !== finalActivity) return false;

  finalActivity = +finalActivity;
  if (finalActivity <= 0 || finalActivity > 15) return false;

  const INITIAL_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
  const nitrogen = INITIAL_ACTIVITY / finalActivity;
  const reactionConst = 0.693 / HALF_LIFE_PERIOD;
  const time = Math.ceil( Math.log(nitrogen) / reactionConst);
  return time;
}

module.exports = {
  dateSample
};
