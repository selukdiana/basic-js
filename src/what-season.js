import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} dateString real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(dateString) {
  if(dateString instanceof Date){
    if (isNaN(dateString)){
      return "Invalid date!";
    }
    else {
      if(dateString.getMonth()<=5 && dateString.getMonth()>=3){
        return "spring";
      } else if (dateString.getMonth()<=8 && dateString.getMonth()>=6){
        return "summer";
      } else if(dateString.getMonth()<=11 && dateString.getMonth()>=9){
        return "autumn";
      } else if(dateString.getMonth()==12 || dateString.getMonth()<=1){
        return "winter";
      }
    }
  }
  else {
    return 'Unable to determine the time of year!';
  }
  
}
