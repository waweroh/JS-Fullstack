// A factory function is a type of function that is used to create and return objects from a function. It's a design pattern that provides an alternative way to create objects compared to using constructors and the new keyword.

 //instead of having all this objects we can have a function that returns an object to avoid repetition.

// let james = {
//   first: 'james',
//   second: 'jane',
//   fullName: function () {
//     console.log(
//       `hi name is ${this.first} ${this.second} and i love JS`
//     );
//   },
// };
// const x = james.fullName()
// console.log(x)

// let joseph = {
//   first: "joseph",
//   second: "jane",
//   fullName: function () {
//     console.log(`hi name is ${this.first} ${this.second} and i love node`);
//   },
// };
// const y = joseph.fullName();
// console.log(y);

 //instead of having all this objects we can have a function that returns an object
 //enhanced object literal

 function createPerson (firstName, secondName, pl) {
  return { //property: param value
    firstName:firstName,
    secondName:secondName,
    pl:pl,
    intro: function () {
      console.log(
        `hello my name is ${this.firstName} ${this.secondName} and I love ${this.pl}`
      );
    },
  };
 };

 const john = createPerson('John','Mark', "python")
 const moses = createPerson('Moses', 'dev','javascript')
 console.log(moses)
 console.log(john)
//  console.log(john.fullName())
john.intro();
moses.intro();