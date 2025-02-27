class Animal {
  constructor(name) {
    this.name = name;
  }

  // Abstract method (to be implemented by subclasses)
  // The most common way to enforce abstraction is by defining a method in the base class that throws an error if not overridden in subclasses.
  makeSound() {
    throw new Error(`method makeSound must be implemented`);
  }
}

  //subclass
class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  //Implementing the abstract method
  makeSound() {
    return `woof`
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  // makeSound () {
  //   return `meow`
  // }

}


const dog1 = new Dog ('swifty')
console.log(dog1)
console.log(dog1.name)
console.log(dog1.makeSound())

const cat1 = new Cat ('whiskers')
console.log(cat1)
console.log(cat1.name)
console.log(cat1.makeSound())

// ---------- Define
// In this example, we have an abstract class Animal that contains an abstract method makeSound(). The makeSound() method is declared in the Animal class but doesn't provide an implementation. It's meant to be implemented by subclasses like Dog and Cat.

// The Dog and Cat classes are concrete subclasses that inherit from the Animal class. They implement the abstract method makeSound() with their own specific implementations for making sounds.

// By using abstraction, we define a common interface (makeSound()) that each subclass must implement, while hiding the internal details of how each animal makes its sound. This simplifies the code and allows us to work with animals at a higher level of abstraction, without worrying about the specifics of each animal's sound implementation.