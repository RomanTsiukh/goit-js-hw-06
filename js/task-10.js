const divEl = document.querySelector("#controls");
const inputEl = document.querySelector("input");
const boxesEl = document.querySelector("#boxes")

// const valueEl = inputEl.datalist.option.value;
// console.log(valueEl)

divEl.lastElementChild.addEventListener("click", funDestroy)
const alastEl = divEl.lastElementChild
alastEl.previousElementSibling.addEventListener("click", createBoxes)
    let sizewidth = 30;
    let sizehight = 30;

function createBoxes() {
  const div = document.createElement("div");
        div.style.backgroundColor = getRandomHexColor();
        div.style.height = sizehight + "px";
        div.style.width = sizewidth + "px";
     
      boxesEl.appendChild(div)
      sizewidth += 10;
      sizehight += 10;
}

function funDestroy() {
  boxeElremove()
}




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
