import constantsHub from '../../src/utils/constantHub';
import should from 'should';

describe('constantsHub', () => {
  let hub;
  before(() => {
    hub = constantsHub();
  })
  it('call twice with same namespace, should return same object', () => {
    let ns1 = hub('ns1');
    let ns2 = hub('ns1');
    let c1 = ns1.of('key');
    let c2 = ns2.of('key');
    should.equal(c1, c2)
  })
  after(() => {
    hub = null;
  })
})