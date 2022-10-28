import '../scss/app.scss';

const hamburguerMenu = document.querySelector('.hamburguer-menu');
const headerNav= document.querySelector('.header-nav');

eventListeners();
function eventListeners(){
    hamburguerMenu.addEventListener('click', showMobileMenu);
}

function showMobileMenu(){
    if(this.classList.contains('active')){
        this.classList.toggle('active');
        headerNav.classList.remove('header-nav--active');
        return;
    }
    headerNav.classList.toggle('header-nav--active');
    this.classList.toggle('active');
}