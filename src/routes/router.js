import Route from 'route-parser';

import routes from './routes.js';

export default function getRoute(url) {
  for (let i = 0, max = routes.length; i < max; i++) {
    let route = new Route(routes[i].route);
    let match = route.match(url);
    if (match) {
      return Object.assign({}, routes[i], {routeParams: match});
    }
  }
  return {};
}
