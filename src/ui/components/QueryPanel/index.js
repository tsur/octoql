// MIT: FormidableLabs/component-playground
import React, { PropTypes } from 'react';
import PanelActions from 'ui/components/PanelActions';
import CodeMirror from 'codemirror';
import 'codemirror/addon/selection/mark-selection';
import 'codemirror/addon/selection/active-line';
import 'codemirror/lib/codemirror.css';
import './theme/styles.css';
import { Container, EditorContainer } from './wrappers';
import octoqlMode from './octoql';

class QueryPanel extends React.Component {
  componentDidMount() {
    octoqlMode(CodeMirror);
    this.editor = CodeMirror.fromTextArea(this.textArea, {
      mode: 'octoql',
      lineNumbers: true,
      lineWrapping: true,
      smartIndent: false,
      matchBrackets: true,
      theme: 'talo',
      // theme: 'zenburn',
      readOnly: false,
      styleActiveLine: true,
      styleSelectedText: true,
    });

    this.editor.getWrapperElement().style['font-size'] = '14px';
    this.editor.refresh();
    // this.editor.setCursor(this.editor.lineCount() + 1);
    this.editor.setCursor(this.editor.lineCount());
    this.editor.focus();

    // this.editor.on('change', this._handleChange);
  }

  render() {
    return (
      <Container>
        <EditorContainer>
          <textarea
            ref={(textarea) => (this.textArea = textarea)}
            defaultValue={this.props.query}
          />
        </EditorContainer>
        <PanelActions />
      </Container>
    );
  }
}

QueryPanel.propTypes = {
  query: PropTypes.string,
};

export default QueryPanel;
