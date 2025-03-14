// Prototypal inheritance is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects. It is a fundamental concept in the language and is based on the prototype model. In prototypal inheritance, objects can serve as prototypes for other objects, forming a hierarchical chain of inheritance.

// In JavaScript, every object has an internal property called [[Prototype]] (often referred to as __proto__), which points to its prototype object. When you access a property or method on an object, and that property or method is not found in the object itself, JavaScript looks for it in the object's prototype (and further up the prototype chain, if needed) until it finds the property or reaches the top of the prototype chain, which is usually the Object.prototype.

// // Parent constructor function

function Animal(name) {
  this.name = name
}

Animal.prototype.sound = function() {
  return 'Animal SOUND';
};

const animal1 = new Animal("Frog");
console.log(animal1.sound());

function Dog(name,breed) {
  this.breed = breed;
  this.name = name;
}
// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
Dog.prototype = Object.create(Animal.prototype)

Dog.prototype.bark = function() {
  return "Woof"
}

const dog1 = new Dog('Buddy', 'pitbull')
console.log(dog1);
console.log(dog1.bark());
console.log(dog1.sound());
