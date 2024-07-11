// When we provide function as an (argument) to 
// other function/argument that function is known as callback function.

//example 1
function showCallBack(func) {  //showcallback is taking func function as a parameter
  const value = 10; //declaring the parameter of the parameter function func
  func(value); //parameter is now passed to the function
}

showCallBack(function (value) { //this is the callback function
  console.log(value);
});

// example 2
function greet (name, callback) {
  console.log(`hi my name is ${name}`);
  callback();
}
greet('Moses' ,function callback(){
  console.log('Ruto must go')
})

    //example 2 -> separating the callback
function greet2 (name, callback) {
  console.log(`hi there ${name}`);
  callback();
}
function callback () {
  console.log('ruto must go');
}
greet2('Moses', callback);

// exercise
// 1. Create a function name (showCallFunc)
// 2. pass "fn" as parameter
// 3. inside that function, create variable which holds value of 10
// 4. pass that value to the callback function
// 5. Now create callback function & print that value which you pass as parameter to the callback func.

function showCallFunc (fn) {
  let num = 50;
  fn(num);
}
showCallFunc(function (num) {
  console.log(num);
})


