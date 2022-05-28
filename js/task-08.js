const formEl = document.querySelector(".login-form");
const buttonEl = document.querySelector("button");

formEl.addEventListener('submit', onFormSubmit)

function onFormSubmit (event) {
   event.preventDefault();
   const {elements: { email, password }} = event.currentTarget;

   if(email.value === "" || password.value === "") {
        alert("All fields must be fills")
   } 

    console.log(`{${email.value} ${password.value}}`)
    event.currentTarget.reset();
}   

