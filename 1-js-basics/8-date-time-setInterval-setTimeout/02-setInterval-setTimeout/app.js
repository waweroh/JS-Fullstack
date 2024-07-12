// setInterval:
// -> The setInterval function is used to repeatedly execute a function or a block of code at a specified interval. It takes two arguments: the function or code to be executed and the time interval (in milliseconds) between each execution.
// Example: Stop the interval after 10 seconds
const intervalId = setInterval(function () {
  console.log("This function is being executed at the interval.");
}, 1000);

// Stop the interval after 10 seconds
setTimeout(function () {
  clearInterval(intervalId);
  console.log("Interval stopped.");
}, 10000);

// setTimeout:
// -> The setTimeout function is used to execute a function or a block of code after a specified delay. It takes two arguments: the function or code to be executed and the time delay (in milliseconds) before the execution.

// Example: Execute a function after 3 seconds
setTimeout(function () {
  console.log("This function will be executed after 3 seconds.");
}, 3000);