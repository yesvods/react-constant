import uuidGenerator from '../../src/utils/uuidGenerator';
import should from 'should';

describe('uuidGenerator', () => {
  it('get different value in every invoke', () => {
    let tmp = [];
    const uuid = uuidGenerator();
    for(let i=0; i<1000;i++){
      tmp.push(uuidGenerator())
    }
    let index = tmp.indexOf(uuid);
    should(index).lessThan(0);
  })
})