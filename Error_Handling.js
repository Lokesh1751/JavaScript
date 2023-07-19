//After error we terminate the code and not able to execute the next instructions of the code
// so to solve this problem error handling concept is introduced
// for this error should ne caught otherwise in console uncaught message is visible

//try block to catch error
try {
  console.log(age);
} catch (err) {
  //catch block to handle the error and to shows its name and message
  console.log(err.name);
  console.log(err.message);
} finally {
  // finally block will execute everytime {a piece of code that will execute always until the code is terminated through and error}
  console.log("me to aauga bhai");
}

//now this work will execute even after error because error is handeled
const sum = 539389 + 88934889;
console.log(sum);

//throw an error
try {
  let robo = prompt("Are You a Robot?");
  // if(robo=='n'){
  //     throw "Error hai Shitttttt!!!!!!"
  // }

  // make new error
  if (robo == "n") {
    // here error name is error and error message is robot not found
    throw new Error("Robot not found");
  }
} catch (error) {
  console.log(error);
  console.log(error.name, error.message);
}
