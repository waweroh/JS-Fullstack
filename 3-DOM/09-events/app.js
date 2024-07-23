// ----------- BAD WAY-----------
const secondBtn = document.querySelector(".second-btn");
secondBtn.onclick = function () {
  console.log("Hello World");
};

// ----------- GREAT WAY-----------
const best = document.querySelector('.best');

best.addEventListener('click', () => {
  console.log('best way to add events');
});

// ----------- Event (e) Object -----------
// It's an event object which contains information about particular event.

const para = document.querySelector('.para');

para.addEventListener('click', (e) => {
  console.log(e) //returns event object
});

const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
  e.preventDefault(); //prevents default behaviour
  console.log(input.value); //display the input
});