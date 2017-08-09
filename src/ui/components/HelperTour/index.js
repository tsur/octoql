import React from 'react';
import Tip from 'ui/components/Tip';
import messages from './messages';
import { Container } from './wrappers';

function HelperTour() {
  // Use code below if want to provide extra tip features (i.e. you have read this tip many times, need more help?)
  // componentWillMount() {
  //   // Subscribe to fuzzy finder lang messages
  //   this.pubSubTokenOpened = PubSub.subscribe(PubSub.topics.HELPER_TOUR_TIP_OPENED, this.tipOpened.bind(this));
  //   this.pubSubTokenClosed = PubSub.subscribe(PubSub.topics.HELPER_TOUR_TIP_CLOSED, this.tipClosed.bind(this));
  // }
  //
  // componentWillUnmount(){
  //   // Unsubscribe to fuzzy finder lang messages
  //   if(this.pubSubTokenOpened) PubSub.unsubscribe(this.pubSubTokenOpened);
  //   if(this.pubSubTokenClosed) PubSub.unsubscribe(this.pubSubTokenClosed);
  // }
  //
  // tipOpened(){
  //   this.setState({overlay: true});
  // }
  //
  // tipClosed(){
  //   this.setState({overlay: false});
  // }
  return (
    // left -> bottom 40, right 111
    // down -> bottom 40, left 170
    <Container>
      <Tip message={messages.treeMessage} direction="up" top="15" left="170" />
      <Tip
        message={messages.footerLeftMessage}
        direction="down"
        bottom="7"
        left="190"
      />
      <Tip
        message={messages.footerRightMessage}
        direction="down"
        bottom="7"
        right="215"
      />
      <div className={'overlay'} />
    </Container>
  );
}

export default HelperTour;
