function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const textColorEl = document.querySelector(".color");
const btnChangeClrEl = document.querySelector(".change-color");

btnChangeClrEl.addEventListener("click", () => {
  const color = getRandomHexColor();
  document.body.style.background = color;
  textColorEl.textContent = color;
});
