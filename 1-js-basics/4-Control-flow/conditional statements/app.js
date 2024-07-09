let time = 20;
let greetings;

if (time < 10) {
  greetings = 'good morning';
  console.log(greetings);
} else if (time < 18) {
  greetings = 'good day';
  console.log(greetings);
}else {
  greetings = 'good night';
  console.log(greetings);
}

//password exercise
let password =10

if (password === 8) {
  console.log('welcome');
} else if (password <= 8) {
  console.log('Password too short');
} else if (password >= 8) {
  console.log('Password too long');
} else {
  console.log('provide password');
}


