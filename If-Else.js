const age = 18;
if (age >= 18) {
  console.log("Vote");
} else {
  console.log("Not Eligible");
}

//if else if else
const marks = 67;
if (marks > 90) {
  console.log("Grade A");
} else if (marks > 70) {
  console.log("Grade B");
} else if (marks > 50) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}

//Ternary Operators
const m = 50;
const result = m >= 40 ? "Passed" : "Fail";
console.log(result);
