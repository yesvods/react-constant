import uuidGenerator from './utils/uuidGenerator';

/**
* generate and return a constant
* if constant exist just return it
*/
export class Constants {
  of(key){
    if(typeof key !== 'string') {
      throw new Error(`Expect key of constants to be string, but accept type ${typeof key}`)
    }
    if(typeof this[key] !== 'undefined') {
      return this[key];
    }
    this[key] = uuidGenerator();
    return this[key];
  }
}

/**
 * high order function to manage the whole constants
 * @return {function} function to generate namespaced constants
 */
export function constantsHub(){
  let hub = {};
  return function(namespace){
    if(typeof namespace !== 'string') {
      throw new Error(`Expect namespace to be string, but accept type ${typeof namespace}`)
    }
    let constants = hub[namespace];
    if(typeof constants === 'undefined') {
      constants = new Constants();
    }
    return constants;
  }
}

export default new constantsHub();