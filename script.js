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
    
    if (checkBoxCount === 3) {
        checkBoxCount--
        lastClickedElement.checked = false;
    }
    lastClickedElement = event.target;
}
console.log(control());