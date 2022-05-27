const input = document.querySelector("#validation-input");
const correctLength = input.dataset.length;
console.log(correctLength)

input.addEventListener("blur", onInputBlur);

function onInputBlur() {
    if(input.value.trim().length < correctLength || input.value.trim().length > correctLength) {
        input.classList.add("invalid")
    } else {
        input.classList.remove("invalid");
        input.classList.add("valid");
        }
}