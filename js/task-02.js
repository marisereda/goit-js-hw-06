const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsEl = document.querySelector("#ingredients");
const className = "item";

function createListItem(item, className) {
  const itemEl = document.createElement("li");
  itemEl.textContent = item;
  itemEl.classList.add(className);
  return itemEl.outerHTML;
}

function getMarkUp(items, className) {
  const markUp = items.reduce((acc, item) => {
    acc += createListItem(item, className);
    return acc;
  }, "");
  return markUp;
}

ingredientsEl.innerHTML = getMarkUp(ingredients, className);
