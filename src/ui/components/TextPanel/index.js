// MIT: FormidableLabs/component-playground
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MediumEditorComponent from 'ui/components/MediumEditor';
import TextPanelActions from 'ui/components/TextPanelActions';
import { updatePanel } from 'ui/components/TextPanelActions/actions';
import { Container, TextContainer } from './wrappers';

// const toolbar = ['bold', 'italic', 'underline', 'strikethrough', 'orderedlist', 'indent', 'outdent', 'h1', 'h2', 'anchor'];
const defaultTextPanel = 'Insert query description here ...';
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

class TextPanel extends React.Component {

  // shouldComponentUpdate(){
  //   return false;
  // }

  render(){ 
    return (
      <Container>
        <TextContainer>
          <MediumEditorComponent
            onSave={(text) => this.props.updatePanel(this.props.id, this.props.path, text)}
            tag="div"
            text={this.props.panel.content || defaultTextPanel}
            options={{ spellcheck: false, toolbar: { buttons: toolbar } }}
          />
        </TextContainer>
        <TextPanelActions
          panel="text"
          removable={this.props.panel.removable}
          id={this.props.id}
          path={this.props.path}
        />
      </Container>
    );
  }
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
