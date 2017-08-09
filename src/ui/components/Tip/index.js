import React from 'react';
import { FormattedMessage } from 'react-intl';
import Octicon from 'react-octicon';
import PubSub from 'ui/utils/pubsub';
import { Animate, Container, ToolTip } from './wrappers';

class Tip extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }
  startReadingTip() {
    this.setState({ visible: true });
    PubSub.publish(PubSub.topics.HELPER_TOUR_TIP_OPENED, null);
  }

  stopReadingTip() {
    this.setState({ visible: false });
    PubSub.publish(PubSub.topics.HELPER_TOUR_TIP_CLOSED, null);
  }

  remove() {
    // @todo is this fine? maybe we should re-render parent component to unmount child by publishing
    // PubSub.publish(PubSub.topics.HELPER_TOUR_TIP_REMOVED, null);
    this.tip.remove();
  }

  render() {
    return (
      <Container
        innerRef={(tip) => {
          this.tip = tip;
        }}
        onMouseEnter={(event) => this.startReadingTip(event)}
        onMouseLeave={(event) => this.stopReadingTip(event)}
        left={this.props.left}
        top={this.props.top}
        right={this.props.right}
        bottom={this.props.bottom}
      >
        <Animate>
          <Octicon name="octoface" />
        </Animate>
        <ToolTip direction={this.props.direction} visible={this.state.visible}>
          <FormattedMessage {...this.props.message} />
        </ToolTip>
      </Container>
    );
  }
}

Tip.propTypes = {
  message: React.PropTypes.shape({
    id: React.PropTypes.string,
    defaultMessage: React.PropTypes.string,
  }),
  direction: React.PropTypes.string,
  left: React.PropTypes.string,
  top: React.PropTypes.string,
  right: React.PropTypes.string,
  bottom: React.PropTypes.string,
};

export default Tip;
