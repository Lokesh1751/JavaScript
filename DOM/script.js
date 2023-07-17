// accessing html elements
const mybody = document.body;
mybody.style.backgroundColor = "wheat";

const box2 = document.getElementById("box-2");
const dba = document.getElementsByTagName("p");
const cl = document.getElementsByClassName("box");
console.log(cl);
const g = document.querySelector(".container .random");
console.log(g);

// modifying html elements

const ch = document.getElementById("box-1");

// to change the inner html of the tag
ch.innerHTML = "<h1>Hello World</h1>";

// to change the styling
ch.style.color = "gold";

// add new class to a particular tag
ch.classList.add("round-border");
// remove a class to partcular tag
ch.classList.remove("box");
// to toggle a class (if class is present then it get removed and if if not present then it should added)
ch.classList.toggle("round-border");

// creating and appending html
const newpara = document.createElement("p");
newpara.innerText = "This is new para";
const cnt = document.getElementById("cont");
cnt.appendChild(newpara);
newpara.classList.add("box");
newpara.classList.add("round-border");
