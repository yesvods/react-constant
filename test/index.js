import Constant from '../src/';
import should from 'should';

describe('Constant', () => {
  let constants1, constants2;
  before(() => {
    constants1 = Constant('namespace1');
    constants2 = Constant('namespace2');
  })
  it('different namespace with same key should have various values', () => {
    should.notEqual(constants1.of('randomString'),constants2.of('randomString'))
  })
  it('same namespace with different key should have various values', () => {
    should.notEqual(constants1.of('randomString1'), constants1.of('randomString2'));
  })
  it('after contant is generate, the same value can be access with . operation', () => {
    let c1 = constants1.of('randomString');
    let c2 = constants1.randomString;
    should.equal(c1, c2);
  })
})