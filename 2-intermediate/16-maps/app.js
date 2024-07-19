// -------------------------------------------------------

// Map is a built-in data structure introduced in (ES6) that allows you to store key-value pairs where both the keys and values can be of any data type. It is similar to an object, but with a few key differences:

// -> Keys can be of any data type: Unlike objects, where keys are limited to strings and symbols, Map allows you to use any data type as keys, including numbers, booleans, objects, and even other Map instances.

// -> Maintains insertion order: Map preserves the order of key-value pairs as they were inserted, while object keys may not be guaranteed to be in a specific order.

// -> Iteration: Map provides built-in methods for easy iteration over its elements.

// The syntax to create a Map is as follows:
// const myMap = new Map();

// You can also initialize a Map with an array of key-value pairs using the Map constructor:
// const myMap = new Map([
//   [key1, value1],
//   [key2, value2],
// ]);

// Here, key1, key2, etc., can be any data type, and value1, value2, etc., can be any value associated with the respective keys.

// Map provides various methods for managing and accessing its elements, such as set(), get(), has(), delete(), clear(), and more.

// Map is a powerful data structure in JavaScript, and it provides a flexible and efficient way to manage key-value data with various data types as keys.

// -------------------------------------------------------

const map = new Map();
// console.log(map)

const keyOne = 'Moses';
const keyTwo = {};
const keyThree = function (){};

map.set(keyOne, 'value of key one');
map.set(keyTwo,'value of key two');
map.set(keyThree,'value of key three')

console.log(map.keys())
console.log(map.values())
// console.log(map.delete(keyTwo))
console.log(map.size) 
console.log(map)

// Iterating over a Map
//key and value
for(let [key, value] of map) {
  console.log(`key: ${key} --- value: ${value}`)
} 

// Accessing keys
for (let key of map.keys()) {
  console.log(`keys: ${key}`);
}

//Accessing values
for (let value of map.values()) {
  console.log(`values: ${value}`)
}

// ---------exercise --------------
// 1. Create a new Map
// 2. Set these properties  ("a", "b", "c")
// 3. Set these values (1, 2, 3)
// 4. Get "a" from that map
// 5. Check the size of that map
// 6. Delete the property "b" & then check the size.

const exampleMap = new Map();

let key1 = 'a';
let key2 = 'b';
let key3 = 'c';

exampleMap.set(key1, 1);
exampleMap.set(key2, 2);
exampleMap.set(key3, 3);

console.log(exampleMap.get('a'))
console.log(exampleMap.size)
console.log(exampleMap.delete('b'))
console.log(exampleMap)
