import '../scss/app.scss';

const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', showMobileMenu);

function showMobileMenu(){
    if(menuButton.classList.contains('active')){
        this.classList.toggle('active');
        return;
    }
    this.classList.toggle('active');
}