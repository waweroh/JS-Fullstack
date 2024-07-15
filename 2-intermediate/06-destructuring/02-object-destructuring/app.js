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



//----------rename destructuring (used in obj only)--------
const num = {x: 1.0048, y: 48.4983}
const {x: longitude, y: latitude} = num; //x renamed to longitude, y renamed to latitude
console.log(longitude);
console.log(latitude);

//object destructuring and rest operator
let {a, b, ...rest} = {a: 100, b: 200, c: 500, d: 800};
console.log(a); // 100
console.log(b); // 200
console.log(rest); //{c: 500, d: 800}

//--------exercises--------

// Your task is to use object destructuring to extract the name, age, and country properties from the person object and assign them to separate variables named personName, personAge, and personCountry.
// After extracting the properties, log each variable's value to the console.
const person2 = {
  name: "John Doe",
  age: 30,
  gender: "male",
  country: "USA",
};

const {name: personName, age: personAge, country:personCountry } = person2
console.log(personAge)
console.log(personName)
console.log(personCountry)