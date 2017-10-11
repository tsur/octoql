/*
 *
 * LanguageProvider actions
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_THEME,
} from './constants';

export function changeTheme(theme) {
  return {
    type: CHANGE_THEME,
    theme: fromJS(theme),
  };
}
