import _ from 'lodash';

export function isNotebook(resource) {
  return resource.split('/').length === 3;
}

export function getNotebookTitle(resource) {
  return isNotebook(resource) ? resource.replace(/^.*[\\/]/, '') : '';
}

export function getBasePath(resource) {
  const path = resource.split('/');
  path.pop();
  return path;
}

export function getPath(resource) {
  return resource.split('/');
}

export function getNotebookContent(tree, resource) {
  return isNotebook(resource) ? _.get(tree, getPath(resource)) : false;
}
