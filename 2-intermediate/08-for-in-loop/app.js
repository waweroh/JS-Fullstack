// The "for...in" loop in JavaScript is used to iterate over the enumerable properties of an object.
// It is a way to loop through the keys (property names) of an object.

// syntax:  for (let key in object) {...}

// Here, variable is a variable that will represent each property name (key) during each iteration, and object is the object being looped through.

// --------------------------

const person = {
  name: 'John',
  age: 34,
  job: 'software Engineer'
}

for (let keys in person) {
  console.log(keys, person[keys])
}

const numbers = ['one', 'two', 'three', 'four', 'five', 'six']
for (let index in numbers) {
  console.log(`${index}: ${numbers[index]}`)
}

//---------exercise--------
//1.
// Iterate over object & log the property and the value of that object using for in loop.
const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
  console.log(`${property}: ${object[property]}`)
}


//2.
// Exercise 2
// You are given an object representing a student's test scores. Each property of the object represents the subject name 
// (e.g., "Math", "Science") and the value represents the score. Your task is to use the "for...in" loop to calculate and print the average score of the student.

const testScores = {
  Math: 90,
  Science: 85,
  History: 78,
  English: 92,
  Geography: 88,
};

const calcAverageScore = (scores) => {
  let totalScore = 0;
  let numSubjects = 0;

  for (let subject in scores) {
    totalScore += scores[subject]; //1.totalScore = 0 + 90 = 90. 2.totalScore = 90 + 85 = 175
    numSubjects++; //1.numSubjects = 0 + 1 = 1., 2.numSubjects = 1 + 1 = 2
  }
  const averageScore = totalScore / numSubjects;
  // Return an object containing totalScore, numSubjects, and averageScore
  // we are returning an object to facilitate the return of multiple related values from a single function call
  return {averageScore, numSubjects, totalScore};
}
// Call the function and destructure the returned values
const {averageScore, numSubjects, totalScore} = calcAverageScore(testScores)
console.log(averageScore)
console.log(numSubjects)
console.log(totalScore)