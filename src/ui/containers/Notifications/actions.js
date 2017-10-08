import {
  REMOVE_NOTIFICATION,
} from 'ui/containers/App/constants';


/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function removeNotification(id) {
  return {
    type: REMOVE_NOTIFICATION,
    id,
  };
}
