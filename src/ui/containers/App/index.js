/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

/* System imports */
import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { mouseTrap } from 'react-mousetrap';
import mouseTrapCore from 'mousetrap';

/* Components imports */
import ResourcesTree from 'ui/containers/ResourcesTree';
import Footer from 'ui/components/Footer';
import HelperTour from 'ui/components/HelperTour';
import FuzzyFinder from 'ui/containers/FuzzyFinder';
import Notifications from 'ui/containers/Notifications';
import HotKeys from 'ui/utils/hotkeys';
import PubSub from 'ui/utils/pubsub';
import { Section, Article } from './wrappers';
import messages from './messages';

class App extends React.Component {
  componentWillMount() {
    // Subscribe to hotkeys
    this.props.bindShortcut(
      HotKeys.DISCOVER_ACTION.keys,
      this.discoverAction.bind(this)
    );

    // Subscribe to fuzzy finder lang messages
    this.pubSubToken = PubSub.subscribe(
      PubSub.topics.ACTION_SELECTED,
      this.actionSelected.bind(this)
    );
  }

  componentWillUnmount() {
    // Unsubscribe to fuzzy finder lang messages
    if (this.pubSubToken) PubSub.unsubscribe(this.pubSubToken);
  }

  openFuzzyFinder() {
    // Request the fuzzy finder
    PubSub.publish(PubSub.topics.FUZZY_FINDER_REQUIRED, {
      items: [
        {
          value: HotKeys.CHANGE_LANG.keys,
          title: messages.changeLang.id,
          hint: HotKeys.CHANGE_LANG.keys,
        },
        {
          value: HotKeys.CHANGE_THEME.keys,
          title: messages.changeTheme.id,
          hint: HotKeys.CHANGE_THEME.keys,
        },
        {
          value: HotKeys.ADD_NOTEBOOK.keys,
          title: messages.addNotebook.id,
          hint: HotKeys.ADD_NOTEBOOK.keys,
        },
        {
          value: HotKeys.OPEN_NOTEBOOK.keys,
          title: messages.openNotebook.id,
          hint: HotKeys.OPEN_NOTEBOOK.keys,
        },
        {
          value: HotKeys.SAVE_NOTEBOOKS.keys,
          title: messages.saveNotebooks.id,
          hint: HotKeys.SAVE_NOTEBOOKS.keys,
        },
      ],
      topic: PubSub.topics.ACTION_SELECTED,
    });
  }

  discoverAction() {
    this.openFuzzyFinder();
    // Prevent default
    return HotKeys.DISCOVER_ACTION.default;
  }

  actionSelected(topic, resource) {
    mouseTrapCore.trigger(resource);
  }

  render() {
    return (
      <Section>
        <Helmet
          titleTemplate="%s - OctoQL"
          defaultTitle="OctoQL"
          meta={[
            {
              name: 'description',
              content: 'Octo Query Language for Fetching Github Issues',
            },
          ]}
        />
        <Article>
          <ResourcesTree />
          {React.Children.toArray(this.props.children)}
          {/* <BlogPost /> */}
        </Article>
        <Footer />
        <FuzzyFinder />
        <Notifications />
        <HelperTour />
      </Section>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  bindShortcut: PropTypes.func,
};

export default mouseTrap(App);
