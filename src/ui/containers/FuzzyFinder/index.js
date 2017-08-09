import React, { PropTypes } from 'react';
import { mouseTrap } from 'react-mousetrap';
import { FormattedMessage } from 'react-intl';
import PubSub from 'ui/utils/pubsub';
import HotKeys from 'ui/utils/hotkeys';
import { Option } from 'ui/utils/helper';
import messages from './messages';
import {
  Modal,
  Overlay,
  TextBox,
  Results,
  ResultsItem,
  HintContainer,
  Hint,
  NoResults,
} from './wrappers';

class FuzzyFinder extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      items: [],
      topic: '',
      visible: false,
      selected: 0,
      input: '',
      filter: '',
      noMatchesText: messages.notFound,
      enableCustomSelection: false,
    };
  }

  componentWillMount() {
    // Subscribe to hotkeys
    this.props.bindShortcut(
      HotKeys.EXIT_FUZZY_FINDER.keys,
      this.cancelByKey.bind(this)
    );
    this.props.bindShortcut(
      HotKeys.MOVE_DOWN_FUZZY_FINDER.keys,
      this.moveDown.bind(this)
    );
    this.props.bindShortcut(
      HotKeys.MOVE_UP_FUZZY_FINDER.keys,
      this.moveUp.bind(this)
    );
    this.props.bindShortcut(
      HotKeys.ENTER_FUZZY_FINDER.keys,
      this.selectItemByEnter.bind(this)
    );
    // Subscribe to fuzzy finder lang messages
    this.pubSubToken = PubSub.subscribe(
      PubSub.topics.FUZZY_FINDER_REQUIRED,
      this.reset.bind(this)
    );
  }

  componentWillUnmount() {
    // Unsubscribe to fuzzy finder lang messages
    if (this.pubSubToken) PubSub.unsubscribe(this.pubSubToken);
  }

  filter(item) {
    return this.context.intl
      .formatMessage({ id: item.title })
      .toLowerCase()
      .includes(this.state.filter.toLowerCase());
  }

  updateFilter(event) {
    this.setState({ filter: event.target.value });
  }

  reset(topic, message) {
    this.setState({
      selected: 0,
      visible: true,
      filter: '',
      enableCustomSelection: false,
      noMatchesText: messages.notFound,
      ...message,
    });
    this.searchInput.focus();
  }

  moveDown() {
    this.setState({
      selected: (this.state.selected + 1) % this.state.items.length,
    });
    this.updateScroll();
  }

  moveUp() {
    if (this.state.selected) {
      this.setState({
        selected: (this.state.selected - 1) % this.state.items.length,
      });
    } else {
      this.setState({ selected: this.state.items.length - 1 });
    }
    this.updateScroll();
  }

  selectItemByEnter() {
    this.selectItem();
    // Prevent default
    return HotKeys.ENTER_FUZZY_FINDER.default;
  }

  // @todo this currently depends on item <li> height size and <ol> height size, make it to work without that dependence
  updateScroll() {
    if (this.state.selected < 6) {
      this.itemsList.scrollTop = 0;
    } else if (this.state.selected === 6) {
      this.itemsList.scrollTop = 19;
    }
    this.itemsList.scrollTop = (19 + (this.state.selected - 6)) * 47;
    // this.refs.itemsList.scrollTop = ((this.state.selected-1)*47) - this.refs.itemSelected.offsetTop;
  }

  cancelByKey() {
    this.close();
    // Prevent default
    return HotKeys.EXIT_FUZZY_FINDER.default;
  }

  highlightItem(event) {
    const target =
      event.target.tagName.toLowerCase() === 'span'
        ? event.target.parentElement
        : event.target;
    const position = target.getAttribute('rel');
    if (target.tagName.toLowerCase() === 'input') return;
    if (target.tagName.toLowerCase() !== 'li') {
      this.close();
      return;
    }
    this.setState({ selected: position });
  }

  selectItemByClick(event) {
    const target =
      event.target.tagName.toLowerCase() === 'span'
        ? event.target.parentElement
        : event.target;
    if (target.tagName.toLowerCase() === 'input') return;
    if (this.searchInput === document.activeElement) return;
    if (target.tagName.toLowerCase() !== 'li') {
      this.close();
      return;
    }
    if (target.classList.contains('no-select')) return;
    if (target.getAttribute('rel') !== this.state.selected) return;
    this.selectItem();
  }

  selectItem() {
    const selectedItem = this.state.items.filter(this.filter.bind(this))[
      this.state.selected
    ];
    if (selectedItem) {
      this.close(selectedItem.value);
      return;
    }
    if (this.state.enableCustomSelection) this.close(this.state.filter);
  }

  close(emit) {
    this.setState({ visible: false });
    if (emit) PubSub.publish(this.state.topic, emit);
    PubSub.publish(PubSub.topics.FUZZY_FINDER_CLOSED);
  }

  render() {
    return (
      <Modal visible={this.state.visible}>
        <Overlay
          onMouseDown={(event) => this.highlightItem(event)}
          onMouseUp={(event) => this.selectItemByClick(event)}
        >
          <TextBox
            innerRef={(input) => {
              this.searchInput = input;
            }}
            className={'mousetrap'}
            type="text"
            value={this.state.filter}
            onChange={(event) => this.updateFilter(event)}
          />
          <Results
            innerRef={(ol) => {
              this.itemsList = ol;
            }}
          >
            {Option(
              this.state.items
                .filter((item) => this.filter(item))
                .map((item, pos) =>
                  <ResultsItem
                    key={item.value}
                    actived={item.marked}
                    selected={this.state.selected === pos}
                    rel={pos}
                  >
                    {item.hint
                      ? <HintContainer>
                        <Hint>
                          {item.hint}
                        </Hint>
                      </HintContainer>
                      : null}
                    <FormattedMessage id={item.title} />
                  </ResultsItem>
                ),
              <NoResults className={'no-select'}>
                <FormattedMessage {...this.state.noMatchesText} />
              </NoResults>
            )}
          </Results>
        </Overlay>
      </Modal>
    );
  }
}

FuzzyFinder.contextTypes = {
  intl: PropTypes.object.isRequired,
};

FuzzyFinder.propTypes = {
  bindShortcut: PropTypes.func.isRequired,
};

export default mouseTrap(FuzzyFinder);
