 const btnAddToDo = document.querySelector("#add");
 const btnDelete = document.querySelector("#btn-delete");
 

 btnAddToDo.addEventListener("click", addTodo);

 function addTodo(event) {
     event.preventDefault();
 const todoField = document.querySelector("#todo");
 const todo = todoField.value;
 const listEl = document.createElement("li");
 listEl.innerHTML= todo;
 li.append(listEl);
 todoField.value = "";
 todoField.focus();
 }

let all = document.querySelector("#all");
let open = document.querySelector("#open");
let done = document.querySelector("#done");

all.addEventListener("click", control);
open.addEventListener("click", control);
done.addEventListener("click", control);

let checkBoxCount = 0;

let lastClickedElement

function control(event) {
    if (event.target.checked) {
        checkBoxCount++
    } else {
        checkBoxCount--
    }
    
    if (checkBoxCount === 2) {
        checkBoxCount--
        lastClickedElement.checked = false;
    }
    lastClickedElement = event.target;
}