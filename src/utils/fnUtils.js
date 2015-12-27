/**
 * Generate random base 64 which length
 * determinate by param , default to 5;
 * @param  {...[number, number]} arg  slice start index
 *  and end index
 * @return {String}        encoded string
 */
import uuid from 'node-uuid';

export function randomBase64(...arg){
  let start = typeof arg[0] === 'number'?arg[0]:-5;
  let end = typeof arg[1] === 'number'?arg[1]:undefined;
  let codedString ;
  if('object' === typeof process && Object.prototype.toString.call(process) === '[object process]'){
    codedString = new Buffer(`${uuid.v4()}`.slice(2))
                      .toString('base64')
                      .replace(/\=/g,'')
                      .slice(start, end);
  }else if('undefined' !==typeof btoa){
    codedString = btoa(Math.random())
                  .replace(/\=/g,'')
                  .slice(start, end);
  }else{
    codedString = '';
  }

  if(codedString.length>20){
    codedString = codedString.slice(0,20)
  }
  return codedString;
}