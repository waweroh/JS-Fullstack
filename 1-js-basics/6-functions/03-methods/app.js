// Defining a method outside the object
function greet () {
  return `Hello, my name is ${person.name} I am ${person.age} years old`;
}
const person = {
  name: 'John',
  age: 30,
  greet, //pass the method to the object
}
console.log(person.greet())

//defining a method inside the object

const person2 =  {
  name: 'Felix',
  age : 40,
  greet2: function () { //this function is anonymous-has no name
    return `hi, my name is ${person2.name} my age is ${person2.age}`
  }
}
console.log(person2.greet2())