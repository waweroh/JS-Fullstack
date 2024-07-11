//arrays are 0 index based
const actions = ['eat', 'sleep', 'code', 'repeat'];
console.log(actions);
console.log(actions[1]) //access the array

//nested arrays
const nestArray =['eat', ['sleep', 'code', 'repeat'], 1, true, false];
console.log(nestArray);
console.log(nestArray[1][2]);

// exercise
const favSingers = ['Paul', 'Sean', 'Peter'];
console.log(favSingers[0]);

const favNumbers = [1,2,3,4];
console.log(favNumbers);

const mixedArr = ['string',['otherArray'], 123, true]
console.log(mixedArr[1][0]);