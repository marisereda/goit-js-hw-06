let counterValue = 0;
const btnDecrementEl = document.querySelector("[data-action = 'decrement']");
const btnIncrementEl = document.querySelector("[data-action = 'increment']");
const spanEl = document.querySelector("#value");

btnDecrementEl.addEventListener("click", decrement);
btnIncrementEl.addEventListener("click", increment);

function decrement() {
  counterValue -= 1;
  spanEl.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  spanEl.textContent = counterValue;
}
