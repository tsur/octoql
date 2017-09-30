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
  Intro,
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
            <Intro>
              <p>
                Data is probably the most valuable and requested asset all over
                the world. We humans are eager to consume it and are constantly
                looking for ever-complex, accurate, specific data sets to
                increase our knowledge stock and keep it up to date. Whether
                application logs aggregation analysis, trading market rates
                comparison or simply the weather forecast analysis,
                general-purpose languages cannot fully provide users with the
                best tools for interacting, retrieving and solving domain
                related problems within the context a domain expert would expect
                to.In our first post, we made a general introduction to this topic,
                but did not get our hands into the job. This time we'll make it
                by designing and implementing an interesting case of a domain
                specific language: OctoQL.
              </p>
              {/* <p>
                Domain specific languages can be shaped as internal or embebbed and
                as externals. Whereas the embedded/ internal DSL are limited by
                the host language they are built on top of, the external ones
                can be more expressive at cost of requiring further tooling and
                higher maintenance efforts.We'll work out an external DSL
                solution for learning purposes as most of well known DSL
                implementations are external. Some examples might include SQL,
                HTML or CSS, to name a few. To make this exercise easier to
                follow, we'll work with one of the most well known development
                platform. Yep, I'm talking about Github.
              </p> */}
              <p>
                Working with Github issues is sometimes a bit annoying,
                specially when dealing with complex filters. Retrieving all
                issues assigned to an user where labels contains some tags but
                at same time labels must not contain certain tags can become not
                so intuitive and straight forward to achieve as it may seem to.
                This is why it might be interesting to build a DSL to provide
                and offer a better experience when interacting and retrieving
                Github issues.
              </p>
              <p>
                We will want to make our DSL as familiar as possible to our
                final users. As the DSL solution we're going to build is
                intended to be used by Github users in general, which is a
                farily huge audience, mostly made of software developers, we'll
                try to make it as familiar as possible to all of them.In that
                sense, using an existing programmig language oriented solution
                would favor one group of developers over the others, which would
                be also better implemented by an internal or embedded DSL rather
                than an external, so instead we are going to adopt a completely
                different approach b using an sql-like syntax for our DSL as
                this is fairly familiar to most of software developers
                regardless the programing language they are used to code in.
              </p>
              <p>
                As explained in our last blog post, an external DSL requires a lexer and
                a parser. We can use external tools to generate both the lexer
                and parser or we can build them from scratch by ourself if
                higher control for better error recovering or reporting is
                required.This time we'll be using PEG.js, which is a JavaScript
                based parser generator library that produces fast parsers with
                excellent error reporting. There are other good alternatives as
                parboiled2 for Scala users or ANTLR for Java users. You can find
                more PEG-based solutions at http://bford.info/packrat/
              </p>
              <p>Continue by opening the example notebook at the sidebar menu  to learn how to use OctoQL and to lear how to implement a DSL like it!</p>
            </Intro>
          </MessageCentered>
        </MessageContainer>
      </Container>
    );
  }
}
