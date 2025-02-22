// Every javascript object has a anonymous property called prototype
// Remember functions & arrays are also a object
// m Arrays inherit powerful methods from Array.prototype like .map(), .filter(), and .forEach().
// m  functions being objects, functions have built-in methods like .call(), .apply(), and .bind(), which allow dynamic function invocation.
// that prototype will be the parent of that object, prototype property is object by itself, which have some special properties & methods
//prototype is the parent and an object
// m In javascript anytime we create an object two objects are created the first is the object initiated the second one is the prototype object in the console which is the parent and has a lot of properties and methods 

// We can check the prototype of something in 3 ways:
// --> obj.__proto__
// --> obj.constructor.prototype
// --> Object.getPrototypeOf(a)

//object
const obj = {}
console.log(obj)
console.log(obj.__proto__);
console.log(Object.getPrototypeOf(obj));

//array
const arr  = []
console.log(arr);

//function
function Person (firstName, lastName, pl) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.pl = pl;
}

const contender1 = new Person("Daniel", "Comier", "python")
console.log(contender1.__proto__ );
console.log(contender1.__proto__.__proto__);