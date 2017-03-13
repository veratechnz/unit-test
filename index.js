// index.js file 
//See array tes for full details

//https://www.sitepoint.com/unit-test-javascript-mocha-chai/
var chai = require('chai');

mocha.setup('bdd');

var assert = chai.assert;

//Actual test here:
describe('Array', function() {
	it('should start empty', function() {
	  var arr = [];

	  assert.equal(arr.length, 0);
	});
});

mocha.run();


 