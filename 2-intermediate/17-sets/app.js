// -------------------------------------------------
// Set is a built-in data structure introduced in (ES6) that represents a collection of unique values. Unlike arrays, Set allows you to store only unique values, which means duplicate values are automatically removed. Each value can occur only once within a Set.

// Set objects are useful when you need to store a list of unique elements and quickly check for the existence of a specific value.

// const mySet = new Set(); // empty set
// const initialValues = [1, 2, 3];
// const mySet = new Set(initialValues); // list added

// const mySet = new Set();

// mySet.add("apple");
// mySet.add("banana");
// mySet.add("orange");
// mySet.add("apple"); // Duplicate value; will be ignored

// console.log(mySet); // Set(3) { 'apple', 'banana', 'orange' }

// console.log(mySet.has("banana")); // true
// console.log(mySet.has("grape")); // false

// mySet.delete("orange");
// console.log(mySet); // Set(2) { 'apple', 'banana' }

// mySet.clear();
// console.log(mySet); // Set(0) {}
// -------------------------------------------------

const initialValues = [1, 2, 3, 4, 4];
const mySet = new Set(initialValues);

console.log(mySet);

const myMoviesSet = new Set();

myMoviesSet.add('black panther')
myMoviesSet.add('Red')
myMoviesSet.add('Snow white')
myMoviesSet.add('the master')
myMoviesSet.add('the master')

console.log(myMoviesSet);
console.log(myMoviesSet.has('Red'))
myMoviesSet.delete('Red')
console.log(myMoviesSet);
// myMoviesSet.clear()
console.log(myMoviesSet)

//iterating over sets
for (let item of myMoviesSet) {
  console.log(item)
}

//-----------example ------------
// 1. Create a Set name (letters)
// 2. Add ("a", "b", "c") as properties
// 3. Add ("a", "b", "c") as values
// 4. Iterate over Set & log the values.

const letters = new Set()

letters.add('a');
letters.add('b');
letters.add('c');

const a = 'a';
const b = 'b';
const c = 'c';

for (let value of letters) {
  console.log(value);
}




