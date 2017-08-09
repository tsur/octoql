import React from 'react';
// import styles from './styles.css';
import { connect } from 'react-redux';
import { mouseTrap } from 'react-mousetrap';
import { createStructuredSelector } from 'reselect';
import { push } from 'react-router-redux';
import HotKeys from 'ui/utils/hotkeys';
import PubSub from 'ui/utils/pubsub';
import * as Resources from 'ui/utils/resources';
import { changeResourceSelected, addTreeResource } from './actions';
import { selectResources, selectResource } from './selectors';
import messages from './messages';
import { Container, GlobalScroll, Tree } from './wrappers';

class ResourcesTree extends React.Component {
  componentWillMount() {
    // Subscribe to hotkeys
    this.props.bindShortcut(
      HotKeys.ADD_NOTEBOOK.keys,
      this.addNotebookShortcut.bind(this)
    );
    // Subscribe to fuzzy finder lang messages
    this.pubSubToken = PubSub.subscribe(
      PubSub.topics.FUZZY_FINDER_NOTEBOOK_ITEM_ADDED,
      this.addNotebookAction.bind(this)
    );
  }

  componentDidMount() {
    // Use state.notebookSelected instead of props.notebookSelected for keeping state locally (no notebook selected on application startup)
    // notebook will be selected only on click
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    // Unsubscribe to fuzzy finder lang messages
    if (this.pubSubToken) PubSub.unsubscribe(this.pubSubToken);
  }

  addNotebookFuzzyFinder() {
    // Request the fuzzy finder
    PubSub.publish(PubSub.topics.FUZZY_FINDER_REQUIRED, {
      enableCustomSelection: true,
      filter: this.props.resourceSelected,
      noMatchesText: messages.addNotebook,
      topic: PubSub.topics.FUZZY_FINDER_NOTEBOOK_ITEM_ADDED,
    });
  }

  addNotebookShortcut() {
    this.addNotebookFuzzyFinder();
    // Prevent default
    return HotKeys.ADD_NOTEBOOK.default;
  }

  addNotebookAction(topic, resource) {
    this.props.addTreeResource(resource);

    const [username, repository, notebookTitle] = resource.split('/');
    // if a notebook
    if (
      this.props.resources[username] &&
      this.props.resources[username][repository] &&
      this.props.resources[username][repository][notebookTitle]
    ) {
      // Expand username
      const usernameLevel = this.treeView.querySelector(
        `li[rel="${username}"] > div:nth-child(1)`
      );
      usernameLevel.classList.remove('tree_list_item_header_collapsed');
      // Expand repository
      const repositoryLevel = this.treeView.querySelector(
        `li[rel="${username}/${repository}"] > div:nth-child(1)`
      );
      repositoryLevel.classList.remove('tree_list_item_header_collapsed');
      Array.from(
        this.treeView.querySelectorAll(`li[rel="${username}"] > div > ol`)
      ).forEach((item) => (item.style.display = 'block'));
      // Expand notebook
      const notebookLevel = this.treeView.querySelector(
        `li[rel="${username}/${repository}/${notebookTitle}"]`
      );
      Array.from(
        notebookLevel.parentElement.parentElement.querySelectorAll('ol')
      ).forEach((item) => (item.style.display = 'block'));
    }
  }

  toggleSubtree(root, subtree) {
    if (subtree) {
      Array.from(subtree).forEach(
        (item) =>
          (item.style.display =
            item.style.display === 'none' ? 'block' : 'none')
      );
    }
    if (root) root.classList.toggle('tree_list_item_header_collapsed');
  }

  select(event, noToggle) {
    let target = event.target;
    while (target && target.tagName.toLowerCase() !== 'li') {
      target = target.parentElement;
    }
    if (!target) return '';
    // if (target.getAttribute('rel') === this.props.resourceSelected) return '';
    this.props.changeResourceSelected(target.getAttribute('rel'));
    if (!noToggle) {
      this.toggleSubtree(
        target.querySelector('div'),
        target.parentElement.parentElement.querySelectorAll(
          `li[rel="${target.getAttribute('rel')}"] > div > ol`
        )
      );
    }
    return target.getAttribute('rel');
  }

  open(event) {
    const resource = this.select(event, true);
    if (Resources.isNotebook(resource)) {
      this.props.changeRoute(`/notebooks/${resource}`);
    }
  }

  render() {
    return (
      <Container>
        <GlobalScroll>
          <Tree
            onDoubleClick={(event) => this.open(event)}
            onClick={(event) => this.select(event)}
            setTree={(treeView) => {
              this.treeView = treeView;
            }}
            items={this.props}
            field={'resources'}
            selected={this.props.resourceSelected}
          />
        </GlobalScroll>
      </Container>
    );
  }
}

ResourcesTree.propTypes = {
  resources: React.PropTypes.object,
  resourceSelected: React.PropTypes.string,
  bindShortcut: React.PropTypes.func,
  addTreeResource: React.PropTypes.func,
  changeResourceSelected: React.PropTypes.func,
  changeRoute: React.PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  changeResourceSelected: (resource) =>
    dispatch(changeResourceSelected(resource)),
  addTreeResource: (resource) => dispatch(addTreeResource(resource)),
  changeRoute: (url) => dispatch(push(url)),
});

const mapStateToProps = createStructuredSelector({
  resources: selectResources(),
  resourceSelected: selectResource(),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  mouseTrap(ResourcesTree)
);
