import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

export default function countCats(backyard){
  let number = 0;
  for(var i = 0; i < backyard.length; i++){
    for(var j = 0; j < backyard[i].length; j++) {
      console.log(backyard[i][j])
      if(backyard[i][j] == "^^"){
        number++;
      }
    }
  }
  console.log(number);
  return number;
}