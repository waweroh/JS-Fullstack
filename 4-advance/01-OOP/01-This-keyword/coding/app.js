// console.log(window)

//--------------------
// this alone ----> refers to the global
console.log(this); // window
console.log(this === window); // true ...THIS in a function refers to the window object

// window.firstName = "Moses"; //the var firstName was created in the window obj
// this.lastName = 'WebDev' // is also created in the window obj
// console.log(window)

//---------------------
// this in a function --> refers to the global
function printThis() {
  return this; //THIS in a function refers to the window object
}

const res = printThis();
console.log(res);

//---------------------
//this in a method : using the function keyword
const obj= {
  firstName: 'Moses',
  lastName: 'John',
  fullName: function () { //method of the object obj
    return `${this.firstName} ${this.lastName}`;//here this will refer to object
  },
};
const reg = obj.fullName();
console.log(reg);

//---------------------
//this in a method : using the arrow function
//this is an arrow function refers to the window. In this case it returns undefined
const obj1 = {
  firstName: 'Moses',
  lastName: 'John',
  fullName: () => {
    //method of the object obj
    return `${this.firstName} ${this.lastName}`; //undefined undefined
  },
};
const reg1 = obj1.fullName();
console.log(reg1);





