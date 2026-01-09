function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handleClick(event) {
  colorEL.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = colorEL.textContent;
}

const changeButtonEl = document.querySelector(".change-color");
changeButtonEl.addEventListener("click", handleClick);
const colorEL = document.querySelector(".color");
const bodyEl = document.querySelector("body");
