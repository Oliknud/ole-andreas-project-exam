const form = document.querySelector("#contact-form");
const submit = document.querySelector("#submit-btn");
const fullName = document.querySelector("#name");
const nameError = document.querySelector(".nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector(".subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector(".emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector(".messageError");
const regex = /\S+@\S+\.\S+/;

function validate() {
    event.preventDefault();

    if (fullName.value.trim().length < 5) {
        nameError.innerHTML = "min. 5 characters";
    } else {
        nameError.innerHTML = "";
    }
    
    if (!email.value.match(regex)) {
        emailError.innerHTML = "must be a valid email address";
    } else {
        emailError.innerHTML = "";
    }

    if (subject.value.trim().length < 15) {
        subjectError.innerHTML = "min. 15 characters";
    } else {
        subjectError.innerHTML = "";
    }
    
    if (message.value.trim().length < 25) {
        messageError.innerHTML = "min. 25 characters";
    } else {
        messageError.innerHTML = "";
    }
}

form.addEventListener("submit", validate);