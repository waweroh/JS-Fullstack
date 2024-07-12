// Enhanced object literals, introduced in ECMAScript 6 (ES6), are a set of 
//enhancements to the syntax for defining objects in JavaScript. These enhancements 
//make it more convenient and concise to define object properties and methods

const user = (theName, age, work) => {
  return {  //return object
    // theName: theName,
    // age: age,
    // work: work,
    // traditional function

    // the enhancement
    theName,
    age,
    work,
    intro: () => {
      console.log(`I'm ${theName} age is ${age} I work as a${work}`)
    }
  };
}
const worker = user('Beatrice', 23, 'Agent');
const worker2 = user('john', 28, 'designer')
console.log(worker)
console.log(worker2.intro())

// exercise

// -------------------------------
// REFACTOR ES5 CODE TO ES6 (Enhanced Object Literals)
// ES5 code
// var a = 1,
//   b = 2,
//   c = 3;
// obj = {
//   a: a,
//   b: b,
//   c: c,
// };

// obj.a = 1, obj.b = 2, obj.c = 3

//ES6 syntax
const a = 1,
  b = 2,
  c = 3;
obj = {
  a,
  b,
  c,
};

obj.a = 1, obj.b = 2, obj.c = 3
console.log(obj.a);

// ES5 code
// var lib = {
//   sum: function (a, b) {
//     return a + b;
//   },
//   mult: function (a, b) {
//     return a * b;
//   },
// };

// console.log(lib.sum(2, 3)); // 5
// console.log(lib.mult(2, 3)); // 6

// ES6 code
const lib = {
  sum: (a, b) => a + b,
 
  mult: (a, b) => a * b,
};

console.log(lib.sum(2, 3)); // 5
console.log(lib.mult(2, 3)); // 6

//ES5
// -------------------------------
// function getPersionES5(name, age, height) {
//   return {
//     name: name,
//     age: age,
//     height: height,
//   };
// }

// getPersionES5("Zachary", 23, 195);
// Expected output: { name: 'Zachary', age: 23, height: 195 }

// ES6
// -------------------------------
const getPersonES6 = (name, age, height) => {
  return {    //an obj
    name,
    age,
    height,
  };
}

console.log(getPersonES6("Zachary", 23, 195));
// Expected output: { name: 'Zachary', age: 23, height: 195 }