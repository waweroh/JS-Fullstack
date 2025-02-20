// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
let person = {
  greet: function () {
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
  },
};

const james = Object.create(person);
james.firstName = 'James';
james.lastName = 'Dan';
james.greet();

let john = Object.create(person, {
  firstName:{value: 'Johnny'},
  lastName : {value: 'Bravo'},
});

console.log(john)
john.greet()