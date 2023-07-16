// A callback is a function passed as an argument to another function

function greet(name, callback) {
  console.log("hey", name);
  callback();
}
function callback() {
  console.log("Callback Called");
}
greet("Sujal", function () {
  console.log("Called");
});

const calculate = (a, b, operation) => {
  return operation(a, b);
};

//// method 1
const addition = calculate(3, 4, function (num1, num2) {
  return num1 + num2;
});

console.log(addition);

// method 2
const subtraction = (a, b) => a - b;

const subResult = calculate(8, 3, subtraction);

console.log(subResult);

//method 3
function multiply(a, b) {
  return a * b;
}

const mulResult = calculate(3, 2, multiply);
console.log(mulResult);

//Array Callback functions

const a = [4, 1, 6, -2, -5, 3, 2, -8, 6, 7];
const firstneg = (num) => {
  return num < 0;
};

// find method => returns the first value of an array  element that passes a test
// firstneg function called for each value of array until it mathces any element matches the condition num<0
console.log(a.find(firstneg));

//findindexof =>  returns the first index of an array  element that passes a test
console.log(a.findIndex(firstneg));

//for each => call a function for each element
a.forEach((num) => {
  if (num < 0) {
    console.log(num);
  }
});
