//OBJECTS -> {property:value}

const person = {
  firstName: 'Moses',
  lastName: 'George',
  age: 19,
  location: ['Planet','Earth'],
  isProgrammer: true,
};

//accessing items in objects
console.log(typeof(person));
console.log(person);

//2 ways to access
console.log(person.firstName);
console.log(person['firstName']);
delete person.lastName;

person.parents = 'married';
console.log(person);

//exercise
// 1. Create object name (car)
// 2. add (type, model, color) as properties
// 3. check the type of object
// 4. Update the type property to "Toyota"
// 5. Add new property wheels
// 6. log car to the console.

const car = {
  type : 'mercedes',
  model: 'GLE 450d',
  color : 'Black',
}
console.log(typeof(car));

//update properties
console.log((car.type = 'toyota'))

// add new property
car.wheels = 'alloy';
console.log(car);



