// Adding and removing change class when hamburger menu and close navbar are clicked
const mainContainer = document.querySelector('.container');
const hamburgerMenu = document.querySelector('.menu');
const navClose = document.querySelector('.nav-close');

hamburgerMenu.addEventListener('click', ()=> {
    mainContainer.classList.add('change');
});

navClose.addEventListener('click', ()=> {
    mainContainer.classList.remove('change');
})