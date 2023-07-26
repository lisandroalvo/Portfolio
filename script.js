const dynamicText = document.getElementById('dynamic-text');
const words = ['UX-UI Designer', 'UX Researcher', 'UI Motion', 'Developer', 'Illustrator', ];
let i = 0;

function changeText() {
    dynamicText.textContent = words[i];
    i = (i + 1) % words.length;

}

setInterval(changeText, 2000); // Change every 2000 milliseconds, or 2 seconds

/* Project cards */

// Animate the project title on page load
const hamburgerMenu = document.querySelector('#hamburgerMenu');
const navLinks = document.querySelector('#navLinks');

hamburgerMenu.addEventListener('click', () => {
    navLinks.style.left = navLinks.style.left === '0%' ? '-100%' : '0%';
});

/* menu animation logo */
function toggleMenu() {
    var menu = document.getElementById("hamburgerMenu");
    menu.classList.toggle("change");
}