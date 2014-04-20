BizzFuzz
========

Extendable FizzBuzz Library in Javascript (LOL). It provides a way for calculating the value for a specific number and affordances for finding the next number.

## API

### `valueFor`

Function for getting the FizzBuzz value of a number

```javascript
bizzFuzz = new BizzFuzz;
bizzFuzz.valueFor(3); // Returns Fizz
```

### `nextAfter`

Function for getting the next number in the sequence (useful when incrementing by something other than the default)

```javascript
bizzFuzz = new BizzFuzz;
bizzFuzz.nextAfter(10); // Returns 11 with default settings
```

## Options

BizzFuzz comes with defaults that for the conditions of the question:

> Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

See [Why Can't Programers.. Program?](http://blog.codinghorror.com/why-cant-programmers-program/)

```javascript
// From lib/options.js

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
```

BizzFuzz can be changed by giving an object to BizzFuzz to override these defaults.

```javascript
// This example starts at 10, adds 10 for each step, and stops at 70
bizzFuzz = BizzFuzz({
  add: 10,
  startsAt: 10,
  endsAt: 70
});
```

See tests for more examples.