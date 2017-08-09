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
import { appLocalesMessages } from 'ui/i18n';
import { getLangItems } from 'ui/utils/helper';
import { makeSelectLocale } from 'ui/containers/LanguageProvider/selectors';
import { changeLocale } from 'ui/containers/LanguageProvider/actions';
import { Span } from './wrappers';

class LocaleToggle extends React.Component {
  componentWillMount() {
    // Subscribe to hotkeys
    this.props.bindShortcut(
      HotKeys.CHANGE_LANG.keys,
      this.bindShortcut.bind(this)
    );
    // Subscribe to fuzzy finder lang messages
    this.pubSubToken = PubSub.subscribe(
      PubSub.topics.FUZZY_FINDER_LANG_ITEM_SELECTED,
      this.changeLang.bind(this)
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
      items: getLangItems(appLocalesMessages, this.props.locale),
      topic: PubSub.topics.FUZZY_FINDER_LANG_ITEM_SELECTED,
    });
  }

  bindShortcut() {
    this.openFuzzyFinder();
    // Prevent default
    return HotKeys.CHANGE_LANG.default;
  }

  changeLang(topic, lang) {
    this.props.onLocaleToggle(lang);
  }

  render() {
    return (
      <Span title={this.props.locale} onClick={() => this.openFuzzyFinder()}>
        <Octicon name="globe" /> <em>Language</em>
      </Span>
    );
  }
}

LocaleToggle.propTypes = {
  onLocaleToggle: React.PropTypes.func,
  locale: React.PropTypes.string,
  bindShortcut: React.PropTypes.func,
};

const mapStateToProps = createSelector(makeSelectLocale(), (locale) => ({
  locale,
}));

const mapDispatchToProps = (dispatch) => ({
  onLocaleToggle: (lang) => dispatch(changeLocale(lang)),
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(
  mouseTrap(LocaleToggle)
);
