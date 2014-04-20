var expect = require('expect.js'),
    BizzFuzz = require('../lib/bizzfuzz');

describe("Extend BizzFuzz", function() {

  describe("#add", function() {

    it("should change the increments for steps", function() {
      bizzFuzz = new BizzFuzz({ add: 2 });
      expect(bizzFuzz.nextAfter(4)).to.equal(6);
    });
  });

  describe("#startsAt", function() {

    it("should change starting number", function() {
      bizzFuzz = new BizzFuzz({ startsAt: 2 });
      expect(bizzFuzz.startingValue()).to.equal("2");
    });
  });

  describe("#endsAt", function() {

    it("should change ending number", function() {
      bizzFuzz = new BizzFuzz({ endsAt: 10 });
      expect(bizzFuzz.nextAfter(10)).to.equal(-1);
    });
  });

  describe("#firstNumber", function() {

    it("should change firstNumber number", function() {
      bizzFuzz = new BizzFuzz({ firstNumber: 2 });
      expect(bizzFuzz.valueFor(4)).to.equal("fizz");
    });
  });

  describe("#secondNumber", function() {

    it("should change secondNumber number", function() {
      bizzFuzz = new BizzFuzz({ secondNumber: 7 });
      expect(bizzFuzz.valueFor(7)).to.equal("buzz");
    });
  });

  describe("#firstNumberTest", function() {

    it("should change firstNumberTest value", function() {
      var firstNumberTestFunc = function(num) { return num === 22 };
      bizzFuzz = new BizzFuzz({ firstNumber: 3, secondNumber: 5, firstNumberTest: firstNumberTestFunc });
      expect(bizzFuzz.valueFor(3)).to.equal("3");
      expect(bizzFuzz.valueFor(22)).to.equal("fizz");
    });
  });

  describe("#secondNumberTest", function() {

    it("should change secondNumberTest value", function() {
      var secondNumberTestFunc = function(num) { return num === 26 };
      bizzFuzz = new BizzFuzz({ firstNumber: 3, secondNumber: 5, secondNumberTest: secondNumberTestFunc });
      expect(bizzFuzz.valueFor(5)).to.equal("5");
      expect(bizzFuzz.valueFor(26)).to.equal("buzz");
    });
  });

  describe("#firstTestSuccess", function() {

    it("should change firstTestSuccess value", function() {
      bizzFuzz = new BizzFuzz({ firstNumber: 3, firstTestSuccess: "foo" });
      expect(bizzFuzz.valueFor(3)).to.equal("foo");
    });
  });

  describe("#secondTestSuccess", function() {

    it("should change secondTestSuccess value", function() {
      bizzFuzz = new BizzFuzz({ secondNumber: 5, secondTestSuccess: "bar" });
      expect(bizzFuzz.valueFor(5)).to.equal("bar");
    });
  });

  describe("#bothSuccess", function() {

    it("should change bothSuccess value", function() {
      bizzFuzz = new BizzFuzz({ firstNumber: 3, secondNumber: 5, bothSuccess: "foobar" });
      expect(bizzFuzz.valueFor(15)).to.equal("foobar");
    });
  });

  describe("#noSuccess", function() {

    it("should change noSuccess value", function() {
      var noSuccessFunc = function(num) { return "fail" };
      bizzFuzz = new BizzFuzz({ firstNumber: 3, secondNumber: 5, noSuccess: noSuccessFunc });
      expect(bizzFuzz.valueFor(2)).to.equal("fail");
    });
  });
});