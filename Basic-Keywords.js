console.log("oyehoyehoye");

// using let for declaring block-scoped variables
let name = "sujal";

// using const for declaring constant variables
const last_name = "angi";
console.log(last_name);

// Variables declared by let are only available inside the block where they're defined.
//  Variables declared by var are available throughout the function in which they're declared.
var l = "di";
var l = "dij";
{
  var l = "sij";
  l = "dwkw";
}
// no error and var can redeclared and reinitialized
console.log(l);

//let m="di";
{
  let m = "sij";
  m = "dwkw";
}

// let only be reinitialized not redeclared
// error says m is not defined
console.log(m);
