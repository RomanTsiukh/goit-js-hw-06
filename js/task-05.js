// Рішення через If
// const input = document.querySelector(`#name-input`);
// const output = document.querySelector("#name-output");

//  input.addEventListener('input', (event) => {
//      if (output.textContent = event.currentTarget.value === "") {
//          output.textContent = "Anonymous"
//     }
//        else {output.textContent = event.currentTarget.value}
//  })



// Рішення через тернарник
const input = document.querySelector(`#name-input`);
console.log(input);

const output = document.querySelector("#name-output");
console.log(output);

input.addEventListener('input', (event) => { 
    output.textContent = event.currentTarget.value.trim() === "" 
        ? "Anonymous" 
        : event.currentTarget.value; 
})



// Рішення через тернарник #2
// const inputEl = document.querySelector('#name-input');
// const outputEl = document.querySelector('#name-output')

// inputEl.addEventListener('input', addInputToOtput);

// function addInputToOtput(event) {
//     inputEl.value.trim() === ""
//     ? outputEl.textContent = "Anonimus"
//     : outputEl.textContent = inputEl.value;
// };


