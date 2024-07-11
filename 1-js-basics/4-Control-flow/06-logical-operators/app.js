// -----------------------------------
// 1. Logical AND (&&)
//  -- TRUE if both the operands/boolean values are true, else evaluates to FALSE
const a = true;
const b = false;
const c = 4;

console.log(a && b);
console.log(c > 2 && c < 2); // false

// -----------------------------------
// 2. Logical OR (||)
// -- TRUE if either of the operands/boolean values is true. evaluates to false if both are FALSE

console.log(a || b);
console.log(b || b);
console.log(c > 2 || c < 2);

// -----------------------------------
// 3. Logical NOT (!)
// converts TRUE to FALSE and vice versa
console.log(!a)
console.log(!b)

// examples

  // AND OPERATOR
let password = "config";

if (password.length <= 8  && password.includes('con')) {
  console.log('password valid');
}else {
  console.log('Invalid password')
}
    // OR OPERATOR
let passwords = "configuration";

if (passwords.length <= 8 || passwords.includes("con")) {
  console.log("password valid");
} else {
  console.log("Invalid password");
}

