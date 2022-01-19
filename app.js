const hamburger = document.getElementById('hamburger');
const headerMenu = document.getElementById('header-menu');
const tri = document.getElementById('tri');

hamburger.addEventListener('click', () =>{
    headerMenu.classList.toggle('show');
    tri.classList.toggle('show');
});