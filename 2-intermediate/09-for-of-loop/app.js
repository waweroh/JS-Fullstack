// The "for...of" loop that provides a concise and easy way to loop over elements in iterable objects like arrays, strings, maps, sets, and more.
// It allows you to iterate directly over the values of the elements, rather than dealing with their indices or keys, which makes the code more readable and less error-prone.
//Not used in objects not good with k:v pairs
//syntax : for (variable of iterable) {...}

//array
let peoples = ['john', 'peter','James', 'cindy']
for (let people of peoples) {
  console.log(people)
}

//string
let string = 'pandemonium'
for (let char of string) {
  console.log(char)
}

//----------exercise--------
// Iterate over "array1" & log the values using for of loop.

const array1 = ["a", "b", "c"];

for (const elements of array1) {
  console.log(elements);
}
