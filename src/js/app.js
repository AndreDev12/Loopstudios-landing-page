import '../scss/app.scss';

const menuButton = document.querySelector('.menu-button');
const header = document.querySelector('.header');
const body = document.querySelector('body');
// const bodyBefore = document.querySelector(body > body::before);
// console.log(bodyBefore);

eventListeners();
function eventListeners(){
    menuButton.addEventListener('click', showMobileMenu);
}

function showMobileMenu(){
    if(menuButton.classList.contains('active')){
        this.classList.toggle('active');
        // body.classList.remove('black-background');
        return;
    }
    this.classList.toggle('active');
    const response = window.getComputedStyle(document.querySelector('.header', '::before'));
    // response.position = "fixed";
    // response.classList.add('fixed');
    console.log(response.setProperty);
    // headerbefore.classList.add('fixed');
    // body.classList.add('black-background');
}