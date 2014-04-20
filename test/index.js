var expect = require('expect.js'),
    BizzFuzz = require('../index');

describe("BizzFuzz", function() {

  it("should be a BizzFuzz object", function() {
    BizzFuzz = new BizzFuzz()
    expect(BizzFuzz.valueFor(3)).to.equal("fizz");
  });
});