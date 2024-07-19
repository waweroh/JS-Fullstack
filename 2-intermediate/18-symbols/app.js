// Symbol is a unique and immutable primitive data type introduced in ECMAScript 6 (ES6). A symbol is often used as an identifier for object properties to avoid potential naming conflicts.

// Unlike strings or numbers, symbols are guaranteed to be unique. When you create a symbol, it is unique and cannot be recreated or changed. This uniqueness ensures that symbols will not collide with other property names, even if they have the same string representation.

// -----------------------
// const mySymbol = Symbol();
// const mySymbol = Symbol("My custom symbol");
// -----------------------

// const mySymbol1 = Symbol();
// const mySymbol2 = Symbol("My custom symbol");

// const obj = {};

// obj[mySymbol1] = "Value 1";
// obj[mySymbol2] = "Value 2";

// console.log(obj); // Output: { [Symbol()] : "Value 1", [Symbol(My custom symbol)] : "Value 2" }
// console.log(obj[mySymbol1]); // Output: "Value 1"
// console.log(obj[mySymbol2]); // Output: "Value 2"

const mySymbol = Symbol('my custom symbol');
console.log(mySymbol)

//comparing symbols
const mySymbol1 = Symbol('name')
const mySymbol2 = Symbol('name')

console.log(mySymbol1 === mySymbol2); //output : false --> symbol returns unique values

//providing symbols to an object
//example 1
const obj = {};
obj[mySymbol1] = 'value one';
obj[mySymbol2] = 'value two';

console.log(obj); // {Symbol(name): 'value one', Symbol(name): 'value two'}

// example 2
const alex = {};
alex.age = 23;
alex['gender'] = 'male'
alex['gender'] = 'female'
alex[mySymbol1] = 'clinton'
alex[mySymbol2] = 'POTUS'

console.log(alex)

//-----------exercise ---------
// 1. Create a symbol provide a value of "foo"
// 2. Check the type of that symbol.
// 3. Create empty object
// 4. Store symbol as the property to that object.
// 5. Iterate over Symbol.

const theSymbol = Symbol('foo');
console.log(typeof theSymbol)

const obj3 = {};
obj3[Symbol('a')] = 'a';

for (let i in obj3) {
  console.log(i);
}
