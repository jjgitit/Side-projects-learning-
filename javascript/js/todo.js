const toDoForm = document.getElementById('todo-form');
const toDoList = document.getElementById('todo-list');
const toDoInput = document.querySelector("#todo-form input");

let toDos = [];
const TODO_KEYS = "todos";


function saveToDos() {
  localStorage.setItem(TODO_KEYS, JSON.stringify(toDos));
}


function deleteToDo(event) {
  const li = event.target.parentElement; // parent node we want to delete
  console.log(li.id);
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  saveToDos();
}


function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = '❌';
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value; //saving the todo input before emptying it
  const newToDoObj = {
    text : newToDo,
    id : Date.now(),
  };
  toDos.push(newToDoObj);
  toDoInput.value = "";
  paintToDo(newToDoObj);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODO_KEYS);


if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(paintToDo);
  toDos = parsedToDos;
}
