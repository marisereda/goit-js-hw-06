const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsEl = document.querySelector("#ingredients");
const className = "item";

const fragment = document.createDocumentFragment();
ingredients.forEach((item) => {
  fragment.append(createListItem(item, className));
});
ingredientsEl.append(fragment);

function createListItem(text, className) {
  const itemEl = document.createElement("li");
  itemEl.textContent = text;
  itemEl.classList.add(className);
  return itemEl;
}
