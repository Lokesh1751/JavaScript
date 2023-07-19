function multiply(a, b, c) {
  return a * b * c;
}

function addition(a, b, c) {
  return a + b + c;
}

// only one default module should be there
// in default export we do not need to use curly braces in the main script function for importing this divide function
export default function divide(a, b) {
  return a / b;
}
export { multiply, addition as add };
export const student_cnt = 298;
