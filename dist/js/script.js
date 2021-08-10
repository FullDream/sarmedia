window.addEventListener('DOMContentLoaded', () =>{
    const hamburger = document.querySelector('.header__hamburger'),
          menu = document.querySelector('.header__list'),
          span = document.querySelectorAll('.header__hamburger span');
    
    function menuShowAndHide(i) {
        i.addEventListener('click', () => {
            if(!i.classList.contains('header__hamburger_active') && !menu.classList.add('header__list_active')) {
                i.classList.add('header__hamburger_active');
                menu.classList.add('header__list_active');
            } else {
                i.classList.remove('header__hamburger_active');
                menu.classList.remove('header__list_active');
            }
            
        });
    }
    menuShowAndHide(hamburger);
    menuShowAndHide(span);

    
    document.addEventListener('click', (event) =>{
        let target = event.target,
            itsMenu = target == menu || menu.contains(target),
            itsHamburger = target == hamburger,
            menuIsActive = menu.classList.contains('header__list_active');

            if (!itsMenu && !itsHamburger && menuIsActive){
                hamburger.classList.remove('header__hamburger_active');
                menu.classList.remove('header__list_active');
            } 
    });
   
    console.log('dfslem');

});