const grade = "D";
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
  case "D":
    console.log("Bad");
    break;
  default:
    console.log("Invalid Grade");
    break;
}
