const menu = document.querySelector('[data-mobile-menu]');
const btn = document.querySelector('[data-menu-btn]');
const icons = document.querySelector('[ data-header-icons]');
const links = document.querySelectorAll('[data-link]')

btn.addEventListener('click', () => {
    menu.classList.toggle('header__menu--open');
    btn.classList.toggle('header__btn--open');
    icons.classList.toggle('header__icons--hide');
})

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('header__menu--open');
        btn.classList.remove('header__btn--open');
        icons.classList.remove('header__icons--hide');
    })
})

