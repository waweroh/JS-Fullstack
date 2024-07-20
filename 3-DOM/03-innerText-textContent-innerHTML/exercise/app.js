// 1. Check the innerText of "first" element
// 2. Check the textContent of "second" element
// 3. Check the innerHTML of "third" element

const first = document.querySelector('.first');
console.log(first.innerText) //text only
const second = document.querySelector('.second')
console.log(second.textContent) // displays js script code
const third = document.querySelector('.third')
console.log(third.innerHTML) //shows the text and all the tags 