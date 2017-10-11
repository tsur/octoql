/**
 * The global state selectors
 */
import { createSelector } from 'reselect';

const selectGlobal = () => (state) => state.get('global');

const selectNotifications = () =>
  createSelector(selectGlobal(), (globalState) =>
    globalState.getIn(['app', 'notifications']).toJS()
  );

export { selectNotifications };
