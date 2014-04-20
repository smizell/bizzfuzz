var expect = require('expect.js'),
    BizzFuzz = require('../lib/bizzfuzz');

describe("BizzFuzz", function() {

  describe("#valueFor", function() {

    beforeEach(function() {
      bizzFuzz = new BizzFuzz;
    });

    it("should return Fizz when only divisible by three", function() {
      expect(bizzFuzz.valueFor(3)).to.equal("Fizz");
    });

    it("should return Buzz when only divisible by five", function() {
      expect(bizzFuzz.valueFor(5)).to.equal("Buzz");
    });

    it("should return FizzBuzz when divisible by three and five", function() {
      expect(bizzFuzz.valueFor(15)).to.equal("FizzBuzz");
    });

    it("should return the number when not divisible by three and five", function() {
      expect(bizzFuzz.valueFor(14)).to.equal("14");
    });
  });

  describe("#nextAfter", function() {

    it("should return the next value", function() {
      expect(bizzFuzz.nextAfter(3)).to.equal(4);
    });

    it("should return the -1 if there isn't one", function() {
      expect(bizzFuzz.nextAfter(100)).to.equal(-1);
    });
  });

  describe("#startingValue", function() {

    it("should return the starting value", function() {
      expect(bizzFuzz.startingValue()).to.equal("1")
    });
  });
});