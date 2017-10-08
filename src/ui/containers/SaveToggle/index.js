/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import Octicon from 'react-octicon';
import messages from './messages';
import { saveNotebooks } from 'ui/containers/ResourcesTree/actions';
import { Span } from './wrappers';

class SaveToggle extends React.Component {

  saveNotebooks() {
    this.props.saveNotebooks();
  }

  render() {
    return (
      <Span onClick={() => this.saveNotebooks()}>
        <Octicon name="sync" /> <em><FormattedMessage {...messages.sync} /></em>
      </Span>
    );
  }
}

SaveToggle.propTypes = {
  saveNotebooks: React.PropTypes.func,
};

// const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => ({
  saveNotebooks: () => dispatch(saveNotebooks()),
  dispatch,
});

export default connect(null, mapDispatchToProps)(SaveToggle);
