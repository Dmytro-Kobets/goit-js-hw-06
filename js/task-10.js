function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

let amount = 0;
let boxesArray = [];
const createBoxes = (amount) => {
  let widthAndHeight = boxes.lastChild != null ? boxes.lastChild.offsetWidth : 20;
  
  for(let i=1; i <= amount; i+=1){
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = (widthAndHeight + i*10).toString() + "px";
    box.style.height = (widthAndHeight + i*10).toString()+ "px";
    boxesArray.push(box);
  }
  boxes.append(...boxesArray);
  boxesArray = [];
}

const destroyBoxes = (amount) => {
  for(let i=0; i< amount; i+=1){
    boxes.lastChild && boxes.removeChild(boxes.lastChild); 
  }
}

input.addEventListener('input', () => amount = input.value)
buttonCreate.addEventListener('click', () => createBoxes(amount));  
buttonDestroy.addEventListener('click', () => destroyBoxes(amount));  