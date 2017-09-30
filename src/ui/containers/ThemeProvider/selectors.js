import { createSelector } from 'reselect';

/**
 * Direct selector to the languageToggle state domain
 */
const selectTheme = (state) => state.get('theme');

/**
 * Select the language locale
 */

const makeSelectTheme = () =>
  createSelector(selectTheme, (themeState) => themeState.get('theme'));

const makeSelectThemeName = () =>
  createSelector(selectTheme, (themeState) => themeState.get('name'));

export { selectTheme, makeSelectTheme, makeSelectThemeName };
