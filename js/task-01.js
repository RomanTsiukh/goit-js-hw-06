// Вариант №1
const ulCategories = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${ulCategories.length}`);

ulCategories.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`); 
    console.log(`Elements: ${item.lastElementChild.children.length}`);
  });



