import {
  CHANGE_RESOURCE_SELECTED,
  ADD_RESOURCE,
} from 'ui/containers/App/constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeResourceSelected(resource) {
  return {
    type: CHANGE_RESOURCE_SELECTED,
    resource,
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function addTreeResource(resource) {
  return {
    type: ADD_RESOURCE,
    resource,
  };
}
