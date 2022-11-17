// ort wo man die todos speichern kann

let todos = [];
let currentFilter = "all";
const filterWrapper = document.querySelector(".filter-items");

filterWrapper.addEventListener("change", (event) => {
  currentFilter = event.target.id;
  render();
});

function updateLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  if (localStorage.getItem("todos")) {
    const todosLs = localStorage.getItem("todos");
    todos = JSON.parse(todosLs);
  }
}
getTodos();

// function für neue todos

function addTodo() {
  // neues todo erzeugen
  const input = document.querySelector("#new-todo");
  todos.push({
    description: input.value,
    done: false,
    id: Date.now(),
  });
  input.value = "";
  input.focus();
}

const addBtn = document.querySelector("#add");

addBtn.addEventListener("click", (event) => {
  // function addTodo ausführen
  addTodo();
  updateLocalStorage();
  render();
});
// text ausgeben

function render() {
  // alles was im input feld ist, ausgeben
  const todoList = document.querySelector("#li-todo");
  todoList.innerHTML = "";
  let todoData = todos;

  if (currentFilter === "done") {
    todoData = todoData.filter((todo) => todo.done === true);
  } else if (currentFilter === "open") {
    todoData = todoData.filter((todo) => todo.done === false);
  }
  for (let i = 0; i < todoData.length; i++) {
    const todo = todoData[i];
    const li = document.createElement("li");

    // class von html mit javascript verbinden
    li.className = "li2";
    li.dataset.id = todo.id;
    li.addEventListener("change", () => updateDone(todo.id));
    const label = document.createElement("label");
    const input = document.createElement("input");
    if (todo.done === true) {
      input.checked = "checked";
    }
    input.type = "checkbox";
    li.append(input, label);
    label.innerText = todo.description;
    todoList.appendChild(li);
  }
}

function updateDone(todoid) {
  const currentTodo = todos.find((todo) => todo.id === todoid);
  currentTodo.done = !currentTodo.done;
  updateLocalStorage();
}

// function delete

function deleteInput() {
  // todos[0].done = true; // test dummy
  // über alle Elemente for schleife
  for (let i = 0; i < todos.length; i++) {
    // prüfen ob done === true, wenn ja splice() sonnst nichts tun
    if (todos[i].done === true) {
      todos.splice(i, 1);
    }
  }
  updateLocalStorage();
  render();
}

// delete button erzeugen

const delBtn = document.querySelector("#btn-delete");

//function delete ausführen

delBtn.addEventListener("click", (e) => {
  deleteInput();
  updateLocalStorage();
  render();
});

// radio buttons

let all = document.querySelector("#all");
let open = document.querySelector("#open");
let done = document.querySelector("#done");

all.addEventListener("click", control);
open.addEventListener("click", control);
done.addEventListener("click", control);

let checkBoxCount = 0;

let lastClickedElement;

function control(event) {
  if (event.target.checked) {
    checkBoxCount++;
  } else {
    checkBoxCount--;
  }
  if (checkBoxCount === 2) {
    checkBoxCount--;
    lastClickedElement.checked = false;
  }
  lastClickedElement = event.target;
}

render();
