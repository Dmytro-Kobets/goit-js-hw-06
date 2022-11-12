const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const input = () => nameOutput.textContent = nameInput.value || "Anonymous";

nameInput.addEventListener("input", input);

