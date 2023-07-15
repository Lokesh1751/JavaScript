//DATATYPES

//number
let a = 23;
console.log("the type of a is: ", typeof a);

//String
let b = "Sujal";
console.log("the type of b is: ", typeof b);

//Boolean
let c = true;
console.log("the type of c is: ", typeof c);

//Type Conversion
a = String(a);
console.log("the type of a is: ", typeof a);

// when we convert a number to boolean then only 0 can be considered as false else all postive and negative numbers can consider as true
a = Boolean(a);
console.log("the type of a is: ", typeof a);
console.log("the value of a is: ", a);

// when we convert a string to boolean then only emoty string considered as false else all strings considered as true
b = Boolean(b);
console.log("the value of b is: ", a);

//when we convert a true boolean value to number then it convert into 1
//when we convert a false boolean value to number then it convert into 0

// when we convert a string to number then it gives NAN means not a number

// when we convert a null to number then it gives 0
let h = null;
h = Number(h);
console.log(h);

// when we convert a undefined to number then it gives NAN means not a number
