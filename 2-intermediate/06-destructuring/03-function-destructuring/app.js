const person = {
  name: 'John',
  age: 34,
  country: 'United States',
}

const printPersonInfo = ({name, age, country}) => { //destructure person obj names as parameters
  console.log(`name: ${name}`);
  console.log(`age: ${age}`);
  console.log(`country: ${country}`);
}
printPersonInfo(person) //parse person obj as an argument of the function

// example 2
let options ={
  title:'my menu title',
  items:['tea', 'biscuits'],
};

function showMenu ({
  title,
  width:w = 200, //added and renamed and assigned default value
  height:h = 500,
  items:[tea, biscuits],
}) {
  console.log(`${title} ${w} ${h}`);
  console.log(tea);
  console.log(biscuits);
}
showMenu(options) 

//--------exercise --------------------------------
// Your task is to use function destructuring to extract the name, age, and courses 
// properties from the student object and then return them as an object from the getStudentInfo function.
const student = {
  name: "John Doe",
  age: 20,
  rollNumber: "A123",
  courses: ["Mathematics", "Science", "History"],
};

const getStudentInfo = ({name, age, courses}) => {
  return {name, age ,courses}
}
console.log(getStudentInfo(student)); //{name: 'John Doe', age: 20, courses: Array(3)}

const {name, age, courses} = getStudentInfo(student) //similar to array destructuring
console.log(name) //John Doe
console.log(age) //20
console.log(courses) //['Mathematics', 'Science', 'History']

    //the above code is similar to :
// const result = getStudentInfo(student);
// const name = result.name;
// const age = result.age;
// const courses = result.courses;

// Object Destructuring:
// Destructuring assignment is a syntax that allows unpacking values from arrays or properties from objects into distinct variables.
// The syntax const {name, age, courses} = ... extracts the values of name, age, and courses from the object on the right-hand side of the assignment and assigns them to variables with the same names.