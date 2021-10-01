import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let arr = [];
  let arr_index = 0;
  for(let i=0; i < members.length ; i++){
    if(typeof members[i] === "string" || members[i] instanceof String){
      arr[arr_index] = members[i].charAt(0);
      arr_index++;
    }
  }
  arr.sort();
  if(arr.length == 0){
    return false
  } else{
    return arr.join("");
  }

}
