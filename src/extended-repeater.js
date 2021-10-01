import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
	let result="";
   if(!(typeof str === "string" ||str instanceof String)){
	   String(str);}
	
	   for (let index = 0; index < options.repeatTimes; index++) {	
			result += str;

		if (options.hasOwnProperty('addition')){
			if(!(typeof options.addition === "string" ||options.addition instanceof String)){
				String(options.addition);
			}
			for (let i = 0; i < options.additionRepeatTimes ; i++) {
				result+=options.addition;

				if(i!=options.additionRepeatTimes-1){
					if(!options.hasOwnProperty('additionSeparator')){
				   options.additionSeparator = '|'
			   }
					result+=options.additionSeparator;
				}
			}
		}
		   
		   
		   
		   
		   
		   if(index!=options.repeatTimes-1){
			   if(!options.hasOwnProperty('separator')){
				   options.separator = '+'
			   }
			   result+= options.separator;
		   }
		   
	   }
	return result
}


