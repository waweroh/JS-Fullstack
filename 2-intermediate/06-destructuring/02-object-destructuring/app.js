const student = {name: 'John', email: 'john@example.com', position:'cleaner'};
const {email, name, position} = student;
console.log(email);
console.log(position);
console.log(name);

//-------exercise --------
// Your task is to use object destructuring to extract the name, age, and country properties from the person object.
// After extracting the properties, log each variable's value to the console.

const person = {
  name: "John Doe",
  age: 30,
  gender: "male",
  country: "USA",
};
const {names, age, country} = person;
console.log(names);
console.log(age);
console.log(country);