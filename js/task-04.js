const counterValue = document.querySelector(`#value`)
// console.log(counterValue);

const buttonDecrementEl = document.querySelector(`#counter`).firstElementChild;
// console.log(buttonDecrementEl);

const buttonIncrementEl = document.querySelector(`#counter`).lastElementChild;
// console.log(buttonIncrementEl);

let countNumber = Number(counterValue.textContent);

buttonDecrementEl.addEventListener(`click`, () => {
    console.log(countNumber -= 1)
});

buttonIncrementEl.addEventListener(`click`, () => {
    console.log(countNumber += 1)
});

