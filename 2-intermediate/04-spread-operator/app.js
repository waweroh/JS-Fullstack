// The spread operator is a new addition to the set of operators in JavaScript ES6.
// It takes in an iterable (e.g an array) and expands it into individual elements.
// The spread operator is commonly used to make shallow copies of JS objects.
// Using this operator makes the code concise and enhances its readability.

// is used with arrays, functions and objects

//functions
function giveme4 (a,b,c,d) {
  console.log('a', a)
  console.log('b', b)
  console.log('c', c)
  console.log('d', d)
}

const colors = ['red', 'green', 'blue', 'yellow']
giveme4(...colors);//a red  b green c blued yellow
//the spread operator spread the colors out to individual elements

//arrays
const strNum  = ['one', 'two', 'three', 'four']
const moreNum = ['five', 'six', 'seven', 'eight']
const concat = [...strNum , ...moreNum] //converts to one array

console.log(concat) //['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']

  //ex2
let people = ['john', 'fred', 'jordan']
const allPeople = ["kumar",...people,'alvis' ]
console.log(allPeople) // ['kumar', 'john', 'fred', 'jordan', 'alvis']

//objects using spread operator

const obj1 = {x:1, y:2}
const obj2 = {z:3,a:4,b:5}
const obj3 = {...obj1, ...obj2}
console.log(obj3) //{x: 1, y: 2, z: 3, a: 4, b: 5}

  //ex2
let person = {
  name: 'John',
  age: 34,
  gender: 'male',
};

const clone = {...person, work: 'programmer','location': 'kahawa'}
console.log(clone) //{name: 'John', age: 34, gender: 'male', work: 'programmer', location: 'kahawa'}
console.log(person) //{name: 'John', age: 34, gender: 'male'}

//-------exercise---------
// 1. Make a clone of "arr, arr2" by using spread operator
// 2. Make a clone of "user" object using spread operator

// 1.
let arr = [1, 2, 3];
let arr2 = [4, 5];
let concatArr = [...arr, ...arr2]
console.log(concatArr)

//2.
const user = {
  name: 'Jen',
  age: 22,
};
let userClone = {...user}
console.log(userClone)

