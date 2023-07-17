console.log("Hello");
console.log("Sujal");

// settimeout function will execute the particular code after a certain period of time which is in miliseconds
// settimeout is asynchronous function => which cannot execute as per flow
setTimeout(() => {
  console.log("Angi");
}, 0);

function getcheese(callback) {
  setTimeout(() => {
    const cheese = "🧀";
    console.log("Here is the cheese", cheese);
    callback(cheese);
  }, 2000);
}

function getdough(cheese, callback) {
  setTimeout(() => {
    const dough = "🍩" + cheese;
    console.log("here is dough", dough);
    callback(dough);
  }, 2000);
}
function bakedpizza(dough, callback) {
  setTimeout(() => {
    const pizza = dough + "🍕";
    console.log("here is pizzza", pizza);
    callback(pizza);
  }, 2000);
}
getcheese((cheese) => {
  getdough(cheese, (dough) => {
    bakedpizza(
      dough,
      (pizza) => {
        console.log("get pizza", pizza);
      },
      4000
    );
  });
});
