import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let result="";
  let index=0;
  let count=0;
  while(index<str.length-1){
    while(str.charAt(index)==str.charAt(index+1)){
    index++;
    count++;
  }
  result+=count+1;
  result+=str.charAt(index);
  count = 0;
	index++;
  }
  
	return result
}
