// In javascript promises is a good way to handle asynchronous operations
const ticket = new Promise(function (resolve, reject) {
  const isborded = true;
  if (isborded) {
    resolve("You are in the flight");
  } else {
    reject("Your flight has been cancelled");
  }
});

//then() method  is used with the callback when the promise is successfully fullfilled or resolved
ticket.then((data) => {
  console.log("wohho🙆‍♂️", data);
});

//catch() method  is used with the callback when the promise is rejected
ticket.catch((data) => {
  console.log("ohho🤦‍♂️", data);
});

// finally() method can call evertime
ticket.finally(() => {
  console.log("Me to aauga mera padle tu ke padna😤");
});

//promise using pizza example
function getcheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const chese = "🧀";
      // resolve(chese);
      reject(chese);
    }, 2000);
  });
}

function makedough(cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dough = cheese + "🍩";
      resolve(dough);
    }, 2000);
  });
}

function makepizza(dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizza = dough + "🍕";
      resolve(pizza);
    }, 2000);
  });
}

// getcheese().then((c)=>{
//     console.log("here is cheese",c);
//     return makedough(c);
// }).then((dough)=>{
//     console.log("here is dough",dough);
//     return makepizza(dough);
// }).then((pizza)=>{
//     console.log("here is pizza",pizza);
//     console.log("Get the pizzzzaaaaaaaa!!! Hurehhhhhhhhhh!! Balle Balle!!",pizza);
// }).catch((data)=>{
//     console.log("Error occured",data);
// }).finally(()=>{
//     console.log("Process Ended");
// })

//async await method
async function orderpizza() {
  try {
    // wait until cheese is came
    const cheese = await getcheese();
    console.log("here is cheese", cheese);
    const dough = await makedough(cheese);
    console.log("here is dough", dough);
    const pizza = await makepizza(dough);
    console.log(
      "Get the pizzzzaaaaaaaa!!! Hurehhhhhhhhhh!! Balle Balle!!",
      pizza
    );
  } catch (err) {
    console.log("Error Occured", err);
  }
}
orderpizza();
