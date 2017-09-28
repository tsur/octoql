/*
 *
 * WorkSpacePage actions
 *
 */

import {
  CREATE_TEXT_PANEL,
  CREATE_QUERY_PANEL,
  REMOVE_PANEL,
} from './constants';

export function createTextPanel(id, path) {
  return {
    type: CREATE_TEXT_PANEL,
    id,
    path,
  };
}

export function createQueryPanel(id, path) {
  return {
    type: CREATE_QUERY_PANEL,
    id,
    path,
  };
}

export function removePanel(id, path) {
  return {
    type: REMOVE_PANEL,
    id,
    path,
  };
}
