// The rest parameter syntax allows a function to accept an indefinite number of arguments
// as an array, providing a way to represent variadic functions in JavaScript.
function user(...userData) {
  console.log(userData);
}

user("HuXn", 17, "Male", "Programming"); //['HuXn', 17, 'Male', 'Programming']

function person (firstName, secondName, ...hobbies) {
  console.log('first name:' ,firstName )
  console.log('second name:' ,secondName )
  console.log('My hobbies:' ,hobbies )

}
person('Moses', 'Waweru', 'swimming', 'bedminton','maandamano') // first name: Moses
                                                                // second name: Waweru
                                                                // My hobbies: (3) ['swimming', 'bedminton', 'maandamano']
//-------exercises------------------------

// 1. Create a function name (sum) which takes (unlimited) amount of parameters
// 2. No matter how many parameters you provide it will return the sum value of those params!

const sum = (...args) => {
  return args.reduce((previous,current) => {
    return previous + current
  });
}
console.log(sum(1, 2, 3, 4, 5, 6));

// 2.
//create a function taking unlimited amounts of parameters and log all params to console
const variadic = (...params) => {
  console.log(params);
}
console.log('moses','software engineering',20,['one'])
