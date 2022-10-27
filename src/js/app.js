import '../scss/app.scss';

const hamburguerMenu = document.querySelector('.hamburguer-menu');

eventListeners();
function eventListeners(){
    hamburguerMenu.addEventListener('click', showMobileMenu);
}

function showMobileMenu(){
    if(this.classList.contains('active')){
        this.classList.toggle('active');
        return;
    }
    this.classList.toggle('active');
}