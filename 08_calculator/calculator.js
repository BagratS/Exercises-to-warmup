const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(args) {
  if(args.length === 0) return 0;
	let sum = 0;
  for(arg of args) {
    sum += arg;
  }return sum;
};

const multiply = function(args) {
  let product = 1;
  for(arg of args) {
    product *= arg;
  }
  return product;
};

const power = function(a, n) {
  if(a === 0) return 1;
  else if(n === 1) return a;
  return a * power(a, n - 1);
};

const factorial = function(n) {
	if(n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
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
