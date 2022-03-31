class Router {
    constructor(routes) {
        this.routes = routes;
        this.#loadInitialRoute();
    }

    loadRoute(...urlSegments) {
        const matchedRoute = this.#matchUrlToRoute(urlSegments);
        const url = `/${urlSegments.join('/')}`;
        history.pushState({},'this works', url);
        const routerOutElement = document.querySelectorAll('[data-router]')[0];
        routerOutElement.innerHTML = matchedRoute.template;
    }

    #loadInitialRoute() {
        const pathName = window.location.pathname.split("/");
        const pathSegments = pathName.length > 1 ? pathName.slice(1) : '';
        this.loadRoute(...pathSegments);
    }

    #matchUrlToRoute(urlSegments) {
        const matchedRoute = this.routes.find(route => {
            const routePathSegments = route.path.split('/').slice(1);
            if (routePathSegments.length !== urlSegments.length) {
                return false;
            }
            return routePathSegments.every((routePathSegment, i) => routePathSegment === urlSegments[i])
        });
        return matchedRoute;
    }
}