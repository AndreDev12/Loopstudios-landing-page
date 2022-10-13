import '../scss/app.scss';

const menuButton = document.querySelector('.menu-button');
const header = document.querySelector('.header');
const body = document.querySelector('body');

menuButton.addEventListener('click', showMobileMenu);

function showMobileMenu(){
    if(menuButton.classList.contains('active')){
        this.classList.toggle('active');
        header.classList.add('background-image');
        return;
    }
    this.classList.toggle('active');
    // header.classList.add('black-background');
    body.classList.add('black-background');
    header.classList.remove('background-image');
}