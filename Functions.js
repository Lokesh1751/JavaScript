function sum(a, b) {
  // can be called before declaration line
  console.log("result is", a + b);
}
let a = 10;
let b = 90;
sum(a, b);

function Multiply(a, b) {
  // a and b are parameters
  return a * b;
}

let c = 19;
let d = 89;
console.log(Multiply(c, d)); // c and d are arguments

//Function Expression => has no name , we can call this function only after its declaration
const ans = function (a, b) {
  const al = a + b;
  return al;
};
console.log(ans(12, 13));

const square = function (num) {
  return num * num;
};
console.log(square);
console.log(square(9));

//Nested Functions
function addsquare(a, b) {
  function sq(x) {
    return x * x;
  }
  return sq(a) + sq(b);
}
console.log(addsquare(9, 6));
