import '../scss/app.scss';

const hamburguerMenu = document.querySelector('.hamburguer-menu');
const headerNav= document.querySelector('.header-nav');

eventListeners();
function eventListeners(){
    hamburguerMenu.addEventListener('click', showMobileMenu);
    headerNav.addEventListener('click', e => {
        e.preventDefault();
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