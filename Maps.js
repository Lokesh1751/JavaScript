let students = [
  { id: "001", name: "Anish", sports: "Cricket" },
  { id: "002", name: "Smriti", sports: "Basketball" },
  { id: "003", name: "Rahul", sports: "Cricket" },
  { id: "004", name: "Bakul", sports: "Basketball" },
  { id: "005", name: "Nikita", sports: "Hockey" },
];

//Map can change the Element
//Map must return something
const names = students
  .filter((cr) => cr.sports == "Cricket")
  .map((currval) => {
    return `<li>${currval.name}</li>`;
  });
console.log(names);
const con = document.getElementById("cont");
con.innerHTML = names.join(""); // array to string
