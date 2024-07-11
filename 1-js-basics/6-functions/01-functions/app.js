//function declaration
function greet () {
  console.log('hello world')
}
greet();

//function with parameters
function saybye (firstName) {
  console.log(`good bye ${firstName}`);
}
saybye('Moses');
saybye('lexi');

//functions expressions --> doesn't execute outside scope
const greetings  = function (user){
  console.log(`how are you ${user}`)
}
greetings('function expressions do no execute outside scope')

//using return 
function add (a, b) {
  return a + b;
}
const res1 = add(20,30);
const res2 = add(200,30);

console.log(res1);
console.log(res2);

//exercise
function multiply (a, b) {
  return a * b;
}
const result = multiply(20,30);
console.log(result);