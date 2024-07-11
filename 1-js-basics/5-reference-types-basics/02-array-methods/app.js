const fruits = ['apple', 'orange','mango', 'pineapple','grapes'];
const moreFruits = ['strawberry', 'guava','pomegranate'];

//concat
const totalFruits = fruits.concat(moreFruits);
console.log(totalFruits);

//push
fruits.push('banana')
console.log(fruits)

//pop
fruits.pop()
console.log(fruits);

//removes first element from the array
fruits.shift();
console.log(fruits);
console.log(fruits.shift()); //prints first element in the array

//adds the element to the first index of the array
fruits.unshift('banana'); //
console.log(fruits);
console.log(fruits.unshift('peanuts'));
console.log(fruits);

const pl = ['javascript', 'css', 'php', 'python'];
const numbers = [4, 5, 3, 1, 2];
//include 
console.log(pl.includes('python'));

//join
console.log(pl.join(' and '));

//reverse
console.log(pl.reverse());

//slice
console.log(pl.slice(0,2)) // py, php
 
//sort 
console.log(numbers.sort())



