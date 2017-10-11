// MIT: FormidableLabs/component-playground
import React, { PropTypes } from 'react';
import TextPanel from 'ui/components/TextPanel';
import QueryPanel from 'ui/components/QueryPanel';
import { Container } from './wrappers';
// import * as sdk from 'sdk'; //rx, ramda, superagent, evetnsource, url, events, loglevel

function PanelContainer(props) {
  return (
    <Container>
      {props.panel.type === 'text'
        ? <TextPanel panel={props.panel} id={props.id} path={props.path} />
        : <QueryPanel panel={props.panel} id={props.id} path={props.path} />}
    </Container>
  );
}

PanelContainer.propTypes = {
  panel: PropTypes.object,
  id: PropTypes.number,
  path: PropTypes.string,
};

export default PanelContainer;
