// ********** Synchronous Code
function myFunc() {
  console.log('inside first function');
}

console.log("start");
myFunc();
console.log("end");

// ********** Asynchronous Code
console.log("start");

setTimeout(() => {
  console.log("Inside SetTimeOut");
}, 2000);

console.log("end")