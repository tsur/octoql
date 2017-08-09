/*
 *
 * BlogPost reducer
 *
 */

import { fromJS } from 'immutable';
import { TOGGLE_VISIBILITY } from './constants';

const initialState = fromJS({ visible: true });

function blogPostReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_VISIBILITY:
      return state.setIn(['visible'], !state.getIn(['visible']));
    default:
      return state;
  }
}

export default blogPostReducer;
