/*
 *
 * WorkSpacePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { getNotebookContent } from 'ui/utils/resources';
import { changeResourceSelected } from 'ui/containers/ResourcesTree/actions';
import PanelContainer from 'ui/components/PanelContainer';
import { selectResources, selectResource } from './selectors';
import messages from './messages';
import { Container, Scroll } from './wrappers';

export class WorkSpacePage extends React.Component {
  componentDidMount() {
    // Doe snot work with routing !!!!!!!!!!!!
    this.props.changeResourceSelected(
      location.pathname.replace('/notebooks/', '')
    );
  }

  render() {
    const notebook = getNotebookContent(
      this.props.resources,
      location.pathname.replace('/notebooks/', '')
    );
    return (
      <Container>
        <Helmet
          title={`${notebook.title} - OctoQL Workspace`}
          meta={[
            { name: 'description', content: 'Description of WorkSpacePage' },
          ]}
        />
        <Scroll>
          {notebook.queries.map((query, i) =>
            <PanelContainer
              className="talo-editor"
              description={query.description}
              query={query.query}
              key={i}
            />
          )}
        </Scroll>
      </Container>
    );
  }
}

WorkSpacePage.propTypes = {
  resources: React.PropTypes.object,
  resourceSelected: React.PropTypes.string,
  changeResourceSelected: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  resources: selectResources(),
  resourceSelected: selectResource(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeResourceSelected: (resource) =>
      dispatch(changeResourceSelected(resource)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkSpacePage);
