const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const changeFontSize = () => (textEl.style.fontSize = `${inputEl.value}px`);

changeFontSize();
inputEl.addEventListener("input", changeFontSize);
