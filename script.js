// ort wo man die todos speichern kann

const todos = [];

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
  render();
}

const addBtn = document.querySelector("#add");

addBtn.addEventListener("click", (event) => {
  // function addTodo ausführen
  addTodo();
  render();
});
// text ausgeben

function render() {
  // alles was im input feld ist, ausgeben
  const todoList = document.querySelector("#li-todo");
  todoList.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const li = document.createElement("li");
    li.innerText = todos[i].description;
    todoList.appendChild(li);
  }
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
  render();
}

// delete button erzeugen

const delBtn = document.querySelector("#btn-delete");

//function delete ausführen

delBtn.addEventListener("click", (e) => {
  deleteInput();
  render();
});

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
