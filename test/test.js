var chai = require('chai');
var expect = chai.expect;

var counterTest = require('../counter-object.js')

describe('Counter Object', function() {
  var counterObject;

  beforeEach(function() {
    counterObject = new counterTest();
  });

  describe('create and increment', function () {
    it('Should start counting from zero', function() {
      expect(counterObject.getValue()).to.equal(0);
    });

    it('Should return the current value', function() {
      counterObject.increment();
      expect(counterObject.getValue()).to.equal(1);
    });
  });
});
