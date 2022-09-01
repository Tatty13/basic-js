const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (arguments.length === 0) return 'Unable to determine the time of year!';
  let seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];

  try {
    let stringDate = JSON.stringify(date);
    if (stringDate.length < 3) {
      throw new Error('Invalid date!');
    }
    return seasons[date.getMonth()];
  } catch (error) {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
