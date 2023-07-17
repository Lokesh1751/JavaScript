//Event Handlers defined in html elements
function myfunc() {
  const newh = document.createElement("h1");
  const ele = document.getElementById("para");
  console.log(ele);
  ele.appendChild(newh);
  newh.innerText = "Hello World";
  newh.classList.add("yoho");
}
function myfu() {
  const cnt = document.getElementById("cont");
  cnt.style.flexDirection = "column";
  cnt.style.transitionDuration = "1";
}

function myfu2() {
  const cnt = document.getElementById("cont");
  cnt.style.flexDirection = "row";
}

// function pressed() {
//   const aao = document.getElementById("txtx");
//   console.log("key pressed");
// }

// Event Listners defined in script file

//click
const yh = document.getElementById("btn");
yh.addEventListener("click", (e) => {
  console.log(e);
  const n = document.createElement("h3");
  yh.appendChild(n);
  n.innerText = "added";
});

//keypress
let l = "";
const i = document.getElementById("txtx");
const newl = document.createElement("h2");
const ff = document.getElementById("f");
ff.appendChild(newl);
i.addEventListener("keypress", (e) => {
  l += e.key;
  newl.innerHTML += e.key;
});

//focus
i.addEventListener("focus", () => {
  console.log("hyy");
});

// normally when two elements in which first element is parent of second and both have same eventlistner
//then innsermost element triggered first and this process is called bubbling
// while its opposite is called capture for this put true to function at the end for example:
i.addEventListener("keydown", () => {}, true); // now capture procces occured // default value is false
