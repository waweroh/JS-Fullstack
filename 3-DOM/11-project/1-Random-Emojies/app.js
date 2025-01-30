const btn = document.querySelector('#emoji');
const emojis = [
  "😆",
  "😅",
  "🤣",
  "😂",
  "😀",
  "🤑",
];

btn.addEventListener('mouseover', () => {
  emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
})
