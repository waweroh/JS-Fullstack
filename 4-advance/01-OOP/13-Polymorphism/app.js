// In JavaScript, polymorphism is typically achieved through method overriding, where a subclass provides its own implementation of a method that is already defined in the parent class.

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    return `make sound`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    return `woof`;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    return `meow`;
  }
}

function animalInfo(animal) {
  console.log(`Name: ${animal.name}`);
  console.log(`Sound: ${animal.makeSound()}`);
}

const cat1 = new Cat("kitty");
animalInfo(cat1);
console.log(cat1.name);
console.log(cat1.makeSound());

const dog = new Dog("Buddy");
animalInfo(dog);

//------------------- Define
// In this example, we have a superclass Animal with a constructor that initializes the name property and a method makeSound() that returns "Unknown sound" by default.

// The subclasses Dog and Cat inherit from Animal and override the makeSound() method with their specific implementations.

// The animalInfo() function takes an Animal object (or any of its subclasses) as a parameter and calls both the name property and the makeSound() method on that object.

// Now, let's see how this demonstrates polymorphism:



// -> When we call animalInfo(dog), the function prints the name of the animal as "Buddy" and the sound as "Woof!". This is because dog is an instance of the Dog class, and the method makeSound() is called from the Dog subclass, overriding the method from the Animal superclass.

// -> When we call animalInfo(cat), the function prints the name of the animal as "Whiskers" and the sound as "Meow!". This is because cat is an instance of the Cat class, and the method makeSound() is called from the Cat subclass, overriding the method from the Animal superclass.

// This behavior illustrates polymorphism, as the animalInfo() function can work with different types of animals (Animal, Dog, or Cat) in a generic way, without knowing the specific subclass. The appropriate method implementation is determined at runtime based on the actual object type passed to the function.

//Polymorphism allows one interface, function, or class to work with different types or behaviors.ie  animalInfo function and makeSound function
