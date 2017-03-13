// The main point of testing is to use asset and logic tests
// to feed or setup simulated environments for functions to be invoked against
// We see this illustrated below, particularly on lines 21 and 23 where the element is 
// pre-established and fed to the className.js addClass method. 

// Require different testing suites
var chai = require('chai');
var mocha = require('mocha');

// Testing content
var assert = chai.assert;

// Requiring classname items
var className = require('../js/className.js');
var addClass = className.addClass;

// Testing methods
describe('addClass', function() {

	//Test A
	it('should not add a class which already exists', function() {
	  var element = { className: 'exists' };

	  addClass(element, 'exists');

	  var numClasses = element.className.split(' ').length;
	  assert.equal(numClasses, 1);
	});

	// Test B
	it('should append new class after existing one', function() {
	  var element = { className: 'exists' };

	  addClass(element, 'new-class');

	  var classes = element.className.split(' ');
	  assert.equal(classes[1], 'new-class');
	});

});
