// The map() method creates a new array populated with the results of 
// calling a provided function on every element in the calling array.
//same as for each only that it returns a new array
const numbers = [ 1,2,3,4,5]
const doubles = numbers.map((number) => number*2 );
console.log(doubles)
console.log(numbers)

let peoples = [
  { firstName: "Malcom", lastName: "Reynolds" },
  { firstName: "lee", lastName: "Frye" },
  { firstName: "Jayne", lastName: "Cobb" },
];

const results = peoples.map((person) => {
  return [person.firstName, person.lastName]
})
console.log(results) //all three arrays
console.log(results[0]) //['Malcom', 'Reynolds']
console.log(results[0][1]) //Reynolds

//-----------exercise---------------
// 1. Create array with random numbers.
// 2. Map over each item in that array, & multiply each item by 10

const digits = [65, 44, 12, 4];
function byTen (digit) {
  return digit *10
}
// const byTen = digits.map((digit) => digit * 10)
const multipliedArr = digits.map(byTen)
console.log(multipliedArr)