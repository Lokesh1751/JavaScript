// For loop

for (let i = 0; i < 10; i++) {
  console.log("Sujal " + i);
}

//While Loop
let x = 0;
while (x < 10) {
  console.log("Angi " + x);
  x++;
}

//Do While => this loop will execute at least once if the condition if false;
let l = 0;
do {
  console.log("Step " + l);
  if (l == 3) {
    break; //terminate the loop
  }
  if (l == 1) {
    continue; //skip the iteration
  }
  l++;
} while (l < 10);
