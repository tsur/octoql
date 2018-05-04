import _ from 'lodash';

const PUBLIC_URL =
  process.env && process.env.PUBLIC_URL ? process.env.PUBLIC_URL : '';


export function normalizeLocation() {
  return process.env && process.env.NODE_ENV === 'desktop-production' ? location.hash.replace(/#/g, '') : location.pathname;
}

export function getQueryParams(search) {
  if (!search || _.isEmpty(search.trim()) || !/^[?#]/.test(search)) return {};
  return search.slice(1).split('&').reduce((queryParams, param) => {
    const [key, value] = param.split('=');
    const params = { ...queryParams };
    // Decore URI and replace back slashes by white spaces if found
    params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
    return params;
  }, {});
}

export function getRoute(route = '') {
  return `${PUBLIC_URL}${route}`;
}

export function normalizeRoute(route = '') {
  return route.replace(PUBLIC_URL, '');
}
