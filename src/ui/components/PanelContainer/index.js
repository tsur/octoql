// MIT: FormidableLabs/component-playground
import React, { PropTypes } from 'react';
import TextPanel from 'ui/components/TextPanel';
import QueryPanel from 'ui/components/QueryPanel';
import { Container } from './wrappers';
// import * as sdk from 'sdk'; //rx, ramda, superagent, evetnsource, url, events, loglevel

function PanelContainer(props) {
  const defaultTextPanel = 'Your story begins here ...';
  const defaultQueryPanel = 'take 5';

  return (
    <Container>
      <TextPanel text={props.description || defaultTextPanel} />
      <QueryPanel query={props.query || defaultQueryPanel} />
    </Container>
  );
}

PanelContainer.propTypes = {
  description: PropTypes.string,
  query: PropTypes.string,
};
export default PanelContainer;
