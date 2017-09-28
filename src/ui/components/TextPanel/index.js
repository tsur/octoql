// MIT: FormidableLabs/component-playground
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MediumEditorComponent from 'ui/components/MediumEditor';
import TextPanelActions from 'ui/components/TextPanelActions';
import { updatePanel } from 'ui/components/TextPanelActions/actions';
import { Container, TextContainer } from './wrappers';

function TextPanel(props) {
  const defaultTextPanel = 'Insert query description here ...';
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
          onSave={(text) => props.updatePanel(props.id, props.path, text)}
          tag="div"
          text={props.panel.content || defaultTextPanel}
          options={{ spellcheck: false, toolbar: { buttons: toolbar } }}
        />
      </TextContainer>
      <TextPanelActions
        panel="text"
        removable={props.panel.removable}
        id={props.id}
        path={props.path}
      />
    </Container>
  );
}

TextPanel.propTypes = {
  panel: PropTypes.object,
  id: PropTypes.number,
  path: PropTypes.string,
  updatePanel: PropTypes.func,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  updatePanel: (panelID, panelPath, panelContent) =>
    dispatch(updatePanel(panelID, panelPath, panelContent)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextPanel);
