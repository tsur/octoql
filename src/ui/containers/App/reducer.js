/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';
import _ from 'lodash';
import * as Resources from 'ui/utils/resources';
import { CHANGE_RESOURCE_SELECTED, ADD_RESOURCE } from './constants';

// The initial state of the App
const initialState = fromJS({
  app: {
    license: 'MIT',
    loading: false,
    error: false,
    language: 'en',
    theme: 'default',
    resource: '', // 'tsur/octoql/example',
  },
  resources: {
    tsur: {
      octoql: {
        example: {
          panels: [
            {
              type: 'text',
              content: '<h1>An OctoQL Notebook ...</h1>',
            },
            {
              type: 'text',
              content: 'What do I need to work in today ?',
            },
            {
              type: 'query',
              content: `-- Press Enter+Shift To Run
from tsur/octoql
where assigned == me
take 5`,
            },
            {
              type: 'text',
              content: 'Too much information ... just a quick view',
            },
            {
              type: 'query',
              content: `-- Press Enter+Shift To Run
from tsur/octoql
where assigned == me
take 5
select title`,
            },
            {
              type: 'text',
              content: 'Something really urgent that requires my attention ?',
            },
            {
              type: 'query',
              content: `-- Press Enter+Shift To Run
from tsur/octoql
where labels contains "urgent" and labels not contains "merged"`,
            },
            {
              type: 'text',
              content: 'These issues could be fixed later ...',
            },
            {
              type: 'query',
              content: `-- Press Enter+Shift To Run
from tsur/octoql
where labels not contains "urgent" and labels not contains "merged"`,
            },
            {
              type: 'text',
              content: 'These issues could be closed ...',
            },
            {
              type: 'query',
              content: `-- Press Enter+Shift To Run
from tsur/octoql
where labels contains "merged" or creation_date <= 2.months.ago`,
            },
          ],
          meta: {},
          id: '',
          title: 'Example',
        },
      },
      // blockade: {
      //   notebook1: { queries: [], meta: {}, id: '', title: 'Notebook1' },
      // },
    },
    // angular: {
    //   angular2: {
    //     notebook1: { queries: [], meta: {}, id: '', title: 'Notebook1' },
    //   },
    // },
  },
});

function createPath(pathRoute, localState) {
  const aNewResource = pathRoute.reverse().reduce((a, b) => {
    const temp = {};
    temp[b] = a;

    return temp;
  }, _.size(pathRoute) === 3
    ? {
      panels: [
        {
          type: 'text',
          content: '<h1>Notebook Title ...</h1>',
        },
      ],
      meta: pathRoute,
      title: Resources.getNotebookTitle(pathRoute.join('')),
      id: pathRoute.join(''),
    }
    : {});
  return localState.setIn(
    ['resources'],
    localState.get('resources').mergeDeep(aNewResource)
  );
}

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_RESOURCE_SELECTED:
      return state.setIn(['app', 'resource'], action.resource);
    case ADD_RESOURCE:
      let path = (action.resource || '').trim();
      if (action.resource.startsWith('https://github.com/')) {
        path = `${path.replace('https://github.com/', '')}/notebook1`;
      }
      if (!/^([a-zA-Z0-9_\-/:.]+)$/.test(path)) return state;
      const localState = state.setIn(['app', 'resource'], path);
      // Remove empty values in array
      const aNewResourcePath = path.split('/');
      if (_.size(aNewResourcePath) !== 3) {
        return state;
      }
      return createPath(aNewResourcePath, localState);

    default:
      return state;
  }
}

export default appReducer;
