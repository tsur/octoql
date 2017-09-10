// MIT: FormidableLabs/component-playground
import React, { PropTypes } from 'react';
import { mouseTrap } from 'react-mousetrap';
import Octicon from 'react-octicon';
import PubSub from 'ui/utils/pubsub';
import HotKeys from 'ui/utils/hotkeys';
import PanelActions from 'ui/components/PanelActions';
import CodeMirror from 'codemirror';
import 'codemirror/addon/selection/mark-selection';
import 'codemirror/addon/selection/active-line';
import 'codemirror/lib/codemirror.css';
import './theme/styles.css';
import { Container, EditorContainer, Loading, Results } from './wrappers';
import octoqlMode from './octoql';

class QueryPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      issues: [
        { title: 'hi', labels: 'p1, p2' },
        { title: 'hi', labels: 'p1, p2' },
        { title: 'hi', labels: 'p1, p2' },
        { title: 'hi', labels: 'p1, p2' },
        { title: 'hi', labels: 'p1, p2' },
        { title: 'hi', labels: 'p1, p2' },
      ],
    };
  }
  componentWillMount() {
    /* Global Key Bindings */

    // Subscribe to hotkeys
    // this.props.bindShortcut(
    //   HotKeys.RUN_NOTEBOOK.keys,
    //   this.runNotebookShortcut.bind(this)
    // );

    // Subscribe to fuzzy finder when it is closed to recover editor focus
    // this.pubSubToken = PubSub.subscribe(PubSub.topics.FUZZY_FINDER_CLOSED, () =>
    //   this.fuzzyFinderClosed()
    // );

    /* Local Key Bindings */
    this.localKeyBindings = {};
    this.localKeyBindings[
      HotKeys.RUN_NOTEBOOK.keys
    ] = this.runNotebookShortcut.bind(this);
  }

  componentDidMount() {
    octoqlMode(CodeMirror);
    this.editor = CodeMirror.fromTextArea(this.textArea, {
      mode: 'octoql',
      lineNumbers: false,
      lineWrapping: true,
      smartIndent: false,
      matchBrackets: true,
      theme: 'talo',
      // theme: 'zenburn',
      readOnly: false,
      styleActiveLine: true,
      styleSelectedText: true,
    });

    this.editor.setOption('extraKeys', this.localKeyBindings);
    this.editor.getWrapperElement().style['font-size'] = '14px';
    this.editor.refresh();
    // this.editor.setCursor(this.editor.lineCount() + 1);
    this.editor.setCursor(this.editor.lineCount());
    this.editor.focus();
    this.enableMouseTrapShortcut();

    // this.editor.on('change', this._handleChange);
  }

  componentWillUnmount() {
    // Unsubscribe to fuzzy finder lang messages
    if (this.pubSubToken) PubSub.unsubscribe(this.pubSubToken);
  }

  enableMouseTrapShortcut() {
    Array.from(
      this.editorContainer.querySelectorAll('textarea')
    ).forEach((textareaElement) => textareaElement.classList.add('mousetrap'));
  }

  fuzzyFinderClosed() {
    // Remember what editor was actived and filter by it
    // if (!this.last_editor_actived) return;
    this.editor.focus();
  }

  runNotebookShortcut() {
    this.setState({ loading: true });
    this.editor.setOption('readOnly', true);
    this.editor.setOption('styleActiveLine', false);
    this.editor.getWrapperElement().style['background-color'] =
      'rgba(96,146, 237, .1)';
    // 'rgba(0, 0, 0, 0.5)';
    console.log('Running notebook', this.props.query);
    return HotKeys.RUN_NOTEBOOK.default;
  }

  render() {
    return (
      <div>
        <Container>
          <EditorContainer
            innerRef={(editorContainer) =>
              (this.editorContainer = editorContainer)}
          >
            <textarea
              ref={(textarea) => (this.textArea = textarea)}
              defaultValue={this.props.query}
            />
            {this.state.loading &&
              <Loading>
                <Octicon name="mark-github" spin />
              </Loading>}
          </EditorContainer>
          <PanelActions panel="query" />
        </Container>
        {this.state.issues.length && <Results issues={this.state.issues} />}
      </div>
    );
  }
}

QueryPanel.propTypes = {
  query: PropTypes.string,
  // bindShortcut: PropTypes.func,
};

export default mouseTrap(QueryPanel);
