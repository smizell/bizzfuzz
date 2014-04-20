var expect = require('expect.js'),
    FizzBuzz = require('../lib/fizzbuzz');

describe("FizzBuzz", function() {

  describe("#valueFor", function() {

    beforeEach(function() {
      fizzBuzz = new FizzBuzz;
    });

    it("should return fizz when only divisible by three", function() {
      expect(fizzBuzz.valueFor(3)).to.equal("fizz");
    });

    it("should return buzz when only divisible by five", function() {
      expect(fizzBuzz.valueFor(5)).to.equal("buzz");
    });

    it("should return fizzbuzz when divisible by three and five", function() {
      expect(fizzBuzz.valueFor(15)).to.equal("fizzbuzz");
    });

    it("should return the number when not divisible by three and five", function() {
      expect(fizzBuzz.valueFor(14)).to.equal("14");
    });
  });

  describe("#nextAfter", function() {

    it("should return the next value", function() {
      expect(fizzBuzz.nextAfter(3)).to.equal(4);
    });

    it("should return the -1 if there isn't one", function() {
      expect(fizzBuzz.nextAfter(100)).to.equal(-1);
    });
  });

  describe("#startingValue", function() {

    it("should return the starting value", function() {
      expect(fizzBuzz.startingValue()).to.equal("1")
    });
  });
});