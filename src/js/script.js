window.addEventListener('DOMContentLoaded', () =>{
    const hamburger = document.querySelector('.header__hamburger'),
          menu = document.querySelector('.header__list');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('header__list_active');
    });
    console.log('dfslem');

});