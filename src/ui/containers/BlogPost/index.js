/**
*
* BlogPost
*
*/

import React from 'react';
import { connect } from 'react-redux';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { selectBlogPostVisibility } from 'ui/containers/BlogPost/selectors';
import { toggleBlogPostVisibility } from 'ui/containers/BlogPost/actions';
import messages from './messages';
import {
  Container,
  GlobalScroll,
  ContainerSwitcher,
  Nav,
  Div,
} from './wrappers';

class BlogPost extends React.Component {
  constructor() {
    super();
    this.state = { chapter: 'intro' };
  }
  moveToChapter(chapter) {
    this.setState({ chapter });
  }
  render() {
    return (
      <Container expanded={this.props.blogPostVisibility}>
        <ContainerSwitcher
          expanded={this.props.blogPostVisibility}
          title="Expand/Collapse Tutorial"
          onClick={() => this.props.toggleBlogPostVisibility()}
        />
        <GlobalScroll>
          <h2>Crafting a DSL</h2>
          <Nav
            actived={this.state.chapter === 'intro'}
            onClick={(event) => this.moveToChapter('intro')}
          >
            Intro
          </Nav>{' '}
          |{' '}
          <Nav
            actived={this.state.chapter === 'grammar'}
            onClick={(event) => this.moveToChapter('grammar')}
          >
            Grammar
          </Nav>{' '}
          |{' '}
          <Nav
            actived={this.state.chapter === 'references'}
            onClick={(event) => this.moveToChapter('references')}
          >
            References
          </Nav>
          <Div visible={this.state.chapter === 'intro'}>
            <p>
              Data is probably the most valuable and requested asset all over
              the world. We humans are eager to consume it and are constantly
              looking for ever-complex, accurate, specific data sets to increase
              our knowledge stock and keep it up to date.
            </p>
            <p>
              Whether application logs aggregation analysis, trading market
              rates comparison or simply the weather forecast analysis,
              general-purpose languages cannot fully provide users with the best
              tools for interacting, retrieving and solving domain related
              problems within the context a domain expert would expect to.
            </p>
            <p>
              In our first post, we made a general introduction to this topic,
              but did not get our hands into the job. This time we'll make it by
              designing and implementing an interesting case of a domain
              specific language: OctoQL.
            </p>
            <p>
              Domain specific languages can be shaped as internal/embebbed and
              as externals. Whereas the embedded/internal DSL are limited by the
              host language they are built on top of, the external ones can be
              more expressive at cost of requiring further tooling and higher
              maintenance efforts.
            </p>
            <p>
              We'll work out an external DSL solution for learning purposes as
              most of well known DSL implementations are external. Some examples
              might include SQL, HTML or CSS, to name a few. To make this
              exercise easier to follow, we'll work with one of the most well
              known development platform. Yep, I'm talking about Github.
            </p>
            <p>
              Working with Github issues is sometimes a bit annoying, specially
              when dealing with complex filters. Retrieving all issues assigned
              to an user where labels contains some tags but at same time labels
              must not contain certain tags can become not so intuitive and
              straight forward to achieve as it may seem to. This is why it
              might be interesting to build a DSL to provide and offer a better
              experience when interacting and retrieving Github issues.
            </p>
            <p>
              We will want to make our DSL as familiar as possible to our final
              users. As the DSL solution we're going to build is intended to be
              used by Github users in general, which is a farily huge audience,
              mostly made of software developers, we'll try to make it as
              familiar as possible to all of them.
            </p>
            <p>
              In that sense, using an existing programmig language oriented
              solution would favor one group of developers over the others,
              which would be also better implemented by an internal or embedded
              DSL rather than an external, so instead we are going to adopt a
              completely different approach b using an sql-like syntax for our
              DSL as this is fairly familiar to most of software developers
              regardless the programing language they are used to code in.
            </p>
            <p>
              As explained in the last post, external DSL require a lexer and a
              parser. We can use external tools to generate both the lexer and
              parser or we can build them from scratch by ourself if higher
              control for better error recovering or reporting is required.
            </p>
            <p>
              This time we'll be using PEG.js, which is a JavaScript based
              parser generator library that produces fast parsers with excellent
              error reporting. There are other good alternatives as parboiled2
              for Scala users or ANTLR for Java users. You can find more
              PEG-based solutions at http://bford.info/packrat/
            </p>
          </Div>
          <Div visible={this.state.chapter === 'grammar'}>
            <p>
              The grammar could be described as the final outcome of our
              specific domain modeling process for which we will have to work
              out later an specific implementation.
            </p>
            <p>
              A proper grammar definition requires us to grab a deep
              understanding about the domain we are working with and this, in
              turn, forces us to clearly know the requirements and problems our
              final users are trying to solve. So yep, we have to put ourselves
              in our user shoes, which can be translated as performing different
              analysis, trying things out and spending time gathering
              information about the needed requirements from the domain experts.
              The Grammar rules will come and get improved over and over again
              out of the final, end domain expert users feedback.
            </p>
            <p>
              In our example, the domain becomes the issues we deal with in our
              Github repositories. So first thing we would like to do is to
              quickly access those issues without too much boilerplate. What
              about this ?
            </p>
            <pre>{'  from <username>/<repository>'}</pre>
            <p>
              That's the least info needed to retrieve the Github issues we
              would be interested in. You can try that query on the example
              notebook on the left!
            </p>
            <p>
              In order to make that query to work we need some processing
              involving the tokens we are really interested in and what to do
              with them. Both jobs can be handled by using a lexer and a parser.
              Next is a possible grammar for our yet tiny "from" DSL in which we
              define several rules.
            </p>
            <pre>
              {`dsl 
  = f:from
  { return fetchGithubIssues(f.user, f.repo) }

from "From Statement"
  = ws* "from"i ws+ user:word '/' repo:word 
  { return {user, repo} }

word "A word"
  = w:[a-zA-Z0-9\_\-]+ 
  { return join(w) }

ws "Control Chars"
  = [ \\n\\r\\t]
`}
            </pre>
            <p>
              To match both the user along the repository we define the "word"
              rule. We would like to be errors tolerant up to a certain point so
              we'll ignore all control characters in between the most important
              tokens. This is managed by the "ws" rule. Finally, to glue it all
              together we create a "from" rule which will return the info we
              need to later retrieve the Github issues in the "dsl" rule.
            </p>{' '}
            <p>
              Note we're also using a custom function named join in the "word"
              rule. This is due to the fact that our rules return by default a
              sequence of matched characters, but we actually want to return the
              whole world, so we simply join all characters so we can return the
              whole word string. in PEG.js, we can define our own custom
              functions and use them straight away in our grammars.
            </p>
            <p>
              So far it will fetch all github issues based on the username and
              the repository, but this is not very useful as users normally are
              not interested in retrieving all Github issues at once. So let's
              add a simple "limit" rule to our grammar to set the number of
              issues to retrieve.
            </p>
            <pre>
              {`dsl 
  = f:from ws+ l:limit
  { return fetchGithubIssues(f.user, f.repo, l) }

...

limit "Limit"
  = "limit"i ws+ limitIssues:integer 
  { return limitIssues }

integer
= d1:[1-9] d2:([0-9]*) 
{ return parseInt(\`$\{d1\}$\{join(d2)\}\`) }
`}
            </pre>
            <p>
              Fantastic!, our users can now specify how many issues to get back
              by simply adding a "limit" sentence to the query:
            </p>
            <pre>
              {`  from <username>/<repository> 
  limit <number>`}
            </pre>
            <p>
              The limit rule should only match natural positive numbers, so
              typing a negative or a floating number will raise an error and the
              query will not run, so the user will not get any Github issues
              back. This is an example where implementing our own lexer and
              parser might be a better choice. We could still run the query even
              if the user provided a wrong limit value. But for our purposes,
              the PEG.js error reporting output is great.
            </p>
            <p>
              Those grammar rules are ok, but they do not actually add any great
              value to what can be achieved by using the Github issues page. We
              would like to search Github issues by applying filters in a easier
              and more intuitive way. Let's add the "where" clause to our
              grammar!
            </p>
            <p>
              The "where" clause can be used in our octo queries to retrieve
              only those issues that fulfill certain conditions. The conditions
              can be any of those scalar, well-known conditions used by
              developers in their if/for/while favourite programming language
              control structures.
            </p>
            <pre>
              {`  from <username>/<repository> 
  limit <number>
  where <condition>`}
            </pre>
            <p>
              From here on, we could start adding some other interesting rules
              to our grammar as "select" to specify what issues properties as
              title, labels, content, ... are we interested in, the "order by"
              rule to order issues by a field, or the "group by" to make
              aggregations and more powerful analysis over our Gitub issues. The
              possibilities are many and it will depend in a great extend on the
              users needs and what they demands as domain experts. Feel free to
              check the final grammar here and to contribute if interested.
            </p>
            <p>Happy dsling ^^</p>
          </Div>
          <Div visible={this.state.chapter === 'references'}>
            <p>
              Below you will find some of the best resources references you can
              find in the DSL world.
            </p>
            <p>* DSL in Action</p>
            <p>...</p>
          </Div>
        </GlobalScroll>
      </Container>
    );
  }
}

BlogPost.propTypes = {
  blogPostVisibility: React.PropTypes.bool,
  toggleBlogPostVisibility: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  blogPostVisibility: selectBlogPostVisibility(),
});

function mapDispatchToProps(dispatch) {
  return {
    toggleBlogPostVisibility: () => dispatch(toggleBlogPostVisibility()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);
