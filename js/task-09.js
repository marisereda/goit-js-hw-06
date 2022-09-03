function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const textColorEl = document.querySelector(".color");
const btnChangeClrEl = document.querySelector(".change-color");

btnChangeClrEl.addEventListener("click", () => {
  bodyEl.style.background = getRandomHexColor();
  textColorEl.textContent = bodyEl.style.background;
});
