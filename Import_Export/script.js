// import by name
// import {multiply as mul,add} from "./utility.js" 

// import all modules present
import * as utility from "./utility.js";

//import default module
import divide from "./utility.js";

// we can rename module
const res = utility.multiply(2, 3, 4);
console.log(res);

const sum = utility.add(19, 92, 1889);
console.log(sum);
console.log(utility.student_cnt);
const div = divide(4, 2);
console.log(div);
