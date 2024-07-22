// <a>:href
// <input>:value
// type
// getAttribute(attrName)
// setAttribute(attrName, value)

const a = document.querySelector('a');
const input = document.querySelector('input');

//getting attributes 
console.log(a)
console.log(input)
console.log(a.href)
console.log(input.placeholder)

//setting the attributes
// console.log(input.placeholder = 'email')
// console.log(a.href = 'www.youtube.com')

// **********************************
// getAttribute(attrName)
console.log(input.getAttribute('type'))

//setAttribute(attrName, value)
input.setAttribute('placeholder', 'email');
console.log(input)
a.setAttribute('href', 'www.google.com');
console.log(a)