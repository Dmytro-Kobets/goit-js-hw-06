const input = document.querySelector('#validation-input');

const validation = () => {
    if(input.value.length > input.dataset.length || input.value.length == 0) {
        input.classList.add("invalid");
        input.classList.remove("valid");
    } else {
        input.classList.add("valid");
        input.classList.remove("invalid");
    }
};

input.addEventListener("blur", validation);