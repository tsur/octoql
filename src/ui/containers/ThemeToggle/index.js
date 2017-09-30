/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import { mouseTrap } from 'react-mousetrap';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Octicon from 'react-octicon';
import HotKeys from 'ui/utils/hotkeys';
import PubSub from 'ui/utils/pubsub';
import { getThemeItems } from 'ui/containers/ThemeProvider/utils';
import { makeSelectThemeName } from 'ui/containers/ThemeProvider/selectors';
import { changeTheme } from 'ui/containers/ThemeProvider/actions';
import { Span } from './wrappers';

class ThemeToggle extends React.Component {
  componentWillMount() {
    // Subscribe to hotkeys
    this.props.bindShortcut(
      HotKeys.CHANGE_THEME.keys,
      this.bindShortcut.bind(this)
    );
    // Subscribe to fuzzy finder lang messages
    this.pubSubToken = PubSub.subscribe(
      PubSub.topics.FUZZY_FINDER_THEME_ITEM_SELECTED,
      this.changeTheme.bind(this)
    );
  }

  componentWillUnmount() {
    // Unsubscribe to fuzzy finder lang messages
    if (this.pubSubToken) PubSub.unsubscribe(this.pubSubToken);
  }

  openFuzzyFinder() {
    // Request the fuzzy finder
    PubSub.publish(PubSub.topics.FUZZY_FINDER_REQUIRED, {
      // items: [{title: 'English', marked: true, value: 'en'}, {title: 'Spanish', value: 'es'}, {title: 'Hebrew', value: 'heb'}],
      items: getThemeItems(this.props.theme),
      topic: PubSub.topics.FUZZY_FINDER_THEME_ITEM_SELECTED,
    });
  }

  bindShortcut() {
    this.openFuzzyFinder();
    // Prevent default
    return HotKeys.CHANGE_THEME.default;
  }

  changeTheme(topic, theme) {
    this.props.onThemeToggle(theme);
  }

  render() {
    return (
      <Span title={this.props.theme} onClick={() => this.openFuzzyFinder()}>
        <Octicon name="paintcan" /> <em>Themes</em>
      </Span>
    );
  }
}

ThemeToggle.propTypes = {
  onThemeToggle: React.PropTypes.func,
  theme: React.PropTypes.string,
  bindShortcut: React.PropTypes.func,
};

const mapStateToProps = createSelector(makeSelectThemeName(), (theme) => ({
  theme,
}));

const mapDispatchToProps = (dispatch) => ({
  onThemeToggle: (theme) => dispatch(changeTheme(theme)),
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(
  mouseTrap(ThemeToggle)
);
