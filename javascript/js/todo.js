const toDoForm = document.getElementById('todo-form');
const toDoList = document.getElementById('todo-list');
const toDoInput = document.querySelector("#todo-form input");

const toDos = [];
const TODO_KEYS = "todos";


function saveToDos() {
  localStorage.setItem(TODO_KEYS, JSON.stringify(toDos));
}


function deleteToDo(event) {
  const li = event.target.parentElement; // parent node we want to delete
  li.remove();
}


function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
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
  toDos.push(newToDo);
  toDoInput.value = "";
  paintToDo(newToDo);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODO_KEYS);


if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(paintToDo);

