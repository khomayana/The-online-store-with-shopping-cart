const container = document.querySelector('#root') // target element
const targetNode = container; // Target node to observe
// Options for the observer (which mutations to observe)
const observerOptions = { childList: true, subtree: true };

const observer = new MutationObserver(initCart);

// Start observing the target node for configured mutations
observer.observe(targetNode, observerOptions);

let products = JSON.parse(localStorage.getItem('products')) || [];

function initCart() {
    const btnsAdd = document.querySelectorAll('[data-product-add]');
    btnsAdd.forEach(btn => {
        btn.addEventListener('click', e => {
            const id = e.target.parentElement.parentElement.id;
            const title = e.target.parentElement.parentElement.childNodes[1].childNodes[0].textContent;
            const priceText = e.target.parentElement.parentElement.childNodes[1].childNodes[1].textContent;
            const price = priceText.replace('$', '')
            const imgSrc = e.target.previousSibling.src;
            let idExist = products.find(product => (product.id === id))
            if (idExist) addQuantity(id);
            else {
                const product = createProduct(id, title, price, imgSrc);
                products.push(product);
            }
            saveAndRender();
        })
    })
}

function addQuantity(id) {
    products.forEach(product => {
        product.id === id ? product.quantity++ : '';
    })
}

function createProduct(id, title, price, imgSrc) {
    return {
        id: id,
        title: title,
        price: price,
        imgSrc: imgSrc,
        quantity: 1
    }
}

function saveAndRender() {
    savetoLocalStorage();
    addProductsToCart();
    getTotal();
}

function savetoLocalStorage() {
    localStorage.setItem('products', JSON.stringify(products));
}

function addProductsToCart() {
    const container = document.querySelector('[data-cart-container]');
    container.innerHTML = '';
    products.map(product => {
        const cartContent = document.createElement('div');
        cartContent.classList.add('cart__item');
        cartContent.setAttribute('data-item-id', product.id)
        const content = `
            <div class="cart__item--info">
                <img class="img-responsive" src=${product.imgSrc} alt=${product.title}>
                <div class="cart__item--desc">
                <h5>${product.title}</h5>
                <p>$ ${product.price}</p>
                </div>
            </div>
            <div class="cart__item--count">
                <div class="cart__item--count-wrapper">
                                <button class="cart__item--minus" data-btn-minus></button>
                                <input class="cart__item--quantity" type="number" value=${product.quantity} data-input-quantity>
                                <button class="cart__item--plus" data-btn-plus></button>
                </div>
                <button class="cart__item--delete" data-btn-remove>
                    <span>Remove</span>
                    <p class="cart__item--btn-icon"></p>
                </button>
            </div>
        `
        cartContent.innerHTML = content;
        container.appendChild(cartContent);
    })
    getCartElements()
}

function getTotal() {
    let totalSum = 0;
    const totalLabel = document.querySelector('[data-total-sum-label]');
    products.forEach(product => totalSum += product.price * product.quantity);
    document.querySelector('[data-total-sum]').innerHTML = totalSum;
    totalSum > 0 ? totalLabel.innerHTML = totalSum : totalLabel.innerHTML = '';
}

function changeQuantity(id, value) {
    products.forEach(product => {
        product.id === id ? product.quantity = value : '';
    })
    saveAndRender();
}

function getCartElements() {
    let inputs = document.querySelectorAll('[data-input-quantity]');
    if (inputs.length == 0) return
    inputs.forEach(input => {
        input.addEventListener('change', e => {
            console.log('change')
            const elemId = e.target.parentElement.parentElement.parentElement.dataset.itemId;
            const value = Number(e.target.value);
            value <= 0 ? deleteProduct(elemId) : changeQuantity(elemId, value);
        })
    })

    let btnsPlus = document.querySelectorAll('[data-btn-plus]');
    btnsPlus.forEach(btnPlus => {
        btnPlus.addEventListener('click', e => {
            const elemId = e.target.parentElement.parentElement.parentElement.dataset.itemId;
            addQuantity(elemId);
            saveAndRender();
        })
    })

    let btnsMinus = document.querySelectorAll('[data-btn-minus]');
    btnsMinus.forEach(btnMinus => {
        btnMinus.addEventListener('click', e => {
            let value = e.target.nextElementSibling.value - 1;
            const elemId = e.target.parentElement.parentElement.parentElement.dataset.itemId;
            value <= 0 ? deleteProduct(elemId) : minusQuantity(elemId);
        })
    })

    let btnsRemove = document.querySelectorAll('[data-btn-remove]');
    btnsRemove.forEach(btnRemove => {
        btnRemove.addEventListener('click', e => {
            const elemId = e.target.parentElement.parentElement.parentElement.dataset.itemId;
            deleteProduct(elemId);
        })
    })
}

function minusQuantity(id) {
    products.forEach(product => {
        product.id === id ? product.quantity-- : '';
    })
    saveAndRender();
}

function deleteProduct(id) {
    products = products.filter(product => product.id !== id);
    saveAndRender();
}

saveAndRender();