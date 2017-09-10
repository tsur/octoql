// MIT: FormidableLabs/component-playground
import React, { PropTypes } from 'react';
import MediumEditorComponent from 'ui/components/MediumEditor';
import PanelActions from 'ui/components/PanelActions';
import { Container, TextContainer } from './wrappers';

function TextPanel(props) {
  // const toolbar = ['bold', 'italic', 'underline', 'strikethrough', 'orderedlist', 'indent', 'outdent', 'h1', 'h2', 'anchor'];
  const toolbar = [
    'bold',
    'italic',
    'underline',
    'strikethrough',
    'h1',
    'h2',
    'anchor',
    'katex',
  ];

  return (
    <Container>
      <TextContainer>
        <MediumEditorComponent
          tag="div"
          text={props.text}
          options={{ spellcheck: false, toolbar: { buttons: toolbar } }}
        />
      </TextContainer>
      <PanelActions panel="text" />
    </Container>
  );
}

TextPanel.propTypes = {
  text: PropTypes.string,
};

export default TextPanel;
