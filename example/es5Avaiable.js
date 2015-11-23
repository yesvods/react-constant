var Constant = require('../lib/index').Constant;

var constants1 = Constant('fnNavbar');
var constants2 = Constant('backbone');

var randomkey1 = constants1.of('randomkeyA');
var randomkey2 = constants2.of('randomkeyA');
var randomkey3 = constants1.of('randomkeyB');
var randomkey4 = constants2.of('randomkeyB');

console.log(randomkey1)
console.log(randomkey2)
console.log(randomkey3)
console.log(randomkey4)
