/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { makeSelectTheme } from './selectors';

export function ThemeProvider(props) {
  return (
    <StyledThemeProvider theme={props.theme}>
      {React.Children.only(props.children)}
    </StyledThemeProvider>
  );
}

ThemeProvider.propTypes = {
  theme: React.PropTypes.object,
  children: React.PropTypes.object,
};

const mapStateToProps = createSelector(makeSelectTheme(), (theme) => ({
  theme: theme.toJS(),
}));

export default connect(mapStateToProps)(ThemeProvider);
