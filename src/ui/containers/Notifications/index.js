import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import messages from './messages';
import { removeNotification } from './actions';
import { selectNotifications } from './selectors';
import { Container, Notification } from './wrappers';

class Notifications extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Container>
        {this.props.notifications.map((notification, index) => 
        <Notification 
          key={index} 
          error={notification.error} 
          onClick={()=> this.props.removeNotification(index)}>
          <FormattedMessage {...messages[notification.message]}/>
        </Notification>
        )}
      </Container>
    );
  }
}

Notifications.contextTypes = {
  intl: PropTypes.object.isRequired,
};

Notifications.propTypes = {
};


const mapDispatchToProps = (dispatch) => ({
  removeNotification: (index) => dispatch(removeNotification(index)),
});

const mapStateToProps = createStructuredSelector({
  notifications: selectNotifications(),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  Notifications
);