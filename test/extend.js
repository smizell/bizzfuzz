var expect = require('expect.js'),
    FizzBuzz = require('../lib/fizzbuzz');

describe("Extend FizzBuzz", function() {

  describe("#add", function() {

    it("should change the increments for steps", function() {
      fizzBuzz = new FizzBuzz({ add: 2 });
      expect(fizzBuzz.nextAfter(4)).to.equal(6);
    });
  });

  describe("#startsAt", function() {

    it("should change starting number", function() {
      fizzBuzz = new FizzBuzz({ startsAt: 2 });
      expect(fizzBuzz.startingValue()).to.equal("2");
    });
  });

  describe("#endsAt", function() {

    it("should change ending number", function() {
      fizzBuzz = new FizzBuzz({ endsAt: 10 });
      expect(fizzBuzz.nextAfter(10)).to.equal(-1);
    });
  });

  describe("#firstNumber", function() {

    it("should change firstNumber number", function() {
      fizzBuzz = new FizzBuzz({ firstNumber: 2 });
      expect(fizzBuzz.valueFor(4)).to.equal("fizz");
    });
  });

  describe("#secondNumber", function() {

    it("should change secondNumber number", function() {
      fizzBuzz = new FizzBuzz({ secondNumber: 7 });
      expect(fizzBuzz.valueFor(7)).to.equal("buzz");
    });
  });

  describe("#firstNumberTest", function() {

    it("should change firstNumberTest value", function() {
      var firstNumberTestFunc = function(num) { return num === 22 };
      fizzBuzz = new FizzBuzz({ firstNumber: 3, secondNumber: 5, firstNumberTest: firstNumberTestFunc });
      expect(fizzBuzz.valueFor(3)).to.equal("3");
      expect(fizzBuzz.valueFor(22)).to.equal("fizz");
    });
  });

  describe("#secondNumberTest", function() {

    it("should change secondNumberTest value", function() {
      var secondNumberTestFunc = function(num) { return num === 26 };
      fizzBuzz = new FizzBuzz({ firstNumber: 3, secondNumber: 5, secondNumberTest: secondNumberTestFunc });
      expect(fizzBuzz.valueFor(5)).to.equal("5");
      expect(fizzBuzz.valueFor(26)).to.equal("buzz");
    });
  });

  describe("#firstTestSuccess", function() {

    it("should change firstTestSuccess value", function() {
      fizzBuzz = new FizzBuzz({ firstNumber: 3, firstTestSuccess: "foo" });
      expect(fizzBuzz.valueFor(3)).to.equal("foo");
    });
  });

  describe("#secondTestSuccess", function() {

    it("should change secondTestSuccess value", function() {
      fizzBuzz = new FizzBuzz({ secondNumber: 5, secondTestSuccess: "bar" });
      expect(fizzBuzz.valueFor(5)).to.equal("bar");
    });
  });

  describe("#bothSuccess", function() {

    it("should change bothSuccess value", function() {
      fizzBuzz = new FizzBuzz({ firstNumber: 3, secondNumber: 5, bothSuccess: "foobar" });
      expect(fizzBuzz.valueFor(15)).to.equal("foobar");
    });
  });

  describe("#noSuccess", function() {

    it("should change noSuccess value", function() {
      var noSuccessFunc = function(num) { return "fail" };
      fizzBuzz = new FizzBuzz({ firstNumber: 3, secondNumber: 5, noSuccess: noSuccessFunc });
      expect(fizzBuzz.valueFor(2)).to.equal("fail");
    });
  });
});