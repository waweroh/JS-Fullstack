// 1. Proivde "400px" of height ot container element
// 2. Change the background color of container to "teal"
// 3. Change the color of h1 to "skyblue"
// 4. Change the fontFamily of paragraph to "sans-serif"
// 5. Change the color of paragraph to "white"
// 6. Change the color of btn to pink

const container = document.querySelector('.container');
const h2 = document.querySelector('.main-headings');
const p = document.querySelector(".sub-headings");
const btn = document.querySelector(".btn");

//style
container.style.height = '400px';
container.style.background = "teal";
h2.style.color = 'skyblue';
p.style.fontFamily = "sans-serif";
p.style.color ='white';
btn.style.color = 'pink';