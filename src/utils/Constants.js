import uuidGenerator from './uuidGenerator';

/**
* generate and return a constant
* if constant exist just return it
*/
export default class Constants {
  constructor(namespace){
    this.namespace = namespace;
  }
  of(key){
    if(typeof key !== 'string') {
      throw new Error(`Expect key of constants to be string, but accept type ${typeof key}`)
    }
    if(typeof this[key] !== 'undefined') {
      return this[key];
    }
    this[key] = `${this.namespace}-${key}-${uuidGenerator()}`;
    return this[key];
  }
}