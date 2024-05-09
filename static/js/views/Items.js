const Items = async () => {
    const getProducts = async () => {
        fetch('static/items.json')
        const request = await fetch('static/items.json');
        const response = await request.json()
        return response
    }

    document.querySelector('#root').innerHTML = renderHtml();
    renderAllProducts();

    function renderHtml() {
        return `
        <section class="hero">
        <div class="container">
            <p class="hero__links">
                <a href="/">Home</a>/<a href="/items">All items</a>
            </p>
            <h2 class="hero__title">All Items</h2>
        </div>
    </section>
    <div class="wrapper container">
        <section class="filters">
            <div class="filters__search">
                <label for="search-item"></label>
                <input type="text" placeholder="Search" id="search-item" data-search-box>
                <button class="filters__search--btn"></button>
            </div>
            <div class="filters__category">
                <p>Topic</p>
                <div class="filters__category--wrapper">
                    <button class="filters__category--btn" data-category="forest">Forest</button>
                    <button class="filters__category--btn" data-category="foxkids">Fox kids</button>
                    <button class="filters__category--btn" data-category="all">All</button>
                    <button class="filters__category--btn" data-category="other">Other</button>
                </div>
            </div>
            <div class="filters__price">
                <p>Price</p>
                <label for="price"></label>
                <input type="range" id="price" data-price-range min="0" max="200" value="100"/>
                <p class="filters__price--label">Value: $<span data-price-label>100</span></p>
            </div>
        </section>
        <section class="shop">
            <div class="shop__wrapper" data-items-container>
            </div>
            <button class="shop__btn" data-btn-all>All foxes</button>
        </section>
        `
    }

    async function renderAllProducts() {
        createCard(await getProducts());
    }

    function createCard(products) {
        const container = document.querySelector('[data-items-container]');
        container.innerHTML = '';
        products.map(product => {
            const cardWrapper = document.createElement('div');
            cardWrapper.classList.add('shop__card');
            cardWrapper.id = product.id
            container.appendChild(cardWrapper)
            const imgWrapper = document.createElement('div');
            imgWrapper.classList.add('shop__card--img');
            cardWrapper.appendChild(imgWrapper)
            const imgProduct = document.createElement('img');
            imgProduct.classList.add('img-responsive')
            imgProduct.src = `static/img/${product.photo}`;
            imgWrapper.appendChild(imgProduct);
            const btn = document.createElement('button');
            btn.classList.add('shop__card--btn');
            btn.setAttribute('data-product-add', product.id)
            btn.innerHTML = 'Add';
            imgWrapper.appendChild(btn);
            const productDesc = document.createElement('div');
            productDesc.classList.add('shop__card--desc');
            cardWrapper.appendChild(productDesc);
            const title = document.createElement('h3');
            title.classList.add('shop__card--title');
            title.innerHTML = product.name;
            productDesc.appendChild(title);
            const price = document.createElement('p');
            price.classList.add('shop__card--price');
            price.innerHTML = `$ ${product.price}`;
            productDesc.appendChild(price);
            const rate = document.createElement('img');
            rate.classList.add('hop__card--rate')
            rate.src = `static/img/item-rate.svg`;
            rate.alt = '5';
            productDesc.appendChild(rate);
            const category = document.createElement('p');
            category.classList.add('shop__card--category');
            category.innerHTML = product.category;
            productDesc.appendChild(category);
        })
    }

    const rangeInput = document.querySelector('[data-price-range]');
    const label = document.querySelector('[data-price-label]');

    rangeInput.addEventListener('input', () => {
        let value = rangeInput.value;
        label.textContent = value;
        let percents = (value / rangeInput.max) * 100;
        rangeInput.style.background = `linear-gradient(to right, #CC5520 ${percents}%, transparent ${percents}%`;
    })

    rangeInput.addEventListener('change', () => {
        let value = rangeInput.value;
        filterProductByPrice(value);
    })

    document.querySelector('[data-search-box]').addEventListener('input', e => {
        getSearchValue(e.target.value);
    })

    const getSearchValue = debounce(value => {
        searchProductsByName(value.toLowerCase());
    })

    async function searchProductsByName(value) {
        const products = await getProducts();
        const foundProducts = products.filter(product => product.name.toLowerCase().includes(value))
        return createCard(foundProducts);
    }

    function debounce(cb, delay = 1000) {
        let timeout
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                cb(...args)
            }, delay);
        }
    }

    async function filterProductByPrice(value) {
        const products = await getProducts();
        const filerItems = products.filter(product => product.price <= value);
        createCard(filerItems);
    }

    const filterBtns = document.querySelectorAll('[data-category]');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            let category = btn.getAttribute('data-category');
            switch (category) {
                case 'all':
                    renderAllProducts();
                    break;
                case 'foxkids':
                    findProductsByCategory('foxkid');
                    break;
                case 'other':
                    findOtherProducts();
                    break;
                default:
                    findProductsByCategory(category);
            }
        })
    })

    async function findProductsByCategory(category) {
        const products = await getProducts();
        const chosenProduct = products.filter(product => product.category.toLowerCase() == category)
        createCard(chosenProduct);
    }

    async function findOtherProducts() {
        const products = await getProducts();
        const chosenProduct = products.filter(product => product.category.toLowerCase() !== 'forest' &&
            product.category.toLowerCase() !== 'foxkid');
        createCard(chosenProduct);
    }

    document.querySelector('[data-btn-all]').addEventListener('click', () => {
        renderAllProducts();
    })
}

export default Items;