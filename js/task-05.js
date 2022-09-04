const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", updateOutput);

function updateOutput() {
  outputEl.textContent = !inputEl.value ? "Anonymous" : inputEl.value;
}
