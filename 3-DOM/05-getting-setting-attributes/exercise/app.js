// 1. Select the anchor tag
// 2. Use getAttribute(attrName) to check the attribute.
// 3. Select a-two & set "href" attribute
// setAttribute(attrName, value)

const a = document.querySelector('a')
console.log(a.getAttribute('href'));

const aTwo = document.querySelector('.a-two')
console.log(aTwo)
console.log(aTwo.setAttribute('href', 'www.udemy.com'))
console.log('first')