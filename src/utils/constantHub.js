import Constants from './Constants';
/**
 * high order function to manage the whole constants
 * @return {function} function to generate namespaced constants
 */
export default function constantsHub(){
  let hub = {};
  return function(namespace){
    if(typeof namespace !== 'string') {
      throw new Error(`Expect namespace to be string, but accept type ${typeof namespace}`)
    }
    let constants = hub[namespace];
    if(typeof constants === 'undefined') {
      hub[namespace] = constants = new Constants(namespace);
    }
    return constants;
  }
}