// When we call the forEach helper we pass in anonymous callback function,
// This function gets called one time for every element in the ARRAY
// Whatever is inside the function that logic happens

let colors = ["teal", "blue", "red", "green"];

// for (let i=0; i<colors.length; i++) {
//   console.log(colors[i]);
// }

//alternative
colors.forEach((color) => console.log(color)) //anonymous arrow function

//traditional func syntax
// colors.forEach(function(color) {
//   console.log(color)
// })


// example 2
const words = ["hello", "bird", "table", "football", "pipe", "code"];
const capWords = words.forEach((word, index, arr) => {
  arr[index] = word[0].toUpperCase() + word.substring(1)
  // for each index in the array should have a capital letter then rest og the string
})
console.log(words)


//using substring
// let word = "hello";
// let result = word.substring(1);
// console.log(result); // Outputs: "ello"

//----------exercise-------

// 1. Create an array of numbers.
let numbers = [1,2,3,4,5,6]

// 2. Create a variable to hold the sum.
let sum = 0;

// 3. Create the adder function which takes the parameter of number & add that with sum variable.
function adder (number) {
  return sum += number;
}

// 4. Loop over the array, incrementing the sum variable except this time a function gets referenced in the forEach
// numbers.forEach((number) => sum += number);
numbers.forEach(adder);


// 5. print the sum variable.
console.log(sum)
