import * as themes from './themes';

export function getThemeItems(currentTheme) {
  return Object.keys(themes).map((theme) => ({
    value: theme,
    title: `octoql.containers.ThemeProvider.themes.${theme}`,
    marked: theme === currentTheme,
  }));
}
