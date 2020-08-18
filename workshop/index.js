const form = document.querySelector("form");

form.setAttribute("novalidate", true);
form.addEventListener("submit", (event) => {
  const allInputsValid = form.checkValidity();
  if (!allInputsValid) return event.preventDefault();
});

const inputs = form.querySelectorAll("input");
//const inputArray = Array.from(inputs);
//console.log(inputArray[0]);
// for (let i = 0; i <= inputArray.length; i++) {
//   console.log(i);
//   inputArray[i].setAttribute("aria-invalid", false);
// }

// for (let i = 0; i <= inputArray.length; i++) {
//   inputArray[i].addEventListener("invalid", handleInvalidInput);
// }
inputs.forEach((input) => {
  input.setAttribute("aria-invalid", false);
  input.addEventListener("invalid", handleInvalidInput);
  input.addEventListener("input", clearInput);
});

function handleInvalidInput() {
  event.target.setAttribute("aria-invalid", true);
  console.log(event.target.validationMessage);
  const errorId = event.target.id + "Error";
  const errorContainer = form.querySelector("#" + errorId);
  errorContainer.textContent = event.target.validationMessage;
}

function clearInput() {
  event.target.setAttribute("aria-invalid", false);
  const errorId = event.target.id + "Error";
  const errorContainer = form.querySelector("#" + errorId);
  errorContainer.textContent = "";
}
