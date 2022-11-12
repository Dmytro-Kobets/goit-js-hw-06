function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const button = document.querySelector("button");
const color = document.querySelector(".color");

button.addEventListener("click", () =>{
  const currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  color.textContent = currentColor;
});