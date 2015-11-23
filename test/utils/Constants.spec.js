import Constants from '../../src/utils/Constants';
import should from 'should';

describe('Constants', () => {
  let constants;
  before(() => {
    constants = new Constants();
  })
  it('Constants generate a constant, and the same value will be return when the method is called again.', () => {
    let c1 = constants.of('randomString');
    let c2 = constants.of('randomString');
    should(c1).equal(c2);
  })
  after(() => {
    constants = null;
  })
})