const categoryEls = document.querySelectorAll("#categories .item");

// ------------------------------------------------------------------
function printNumberOfCategories(categoryList) {
  console.log(`Number of categories: ${categoryList.length}\n\n`);
}

// ------------------------------------------------------------------
function printCategories(categoryList) {
  [...categoryList].forEach((category) => {
    const headerEl = category.querySelector("h2");
    const itemEl = category.querySelectorAll("li");
    console.log(`Category: ${headerEl.outerText}\nElements: ${itemEl.length}\n\n`);
  });
}

printNumberOfCategories(categoryEls);
printCategories(categoryEls);
