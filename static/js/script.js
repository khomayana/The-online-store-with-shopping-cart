import Home from './views/Home.js';
import History from './views/History.js'
import Items from './views/Items.js';

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
    window.scrollTo(0, 0);
}

const router = async () => {
    const routers = [
        { path: '/', view: Home },
        { path: '/items', view: Items },
        { path: '/history', view: History },
        { path: '/items', view: Items }
    ]
    const potentionMatches = routers.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    })

    let match = potentionMatches.find(potentionMatch => potentionMatch.isMatch);

    if (!match) {
        match = {
            route: routers[0],
            isMatch: true
        }
    }

    const view = match.route.view;
    await view();
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href)
        }
    })
    router();
})

window.addEventListener('popstate', router);