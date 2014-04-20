var expect = require('expect.js'),
    FizzBuzz = require('../index');

describe("FizzBuzz", function() {

  it("should be a FizzBuzz object", function() {
    fizzBuzz = new FizzBuzz()
    expect(fizzBuzz.valueFor(3)).to.equal("fizz");
  });
});