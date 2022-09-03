function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("#controls input");
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

btnCreateEl.addEventListener("click", createElement);
btnDestroyEl.addEventListener("click", destroyElement);

function createElement() {
  destroyElement();
  console.log(typeof inputEl.value);
  let markUp = "";
  let widthElement = 30;
  let heightElement = 30;
  for (let i = 0; i < Number(inputEl.value); i += 1) {
    markUp += `<div style="width:${widthElement}px; height:${heightElement}px; margin-top: 10px; border: 1px solid grey; background-color:${getRandomHexColor()}"></div>`;
    widthElement += 10;
    heightElement += 10;
  }

  boxesEl.insertAdjacentHTML("afterbegin", markUp);
}

function destroyElement() {
  boxesEl.innerHTML = "";
}
