// MIT: FormidableLabs/component-playground
import React from 'react';
import {
  TextContainer,
  QueryContainer,
  Div,
  TextIcon,
  Icon,
  Menu,
  P,
} from './wrappers';

class PanelActions extends React.Component {
  render() {
    const MenuElement = (
      <Menu panel={this.props.panel}>
        <P>
          <Icon name="quote" small /> Create Text Panel
        </P>
        <P>
          <Icon name="terminal" small /> Create Query Panel
        </P>
        <P disabled>
          <Icon name="remove-close" small /> Remove Panel
        </P>
      </Menu>
    );

    return this.props.panel === 'text'
      ? <TextContainer>
        <Div>
          <TextIcon name="ellipsis" />
        </Div>
        {MenuElement}
      </TextContainer>
      : <QueryContainer>
        <Icon name="ellipsis" />
        {MenuElement}
      </QueryContainer>;
  }
}

export default PanelActions;
