// The ternary operator in JavaScript is a concise way of writing conditional expressions. It is the only JavaScript operator that takes three operands:
// a condition followed by a question mark (?), an expression to execute if the condition is true, followed by a colon (:), and an expression to execute if the condition is false.

//syntax: condition ? exprIfTrue : exprIfFalse;

let password = 7;

function passwordChecker (ps) {
  // if (ps===8){
  //   console.log(`great password`)
  // } else {
  //   console.log(`password must be 8 characters long`)
  // }
        //ternary operator
  return ps === 8 ? `strong password` : "password must be 8 characters long";
}
res = passwordChecker(password)
console.log(res)

// example 2
 const age = 24;
 const isAdult = age >= 18 ? 'Adult' : 'Not Adult';
 console.log(isAdult)

 // Create a program which checks if number is positive, negative or zero
let a = 3;
let res = a >= 0 ? (a == 0 ? "zero" : "positive") : "negative";
console.log(`The number is ${res}.`);

