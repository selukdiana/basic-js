import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  let num = n;
  num = String(num).replace(String(num).charAt(0),"");
  for(let i=1; i< String(n).length; i++){
    num = Math.max(String(num).replace(String(num).charAt(i),""), num);
  }
	return num
}
