const History = async () => {
    document.querySelector('#root').innerHTML = renderHtml();

    function renderHtml() {
        return `
        <section class="hero">
            <div class="container">
                <p class="hero__links">
                    <a href="/">Home</a>/<a href="/history">About us</a>
                </p>
                <h2 class="hero__title">Our history</h2>
            </div>
        </section>
        <section class="history container">
            <div class="history__item">
                <div>
                    <h4>Lorem ipsum dolor sit amet ipsum</h4>
                    <p class="history__item--desc">Lorem ipsum dolor sit amet consectetur. Amet aliquam non congue
                        vivamus. Viverra consequat donec fringilla dolor phasellus nibh ultricies purus. Id netus semper
                        feugiat elit turpis convallis platea. Aliquam semper in amet vitae sit augue non. Sit arcu
                        phasellus morbi diam nullam. Proin lorem nunc ante aliquam mauris nunc. Egestas leo orci
                        pellentesque cras. Vitae id enim amet dolor tellus dignissim id mattis.
                        <br>
                        <br>
                        Augue dis nunc eu tempus habitant eu.Lorem ipsum dolor sit amet consectetur. Amet aliquam non
                        congue vivamus. Viverra consequat donec fringilla dolor phasellus nibh ultricies purus. Id netus
                        semper feugiat elit turpis convallis platea. Aliquam semper in amet vitae sit augue non. Sit
                        arcu phasellus morbi diam nullam. Proin lorem nunc ante aliquam mauris nunc. Egestas leo orci
                        pellentesque cras. Vitae id enim amet dolor tellus dignissim id mattis. Augue dis nunc eu tempus
                        habitant eu.
                    </p>
                </div>
                <img class="img-responsive" src="/static/img/history-foxes1.jpg" alt="">
            </div>
            <div class="history__item">
                <div>
                    <h4>Lorem ipsum
                        dolor sit amet ipsum</h4>
                    <p class="history__item--desc">Lorem ipsum dolor sit amet consectetur. Amet aliquam non congue
                        vivamus. Viverra consequat donec fringilla dolor phasellus nibh ultricies purus. Id netus semper
                        feugiat elit turpis convallis platea. Aliquam semper in amet vitae sit augue non. Sit arcu
                        phasellus morbi diam nullam. Proin lorem nunc ante aliquam mauris nunc. Egestas leo orci
                        pellentesque cras. Vitae id enim amet dolor tellus dignissim id mattis.
                        <br>
                        <br>
                        Augue dis nunc eu tempus habitant eu.Lorem ipsum dolor sit amet
                        consectetur. Amet aliquam non
                        congue vivamus. Viverra consequat donec fringilla dolor phasellus nibh ultricies purus. Id netus
                        semper feugiat elit turpis convallis platea. Aliquam semper in amet vitae sit augue non. Sit
                        arcu phasellus morbi diam nullam. Proin lorem nunc ante aliquam mauris nunc. Egestas leo orci
                        pellentesque cras. Vitae id enim amet dolor tellus dignissim id mattis. Augue dis nunc eu tempus
                        habitant eu.
                    </p>
                </div>
                <img class="img-responsive history__item--img-reverse" src="/static/img/history-foxes2.jpg" alt="">
            </div>
        </section>
        `
    }
}

export default History;