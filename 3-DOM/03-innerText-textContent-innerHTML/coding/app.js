// innerText
// textContent
// innerHTML

const p = document.querySelector('p');

// // Formatted & will not show script tag.only its content and paragraph tag
console.log(p.innerText)
// Not Formatted and will show script tag.
console.log(p.textContent);
// Will Show All the content + HTML
console.log(p.innerHTML);

//changing values
const h1 = document.querySelector('h1');
h1.innerText = 'text changed';
h1.innerHTML = '<em>How about now</em>'; //emphasize tag 
