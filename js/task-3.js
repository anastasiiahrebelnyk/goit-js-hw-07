const inputEl = document.querySelector('input');
const spanNameEL = document.querySelector("#name-output");

const getInputValue = () => {
    const trimInput = inputEl.value.trim();
    
    if (trimInput === "") {
        return spanNameEL.textContent = "Anonymous";
    }
    if (trimInput !== "") {
        return spanNameEL.textContent = trimInput;
    }
};

inputEl.addEventListener("input", getInputValue);