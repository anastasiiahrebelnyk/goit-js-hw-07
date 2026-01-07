const categoriesQuantity = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesQuantity.length}`);


const item = [...document.querySelectorAll('.item h2')];
console.log(item);

const liRefs = document.querySelectorAll('.item li');
console.log(`Elements: ${liRefs.length}`);



for (const el of item) {
console.log(`Category: ${el.textContent}`);
const liRefs = document.querySelectorAll('.item li');
    console.log(`Elements: ${liRefs.length}`);

}


// for (const ref of liRefs) {
//     console.log(`Elements: ${ref.length}`);

// }

// const liRefs = [...document.querySelectorAll('.item li')];
// console.log(liRefs.length);

// for (const el of liRefs) {
// console.log(`Elements: ${el.textContent}`);

// }




// const refs = {
// const categoriesQuantity = document.querySelectorAll('.item'),

// }


