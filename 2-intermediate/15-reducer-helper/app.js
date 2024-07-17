// The "reducer" method executes a reducer function for array element.
// The "reducer" method returns a single value: the function's accumulated result.
// The "reducer" method does not execute the function for empty array elements.
// The "reducer" method does not change the original array.

// example 1
numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const sum = numbers.reduce((accumulator, arrNum) => {
  // console.log(`initial:${accumulator}`)
  // console.log(`Array elements:${arrNum}`)
  return accumulator + arrNum
}, 10)
console.log(sum)


// example 2
const people = [
  {
    name: "Moses",
    age: 25,
  },
  {
    name: "griffin",
    age: 27,
  },
  {
    name: "Millie",
    age: 40,
  },
];
//get oldest guy

const oldestAge = people.reduce((prev, curr ) =>{ 
  console.log(`initial:${prev}`);
  console.log(`age:${curr.age}`);
  return (curr.age > prev ? curr.age : prev )},0)
  // if (curr.age > prev) {
  //   return curr.age;
  // } else {
  //   return prev;
  // }},0)
//curr is given .age  since it holds the age value
// prev starts from 0 and hence cannot hold the .age property

console.log(oldestAge);

// Example 3
const words = [
  "apple",
  "banana",
  "orange",
  "banana",
  "apple",
  "orange",
  "apple",
  "grape",
];

const wordFrequency = words.reduce((frequencyMap, word) => {
  // frequencyMap[word] = frequencyMap[word] || 1; //{grape: 1, apple: 1, orange: 1, banana: 1} sets the frequency of words to one
 frequencyMap[word] = (frequencyMap[word] || 0) + 1; //{grape: 2, apple: 4, orange: 3, banana: 3}
  return frequencyMap;
}, {})
console.log(wordFrequency);

// frequencyMap is {} (an empty object).
// First Iteration:

// word is "hello".
// frequencyMap["hello"] is undefined, so (frequencyMap["hello"] || 0) evaluates to 0.
// Incrementing by 1 gives 1.
// frequencyMap becomes { hello: 1 }.
// Second Iteration:

// word is "world".
// frequencyMap["world"] is undefined, so (frequencyMap["world"] || 0) evaluates to 0.
// Incrementing by 1 gives 1.
// frequencyMap becomes { hello: 1, world: 1 }.
// Third Iteration:

// word is "hello".
// frequencyMap["hello"] is 1, so (frequencyMap["hello"] || 0) evaluates to 1.
// Incrementing by 1 gives 2.
// frequencyMap becomes { hello: 2, world: 1 }

//----------example----------

// -------------------------------------
// Write a function called calculateProduct that takes an array of numbers as an argument and returns the product of all the numbers in the array.
// Write the calculateProduct function using the reduce() method to achieve this task.

const calculateProduct = (arr) => {
  const product = arr.reduce((acc, num) => {
    return acc * num
  }, 1)
  return product
}
const numbersArr = [2, 3, 4, 5];

const product = calculateProduct(numbersArr);
console.log(product); // 120