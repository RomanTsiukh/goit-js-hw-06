const bodyEl = document.querySelector("body");
const btnEl = document.querySelector("button");
const spanEl = document.querySelector("span");

btnEl.addEventListener('click', onChangeColor)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeColor () {
  const newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;
  spanEl.textContent = newColor;
}


