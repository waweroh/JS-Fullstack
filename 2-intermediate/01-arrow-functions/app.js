//traditional function
function greet (username) {
  return `Hello ${username}`
}
console.log(greet("John"));

//arrow function
greet = (username) => {
  return `Hello ${username}`
}

console.log(greet('Waweru'))

//FUNCTION expression using arrow function
const greet2 = (username) => {
  return `hello there ${username} this is a function expression using arrow func`
}
console.log(greet2('daddy'))

//arrow function without return keyword and () on the parameter since it can be omitted when its only one
const double = n => n * 2;
console.log(double(10))

//exercise
// REFACTOR THIS CODE TO ES6 ARROW FUNCTIONS.

// setTimeout(function () {
//   console.log("Hello");
//   setTimeout(function () {
//     console.log("Hey");
//     setTimeout(function () {
//       console.log("Namaste");
//       setTimeout(function () {
//         console.log("Hi");
//         setTimeout(function () {
//           console.log("Bonjour");
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

//this code utilizes anonymous arrow functions
setTimeout( () => {
  console.log("Hello");
  setTimeout( () => {
    console.log("Hey");
    setTimeout( () => {
      console.log("Namaste");
      setTimeout( () => {
        console.log("Hi");
        setTimeout( () => {
          console.log("Bonjour");
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);
 
