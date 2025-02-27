// Classes are one of the features introduced in the ES6 version of JavaScript.
// A class is a blueprint for the object. You can create an object from the class.

// You can think of the class as a sketch (prototype) of a house. It contains all the details about the floors, doors, windows, etc. Based on these descriptions, you build the house.

// Since many houses can be made from the same description, we can create many objects from a class.

// Class Declaration

//

// firstName, lastName, age ------> Instance properties

// printInfo ---------------------> Instance method. If you define a method inside the constructor, it becomes an instance method, meaning each object gets its own copy of the function:

// greeting ----------------------> Prototype method.JavaScript automatically adds it to the prototype. This means that all instances of the class reference the same function, rather than each object getting its own copy. Good for memory efficiency.

// Alex and John -------------------> Objects, ---> the instance of a class is an object

// ✔ Use instance properties (this.property) when each object needs a unique value.
// ✔ Use prototype methods (method() {}) when behavior should be shared across instances.

class Person {
  constructor(firstName, lastName, age) { 
    //instance properties ---> unique to each object
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.printInfo = function () {
      return`My name is ${this.firstName} ${this.lastName} and my age is ${this.age} `
    };
  }
  //Prototype methods --> shared among all instances
  greeting () {
    return`Well hello there ${this.firstName} ${this.lastName}`
  }
}

const alex = new Person('Alex', 'John', 45); 
console.log(alex)
console.log(alex.printInfo())
console.log(alex.greeting())

//Inheritance 
class Programmer extends Person {
  constructor(firstName, lastName, age, pl, experience) {
    super(firstName, lastName, age);
    this.pl = pl;
    this.experience = experience;
  }
}
const john = new Programmer('John','Doe',44,'javascript','intermediate')
console.log(john)
console.log(john.greeting())
console.log(john.printInfo())


