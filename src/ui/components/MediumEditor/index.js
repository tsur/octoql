// MIT: FormidableLabs/component-playground

import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';
import MediumEditor from 'medium-editor';
import blacklist from 'blacklist';

class ReactMediumEditor extends React.Component {
  static defaultProps = {
    tag: 'div',
  };

  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text,
    };
  }

  componentDidMount() {
    const dom = findDOMNode(this);
    this.medium = new MediumEditor(dom, this.props.options);
    this.medium.subscribe('editableInput', () => {
      this.updated = true;
      this.change(dom.innerHTML);
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.text !== this.state.text && !this.updated) {
      this.setState({ text: nextProps.text });
    }

    if (this.updated) this.updated = false;
  }

  componentDidUpdate() {
    this.medium.restoreSelection();
  }

  componentWillUnmount() {
    this.medium.destroy();
  }

  change(text) {
    if (this.props.onChange) this.props.onChange(text, this.medium);
  }

  render() {
    const tag = this.props.tag;
    const props = blacklist(
      this.props,
      'options',
      'text',
      'tag',
      'contentEditable',
      'dangerouslySetInnerHTML'
    );

    Object.assign(props, {
      dangerouslySetInnerHTML: { __html: this.state.text },
    });

    if (this.medium) {
      this.medium.saveSelection();
    }

    return React.createElement(tag, {
      onBlur: (event) => props.onSave(this.medium.getContent(0)),
      ...props,
    });
  }
}

ReactMediumEditor.propTypes = {
  onSave: PropTypes.func,
  onChange: PropTypes.func,
  text: PropTypes.string,
  tag: PropTypes.string,
  options: PropTypes.object,
};

export default ReactMediumEditor;
