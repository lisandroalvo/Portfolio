const dynamicText = document.getElementById('dynamic-text');
const words = ['UX-UI Designer', 'UX Researcher', 'UI Motion', 'Developer', 'Illustrator', ];
let i = 0;

function changeText() {
    dynamicText.textContent = words[i];
    i = (i + 1) % words.length;

}

setInterval(changeText, 2000); // Change every 2000 milliseconds, or 2 seconds