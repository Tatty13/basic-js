const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
    this.alphabet = [];
    for (let i = 65; i < 91; i++) {
      this.alphabet.push(String.fromCharCode(i))
    }
  }

  getMessageInKey (message, key) {
    let messageOfKey = '';
    let index = 0;
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        messageOfKey += key[index % key.length];
        index++;
      } else {
        messageOfKey += message[i];
      }
    }
    return messageOfKey;
  }
  
  encrypt(message, key) {
    if (arguments.length !== 2 || typeof message !== 'string' || typeof key !== 'string') throw new Error('Incorrect arguments!');
    message = message.toUpperCase();
    key = key.toUpperCase();

    let messageInKey = this.getMessageInKey(message, key);
    let result = '';

    for (let i = 0; i < messageInKey.length; i++) {
      if (this.alphabet.includes(messageInKey[i])) {
        let letterIndex = (this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(messageInKey[i])) % this.alphabet.length;
        result += this.alphabet[letterIndex];
      } else {
        result += messageInKey[i]
      }
    }
    return this.type ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (arguments.length !== 2 || typeof encryptedMessage !== 'string' || typeof key !== 'string') throw new Error('Incorrect arguments!');
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let encryptedMessageInKey = this.getMessageInKey(encryptedMessage, key);
    let result = '';

    for (let i = 0; i < encryptedMessageInKey.length; i++) {
      if (this.alphabet.includes(encryptedMessageInKey[i])) {
        let letterIndex = (this.alphabet.indexOf(encryptedMessage[i]) - this.alphabet.indexOf(encryptedMessageInKey[i])) % this.alphabet.length;
        if (letterIndex < 0) letterIndex = this.alphabet.length + letterIndex;
        result += this.alphabet[letterIndex];
      } else {
        result += encryptedMessageInKey[i];
      }
    }
    return this.type ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
