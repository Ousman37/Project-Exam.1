// Global variables

const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError_contact_form");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
//console.log(form);
function validateForm3(event) {
  event.preventDefault();

  //console.log("hello");

  if (checkLength(firstName.value, 0) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (checkLength(lastName.value, 3) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  if (checkLength(subject.value, 5) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (validateEmail(email.value, 24) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block"; //subjectError
  }

  if (checkLength(message.value, 0) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
}

form.addEventListener("submit", validateForm3);

function checkLength(value, len) {
  if (value.length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
