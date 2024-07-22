// classlist
// add()
// remove()
// toggle()

const h1 =document.querySelector('h1');

// classlist
console.log(h1.classList) //styles
console.log((h1.style.color = "skyblue"));
console.log((h1.style.fontWeight = "normal"));

//add, remove
h1.classList.add("apples");
console.log(h1.classList) //'styles', 'apples'
h1.classList.remove("styles");
console.log(h1.classList); //apples

//toggle - if the class name is present in the element it removes it ie toggle('apples')
//         if not present ie toggle('container') it adds it. It alternates
h1.classList.toggle('container')
console.log(h1.classList)

h1.classList.toggle('apples');
console.log(h1.classList)
