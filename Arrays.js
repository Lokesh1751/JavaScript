const check = [
  "Sujal",
  "Angi",
  "Muskan",
  "Krish",
  {
    name: "dkd",
  },
  function hello() {
    console.log("Hello jiiiiiiiii");
  },
];
let sol = check.indexOf("Angi");

//length of array
console.log(check.length);
console.log(check[1]);
console.log(check[4]);
console.log(check[5]);

const newcheck = check;
// now newcheck anc check is same and if we change a value in newcheck then it automatically change in check
newcheck[1] = "Aarav";
console.log(newcheck);
console.log(check);

//Array Methods

//1)indexOf();
// used to search an element index and return its index and if not contains then it returns -1

console.log(check.indexOf("Aarav"));

//2) includes();
// used to check if array contain a particular element or not
console.log(check.includes("kjwi"));

//3)push()
// push element
check.push("ohohohoho");
console.log(check);

//4)unshift()
// add new element at begining of array and return new array length
console.log(check.unshift("dodj"));

//5) pop()
// remove last element from array and return that removed element
console.log(check.pop());

//6) shift()
// remove first element from array and return that removed element
console.log(check.shift());

//7) sort()
// to sort an array
console.log(check.sort());

//8) slice()
// select part of array and return new array and not include last index
console.log(check.slice(0, 3));
