const decrement = document.querySelector("button[data-action='decrement']");
const increment = document.querySelector("button[data-action='increment']");
const value = document.querySelector("#value");
let counterValue = 0;

const decrementClick = () => {
    value.textContent = counterValue -= 1;
    
}

const incrementClick = () => {
    value.textContent = counterValue += 1;
}

decrement.addEventListener("click", decrementClick);
increment.addEventListener("click", incrementClick);

