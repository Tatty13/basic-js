const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
  // return email.split('@').filter((_, i, arr) => i === arr.length - 1).join('');
  email = email.split('@');
  return email[email.length - 1];
}

module.exports = {
  getEmailDomain
};
