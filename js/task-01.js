const categoriesEl = document.querySelectorAll("#categories .item");

// ------------------------------------------------------------------
function getNumberOfCategories(categoryList) {
  return `Number of categories: ${categoryList.length}\n\n`;
}

// ------------------------------------------------------------------
function findHeader(categoryList) {
  let headerEl;
  let itemEl;
  categoryList = [...categoryList];

  const result = categoryList.reduce((acc, category) => {
    headerEl = category.querySelector("h2");
    itemEl = category.querySelectorAll("li");
    acc += `Category: ${headerEl.outerText}\nElements: ${itemEl.length}\n\n`;
    return acc;
  }, "");
  return result;
}

console.log(getNumberOfCategories(categoriesEl));
console.log(findHeader(categoriesEl));
