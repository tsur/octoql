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
import BlogPost from 'ui/containers/BlogPost';
import { getNotebookContent } from 'ui/utils/resources';
import { changeResourceSelected } from 'ui/containers/ResourcesTree/actions';
import PanelContainer from 'ui/components/PanelContainer';
import { selectResources, selectResource } from './selectors';
import messages from './messages';
import { normalizeRoute } from 'ui/utils/url';
import { Container, Scroll, Div } from './wrappers';

export class WorkSpacePage extends React.Component {
  componentDidMount() {
    // Doe snot work with routing !!!!!!!!!!!!
    this.props.changeResourceSelected(
      normalizeRoute(location.pathname).replace('/notebooks/', '')
    );
  }

  render() {
    const notebook = getNotebookContent(
      this.props.resources,
      normalizeRoute(location.pathname).replace('/notebooks/', '')
    );
    console.log('>>>', notebook);
    return (
      <Div>
        <Container>
          <Helmet
            title={`${notebook.title} - OctoQL Notebook`}
            meta={[
              { name: 'description', content: 'Description of WorkSpacePage' },
            ]}
          />
          <Scroll>
            {notebook.panels.map((panel, i) =>
              <PanelContainer
                className="talo-editor"
                panel={panel}
                key={i}
                id={i}
                path={normalizeRoute(location.pathname).replace(
                  '/notebooks/',
                  ''
                )}
              />
            )}
          </Scroll>
        </Container>
        <BlogPost />
      </Div>
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
