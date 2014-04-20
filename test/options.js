var expect = require('expect.js'),
    options = require('../lib/options');

describe("options", function() {

  describe("#firstNumberTest", function() {

    it("should be true when divisble by 3", function() {
      expect(options.firstNumberTest(3,3)).to.be(true);
    });

    it("should be false when divisble by 3", function() {
      expect(options.firstNumberTest(8,3)).to.be(false);
    });
  });

  describe("#secondNumberTest", function() {

    it("should be true when divisble by 5", function() {
      expect(options.secondNumberTest(5,5)).to.be(true);
    });

    it("should be false when divisble by 5", function() {
      expect(options.secondNumberTest(8,5)).to.be(false);
    });
  });

  describe("#noSuccess", function() {

    it("should return a string of the number given", function() {
      expect(options.noSuccess(4)).to.equal("4");
    });
  });
});