import {randomBase64} from '../../src/utils/fnUtils';
import should from 'should';

describe('fnUtils', () => {
  it('get different value in every invoke', () => {
    let tmp = [];
    const base64Encoded = randomBase64();
    for(let i=0; i<1000;i++){
      tmp.push(randomBase64())
    }
    let index = tmp.indexOf(base64Encoded);
    should(index).lessThan(0);
  });

  it('fnUtils should return 5 chars default', () => {
    const base64Encoded = randomBase64();
    should(base64Encoded.length).equal(5);
  });

  it('should return spec number by spec param', () => {
    const base64Encoded = randomBase64(0, 6);
    should(base64Encoded.length).equal(6);
  })

  it('should return no more than 20 chars', () => {
    const base64Encoded = randomBase64(0);
    should(base64Encoded.length).belowOrEqual(20);
  })
})