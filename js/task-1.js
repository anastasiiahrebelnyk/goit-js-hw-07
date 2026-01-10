const categoriesQuantity = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesQuantity.length}`);

categoriesQuantity.forEach(category => {
    const titles = category.querySelector('h2');
    const itemTitle = titles.textContent;
    console.log(`Category: ${itemTitle}`);

    const elements = category.querySelectorAll('ul li');
    const elementsCount = elements.length;
    console.log(`Elements: ${elementsCount}`);
});