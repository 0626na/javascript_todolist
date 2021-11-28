const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todolist");

const TODOLIST_KEY = "todolist";
let todos = [];
const loadedTodos = JSON.parse(localStorage.getItem(TODOLIST_KEY));

function addTodo(submitEvent) {
  submitEvent.preventDefault();
  const todo = {
    todo: todoInput.value,
    id: Date.now(),
  };

  todoInput.value = "";
  makeTodo(todo);
  savedTodo();
}

function deleteTodo(clickEvent) {
  const todo = clickEvent.target.parentElement;
  todos = todos.filter((data) => data.id !== parseInt(todo.id));
  console.log(todos);
  savedTodo();
  todo.remove();
}

function makeTodo(todo) {
  const newList = document.createElement("li");
  const deleteButton = document.createElement("button");

  deleteButton.classList.add("deletebutton");
  newList.classList.add("todo");
  deleteButton.innerText = "❌";
  deleteButton.addEventListener("click", deleteTodo);
  newList.id = todo.id;
  newList.innerText = todo.todo;
  newList.appendChild(deleteButton);
  todoList.appendChild(newList);
  todos.push(todo);
}

function savedTodo() {
  localStorage.setItem(TODOLIST_KEY, JSON.stringify(todos));
}

if (loadedTodos !== null) {
  loadedTodos.forEach((todo) => makeTodo(todo));
}

todoForm.addEventListener("submit", addTodo);
