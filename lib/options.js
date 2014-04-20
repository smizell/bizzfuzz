
module.exports = options = {
  // How many should be incremented with each step
  add: 1,

  // What BizzFuzz starts at 
  startsAt: 1,

  // What BizzFuzz ends at
  endsAt: 100,

  // First number
  firstNumber: 3,

  // Second number
  secondNumber: 5,

  // Function for test for first number
  firstNumberTest: function(num, firstNumber) {
    return num % firstNumber === 0;
  },

  // Function for test for second number
  secondNumberTest: function(num, secondNumber) {
    return num % secondNumber === 0;
  },

  // What to show if only the first test succeeds
  firstTestSuccess: "fizz",

  // What to show if only the second test succeeds
  secondTestSuccess: "buzz",

  // What to show if both tests succeed
  bothSuccess: "fizzbuzz",

  // What to show if no tests succeed
  noSuccess: function(num) {
    return String(num);
  }
}