import '../scss/app.scss';

const hamburguerMenu = document.querySelector('.hamburguer-menu');
const headerNav= document.querySelector('.header-nav');
// const headerNavLink = document.querySelector('.header-nav__link');

eventListeners();
function eventListeners(){
    hamburguerMenu.addEventListener('click', showMobileMenu);
    document.addEventListener('click', e => {
        if(e.target.classList.contains('header-nav__link')){
           e.preventDefault();
        console.log('Click en header nav link');
       }
    })
}

function showMobileMenu(){
    if(this.classList.contains('active')){
        this.classList.toggle('active');
        headerNav.classList.remove('header-nav--active');
        document.body.style.overflow = "initial";
        return;
    }
    document.body.style.overflow = "hidden";
    headerNav.classList.toggle('header-nav--active');
    this.classList.toggle('active');
}