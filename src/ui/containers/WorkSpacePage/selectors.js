import { createSelector } from 'reselect';

const selectGlobal = () => (state) => state.get('global');

const selectResources = () =>
  createSelector(selectGlobal(), (globalState) =>
    globalState.get('resources').toJSON()
  );

const selectResource = () =>
  createSelector(selectGlobal(), (globalState) =>
    globalState.getIn(['app', 'resource'])
  );

export { selectResources, selectResource };
