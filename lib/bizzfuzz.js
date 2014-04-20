var _ = require('underscore'),
    defaultOptions = require('./options');

module.exports = BizzFuzz = function(newOptions) {
  this.options = _.extend({}, defaultOptions, newOptions);
}

BizzFuzz.prototype.valueFor = function(num) {
  var options = this.options,
      firstNumberTest = this.options.firstNumberTest,
      secondNumberTest = this.options.secondNumberTest;

  // Equivalent to "When divisible by 3 and 5, display BizzFuzz"
  if (firstNumberTest(num, options.firstNumber) && secondNumberTest(num, options.secondNumber)) {
    return options.bothSuccess;
  }

  // Equivalent to "When divisible by 3, display fizz"
  if (firstNumberTest(num, options.firstNumber)) {
    return options.firstTestSuccess;
  }

  // Equivalent to "When divisible by 5, display buzz"
  if (secondNumberTest(num, options.secondNumber)) {
    return options.secondTestSuccess;
  }

  // Equivalent to "When not divisible by 3 or 5, display the number"
  return options.noSuccess(num);
}

BizzFuzz.prototype.nextAfter = function(num) {
  if (num === this.options.endsAt) return -1;
  return num + this.options.add;
}

BizzFuzz.prototype.isNextAfter = function(num) {
  var nextNumber = this.nextAfter(num);
  return (nextNumber === -1) ? false : true;
}

BizzFuzz.prototype.startingValue = function() {
  return this.valueFor(this.options.startsAt);
}

BizzFuzz.prototype.startingNumber = function() {
  return this.options.startsAt;
}