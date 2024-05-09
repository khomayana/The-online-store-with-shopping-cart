const Home = async () => {
    document.querySelector('#root').innerHTML = renderHtml();

    function renderHtml() {
        return `
        <section class="intro">
        <div class="container">
            <h1 class="intro__title">Discover foxlife</h1>
            <p class="intro__desc">Lorem ipsum dolor sit amet consectetur. Phar
                eget turpis sem ultricies dolor sit amet consectetur.</p>
        </div>
    </section>
    <section class="goods">
        <div class="container goods__wrapper">
            <div class="goods__item goods__item--01">
                <div class="goods__item--desc">
                    <p class="goods__item--tag">#Food</p>
                    <h3 class="goods__item--title">Lorem ipsum
                        dolor sit amet ipsum</h3>
                </div>
                <img class="goods__item--pic img-responsive" src="/static/img/goods-01.png" alt="">
            </div>
            <div class="goods__item goods__item--02">
                <div class="goods__item--desc">
                    <p class="goods__item--tag">#Office</p>
                    <h3 class="goods__item--title">Lorem ipsum
                        dolor sit amet ipsum</h3>
                </div>
                <img class="goods__item--pic img-responsive" src="/static/img/goods-02.png" alt="">
            </div>
            <div class="goods__item goods__item--03">
                <div>
                    <p class="goods__item--tag">#Home</p>
                    <h3 class="goods__item--title">Lorem ipsum
                        dolor sit amet ipsum</h3>
                </div>
                <img class="goods__item--pic img-responsive" src="/static/img/goods-03.png" alt="">
            </div>
            <a class="goods__btn" href="/items">All foxes</a>
        </div>
    </section>
    <section class="join">
        <div class="container">
            <h4 class="join__title">Join our newsletter</h4>
            <p class="join__desc">Lorem ipsum dolor sit amet consectetur. Molestie turpis quis turpis fermentum
                egestas
                bibendum.Lorem ipsum dolor sit amet consectetur. </p>
            <label for="email"></label>
            <input class="join__email" type="email" id="email" placeholder="Enter email">
            <button class="join__btn">Subscribe</button>
        </div>
    </section>
        `
    }
}

export default Home;