const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
let menuOpen = false;
menuBtn.addEventListener('click', toggleButton);

function toggleButton() {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menu.style.display = "flex"
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menu.style.display = "none"
        menuOpen = false;
    }
}