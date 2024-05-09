const cartIcon = document.querySelector('[data-cart-icon]');
const cart = document.querySelector('[data-cart]');
const btnClose = document.querySelector('[data-cart-btn-close]');


cartIcon.addEventListener('click', () => {
    cart.classList.add('cart__open');
    window.scrollTo(0, 0);
    if (window.innerWidth > 992 && cart.classList.contains('cart__open')) {
        cart.style.height = document.documentElement.scrollHeight + 'px'
    }
})

btnClose.addEventListener('click', () => {
    cart.classList.remove('cart__open');
})

