import _ from 'lodash';

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
