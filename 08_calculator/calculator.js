const add = function(num1 = 0, num2 = 0) {
  return num1 + num2;
};

const subtract = function(num1 = 0, num2 = 0) {
	return num1 - num2;
};

const sum = function(arr) {
  let result = 0;
  for (item of arr) {
    result += item;
  }
  return result;
};

const multiply = function(arr) {
  let total = 1;
  for (item of arr) {
    total *= item;
  }
  return total;
};

const power = function(num1 = 0, num2 = 0) {
	
};

const factorial = function(num) {
  const result = 1
  if (num = 0) return 1;
  total = result * factorial(num - 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
