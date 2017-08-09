/*
 *
 * WorkSpacePage actions
 *
 */

import { TOGGLE_VISIBILITY } from './constants';

export function toggleBlogPostVisibility() {
  return {
    type: TOGGLE_VISIBILITY,
  };
}
