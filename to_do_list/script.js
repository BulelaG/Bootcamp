// Declare an empty array object for our array of Todos
let TODOs ;

// check if we have data in storage
if(sessionStorage.getItem("Notes")){TODOs =JSON.parse(sessionStorage.getItem("Notes"))}
// if not assign data
else{TODOs = ["Add your first to-do list."]}


// connect innerhtml and js to out put todo notes

note = document.getElementById("todoList").innerHTML


// set an index
let index = 0;

// dom connecting/manipulation to image tag
 note.innerHTML = TODOs[index]


function upload() {
  let newTodo = document.getElementById("newTodo").value;
  if (newTodo === "") {
    alert("Please enter a your to do note.");
    return;
  }
  TODOs.push(newTodo);
  sessionStorage.setItem("Notes", JSON.stringify(TODOs));
  index = TODOs.length - 1;
  note.innerHTML = TODOs[index];
  document.getElementById("newTodo").value = "";
}


// -----

function remove(){
  TODOs.pop();
  sessionStorage.setItem("Notes", JSON.stringify(TODOs));
  index = 0;
  note.innerHTML = TODOs[index];
}
// -----




