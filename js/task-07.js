// Рішення з =>
const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", (event) => {
    textEl.style.fontSize = event.currentTarget.value + "px"
})


// Рішення з function
// const inputEl = document.querySelector("#font-size-control");
// const textEl = document.querySelector("#text");

// inputEl.addEventListener("input", size)

// function size (event) {
//     textEl.style.fontSize = event.currentTarget.value + "px";
// }


