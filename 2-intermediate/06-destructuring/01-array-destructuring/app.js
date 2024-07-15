// --- DESTRUCTURING ---
// Destructuring allows us to "unpack" values from data-structures (Arrays, objects)
// into separate distinct variables.

//destructuring array syntax : const [variables] = the DS you want to unpack

const flagKE5 = [ 'black', 'white', 'red']; //'white', 'green'/];
const[firstColor, secondColor, thirdColor, fourthColor, fifthColor] = flagKE5 //firstColor is destructuring black from the Kenyan flag array
console.log(firstColor); //black
console.log(secondColor); //white
console.log(thirdColor); //red
console.log(fourthColor); // undefined
console.log(fifthColor); // undefined

// Assigning default values
let a, b
// [a = 0, b = 5] = [1]
// console.log(a) // 1 took the number assigned to its position
// console.log(b) // 5 took default value

// [a = 0, b = 5] = [,'two'];
// console.log(a) // 0 -default
// console.log(b) // two

[a = 0, b = 5] = [90, 100];
console.log(a); // 90
console.log(b); // 100

// Parsing an array returned from a function
function f() {
  return [1,2]
}

let x,y
[x,y] = f()
console.log(x); //1
console.log(y); //2

// ignoring some return values
function ignore () {
  return [3,4,5]
}
const [m, ,n] = ignore()
console.log(m) // 3
console.log(n) // 5
// return value 4 was skipped during destructuring

// Assigning the rest of an array to a variable
const [c, ...d] = [1, 2, 3, true];
console.log(c); // 1
console.log(d); // [2, 3, true]



// -------exercise---------
// Your task is to use array destructuring to extract the first three colors from the colors array and assign them to separate variables named color1, color2, and color3.
// After extracting the colors, log each variable's value to the console.

const colors = ["red", "green", "blue", "yellow", "orange"];
const [color1 ,color2 ,color3] = colors
console.log(color1, color2, color3)