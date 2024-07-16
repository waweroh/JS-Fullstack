// The find() method is another built-in array helper in JavaScript that allows you to find the first element in
// an array that matches a specific condition. It returns the value of the first element that satisfies the given 
// testing function, or undefined if no element is found.

const peoples = [
  { name: "huxn", age: 17 },
  { name: "john", age: 18 },
  { name: "alex", age: 20 },
  { name: "jimmy", age: 30 },
  { name: "alex", age: 30 },
];
const findAlex = peoples.find((person) => person.name === 'alex')
console.log(findAlex) // {name: 'alex', age: 20} returns only the first result
const findAleki  = peoples.filter(person => person.name === 'alex')
console.log(findAleki)// {name: 'alex', age: 20}, {name: 'alex', age: 30} -- > returns all results of alex

//----------exercise---------
//1.

// 1. Iterate over "ages" array
// 2. Print only those ages which is greater then 18
const ages = [3, 10, 18, 20, 30];
function checkAdult (age) {
  return age > 18
}
const isAdult = ages.find(checkAdult)
console.log(isAdult) //returns the first greater than 18 only

//2.

// -------------------------------
// BONUS => REFACTOR
// let products = [
//   { name: "Checkers", category: "Toys" },
//   { name: "Harry Potter", category: "Books" },
//   { name: "iPhone", category: "Electronics" },
//   { name: "Learn PHP", category: "Books" },
// ];
// let product;

// for (let i = 0; i < products.length; i++) {
//   if (products[i].category === "Books") {
//     product = products[i];
//     break;
//   }
// }
// console.log(product);

// -------------------
let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iPhone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];

const product = products.find((product) => product.category === "Books");
console.log(product);
// -------------------
