// Constructor functions in JavaScript are regular functions used with the new keyword to create and initialize objects with shared properties and methods. They act as blueprints for creating multiple instances of objects with the same structure and behavior.

// NEW KEYWORD:
// 1. First create empty object {}
// 2. Sets "this" to point to that object
// 3. We can omit the return statement using "new" keyword
// 4. Remember that this key word in a global function points to the window object. It can only point to a declared object when used in a method of a declared object. The new keyword provides for this

function Book (name,author,year) {
  this.name = name;
  this.author = author;
  this.year = year;
  this.info = function () {
    return `The book ${this.name} was written by${this.author} in the year ${this.year}`
  
  };
}

//instances of the constructor function
const book1 =  new Book('jekyll island', 'peter','1897');
console.log(book1)
console.log(book1.info()) 
