const divEl = document.querySelector("#controls");
const inputEl = document.querySelector("input");

divEl.lastElementChild.addEventListener("click", funCreat)
divEl.Child[1].addEventListener("click", funDestroy)

// funCreat = createBoxes(amount) 
// function createBoxes(amount) {

// }


// function funDestroy() {

// }




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
