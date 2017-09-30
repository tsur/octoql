import { fromJS } from 'immutable';
import * as themes from '../themes';
import themeReducer from '../reducer';

describe('ThemeProvider Reducers', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      theme: themes.light,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(themeReducer(undefined, {})).toEqual(expectedResult);
  });
});
