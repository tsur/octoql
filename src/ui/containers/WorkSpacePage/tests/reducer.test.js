
import { fromJS } from 'immutable';
import workSpacePageReducer from '../reducer';

describe('workSpacePageReducer', () => {
  it('returns the initial state', () => {
    expect(workSpacePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
