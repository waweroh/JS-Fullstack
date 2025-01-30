// Create a person object and store your name & age
// -> Also create a method name (greetRegular) by using a regular function
//  --> Print this message `Hello, my name is ${this.name} & I'm ${this.age} years old.`
// -> Create one more method name (greetArrow) using arrow function
//  --> Print this message `Hello, my name is ${this.name} & I'm ${this.age} years old.`

//*********************SOLUTION*****************

const person = {
  name: "Jimmy",
  age: 28,
  greetRegular:function () {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old`
  },
  greetArrow: () => {
    return `Hello, my name is ${this.name} & I'm ${this.age} years old.`; 
  },
};

console.log(person.greetRegular()); //Hello, my name is Jimmy and I'm 28 years old
console.log(person.greetArrow()); //Hello, my name is  & I'm undefined years old.