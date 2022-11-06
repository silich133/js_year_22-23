const div_el = document.querySelector(".content");
const titles = document.querySelectorAll("h1");
console.dir(titles);
console.dir(div_el);

//To array methods:
// console.log(Array.from(titles));
// console.log([...titles]);

//classList
div_el.classList.add("article", "custom");
div_el.classList.remove("article");
console.log(div_el.classList);
