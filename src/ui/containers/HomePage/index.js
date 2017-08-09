/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { platformKeySymbols } from 'ui/utils/helper';
import Logo from 'ui/components/Logo';
import messages from './messages';
import {
  Container,
  MessageContainer,
  MessageCentered,
  MessageList,
  MessageListItem,
  KeyStroke,
  LogoTitle,
  Help,
} from './wrappers';

export default class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <Helmet
          title="OctoQL"
          meta={[
            {
              name: 'description',
              content:
                'OctoQL, a Custom Query Language for fetching Github Issues',
            },
          ]}
        />
        <MessageContainer style={{ display: 'none' }}>
          <MessageCentered>
            <Logo />
            <MessageList>
              <MessageListItem>
                <LogoTitle>
                  <FormattedMessage {...messages.header} />
                </LogoTitle>
              </MessageListItem>
              <MessageListItem>
                <FormattedMessage {...messages.subheader} />
              </MessageListItem>
              <MessageListItem>
                <Help>
                  <FormattedMessage {...messages.help} />
                  <KeyStroke>
                    {platformKeySymbols(0)}C
                  </KeyStroke>
                </Help>
              </MessageListItem>
            </MessageList>
          </MessageCentered>
        </MessageContainer>
      </Container>
    );
  }
}
