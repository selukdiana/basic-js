import { NotImplementedError } from '../extensions/index.js';

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
export default class VigenereCipheringMachine {
  constructor(param){
    this.bool = param;
  }
  encrypt(message, key) {
    if(message.length < 1 || key.length <1) return "Incorrect arguments!"
    const en = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    message = message.toUpperCase();
    key = key.toUpperCase();
    let count = 0;
    let result = "";
    for (let index = 0; index < message.length; index++) {
      if(en.indexOf(message.charAt(index))!== -1){
        if(count == key.length) count =0
        let num = 
        (en.indexOf(message.charAt(index)) + en.indexOf(key.charAt(count)))%26;
        result+= en.charAt(num);
        count++;
        }
      else result+=message.charAt(index);
    }
    if (this.bool == 'false') result = result.split('').reverse().join('');
    return result;
  }
  decrypt(message, key) {
    if(message.length < 1 || key.length <1) return "Incorrect arguments!"
    const en = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    message = message.toUpperCase();
    key = key.toUpperCase();
    let count = 0;
    let result = "";
    for (let index = 0; index < message.length; index++) {
      if(en.indexOf(message.charAt(index))!== -1){
        if(count == key.length) count =0
        let num = 
        (en.indexOf(message.charAt(index)) + 26 - en.indexOf(key.charAt(count)))%26;
        result+= en.charAt(num);
        count++;
        }
      else result+=message.charAt(index)
    }
    if (this.bool == 'false') result = result.split('').reverse().join('');
    return result;
  }
}
