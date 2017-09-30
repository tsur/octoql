/**
 *
 * App Wrappers
 */

/* System imports */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Octicon from 'react-octicon';
import styled from 'styled-components';
import messages from './messages';

const Wrapper = styled.div``;
const TreeWrapper = styled.div`
  padding: 5px 0 5px 0;
  margin-bottom: -5px;
  overflow: visible;
  .tree_list_item_header_collapsed::before {
    content: '\\f078' !important;
  }
`;
const TreeList = styled.ol`
  outline: none;
  font-size: 1em;
  flex-grow: 1;
  flex-shrink: 0;
  isolation: isolate;
  min-width: -webkit-min-content;
  min-height: 100%;
  padding-left: 5px;
  padding-right: 10px;
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
  cursor: default;
`;
const TreeList2 = styled.ol`
  position: static;
  margin: 0;
  padding: 0;
  list-style: none;
  cursor: default;

  & li {
    color: #73c990;
    padding-left: 17px;
  }

  & li::before {
    content: '';
    position: absolute;
  }
`;
const TreeList3 = styled.ol`
  position: static;
  margin: 0;
  padding: 0;
  list-style: none;
  cursor: default;

  & li {
    color: rgb(226, 192, 141);
    padding-left: 17px;
  }

  & li::before {
    content: '';
    position: absolute;
  }
`;
const selected = `
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 25px;
    background-color: #27292c;
  }

  & * {
    position: relative;
  }
`;
const TreeItem = styled.li`
  padding-top: 0;
  &::before {
    border-top: none;
    height: 3em;
    border-top: 1px solid transparent;
    background-clip: padding-box;
    content: '';
    position: absolute;
  }
  ${(props) => (props.selected === true ? selected : '')};
`;
const TreeItem2 = styled.li`${(props) => (props.selected ? selected : '')};`;
const TreeItem3 = styled.li`
  margin-left: 22px;
  color: #e2c08d;
  ${(props) => (props.selected ? selected : '')};
`;
const collapsed = `
&::before {
  content: '\\f078' !important;
}
`;
const TreeItemHeader = styled.div`
  line-height: 2em;
  white-space: nowrap;
  position: relative;
  left: 5px;

  & span {
    line-height: 2.5em;
    display: inline-block;
  }

  &::before {
    text-align: center;
    position: relative;
    top: -1px;
    margin-right: 5px;
    font-family: 'octicons';
    font-weight: normal;
    font-style: normal;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    text-decoration: none;
    font-size: 12px;
    width: 12px;
    height: 12px;
    content: '\\f0a3';
  }

  ${(props) => (props.selected === true ? collapsed : '')};
`;
const level1 = `
  &::before {
    position: relative;
    top: 1px;
    margin-right: 5px;
    font: normal normal normal 16px/1 octicons;
    font-weight: normal;
    font-style: normal;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    text-decoration: none;
    font-size: 16px;
    width: 16px;
    height: 16px;
    content: '\\F00A'; /* 018, 037, 00A */
  }
`;
const level2 = `
  &::before {
    margin-right: 5px;
    font-family: 'octicons';
    font-weight: normal;
    font-style: normal;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    text-decoration: none;
    font-size: 16px;
    width: 16px;
    height: 16px;
    content: '\\F001';
  }
`;
const level3 = `
  &::before {
    margin-right: 5px;
    font-family: 'octicons';
    font-weight: normal;
    font-style: normal;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    text-decoration: none;
    font-size: 16px;
    width: 16px;
    height: 16px;
    content: '\\F0C8'; /* 011, 0C8, 00D */
}
`;
const TreeItemIcon = styled.span`
  ${(props) => (props.icon === 'level1' ? level1 : '')} ${(props) =>
      props.icon === 'level2' ? level2 : ''};
  ${(props) => (props.icon === 'level3' ? level3 : '')};
`;
export function Tree3(props) {
  return (
    <Wrapper>
      {Object.keys(props.items[props.field]).sort().map((item) =>
        <TreeList3 key={`${props.rel}/${item}`}>
          <TreeItem3
            rel={`${props.rel}/${item}`}
            selected={props.selected === `${props.rel}/${item}`}
          >
            <TreeItemIcon icon="level3">
              {item}
            </TreeItemIcon>
          </TreeItem3>
        </TreeList3>
      )}
    </Wrapper>
  );
}

Tree3.propTypes = {
  items: React.PropTypes.object,
  field: React.PropTypes.string,
  selected: React.PropTypes.string,
  rel: React.PropTypes.string,
};

export function Tree2(props) {
  return (
    <Wrapper>
      {Object.keys(props.items[props.field]).sort().map((item) =>
        <TreeList2 key={`${props.field}/${item}`}>
          <TreeItem2
            rel={`${props.field}/${item}`}
            selected={props.selected === `${props.field}/${item}`}
          >
            <TreeItemHeader>
              <TreeItemIcon icon="level2">
                {item}
              </TreeItemIcon>
            </TreeItemHeader>
            <Tree3
              items={props.items[props.field]}
              field={item}
              rel={`${props.field}/${item}`}
              selected={props.selected}
            />
          </TreeItem2>
        </TreeList2>
      )}
    </Wrapper>
  );
}

Tree2.propTypes = {
  items: React.PropTypes.object,
  field: React.PropTypes.string,
  selected: React.PropTypes.string,
};

export function Tree(props) {
  return (
    <TreeScroll
      onDoubleClick={(event) => props.onDoubleClick(event)}
      onClick={(event) => props.onClick(event)}
      innerRef={(treeView) => props.setTree(treeView)}
    >
      {Object.keys(props.items[props.field]).sort().map((item) =>
        <TreeWrapper key={item}>
          <TreeList tabIndex="-1">
            <TreeItem rel={item} selected={props.selected === item}>
              <TreeItemHeader>
                <TreeItemIcon icon="level1">
                  {item}
                </TreeItemIcon>
              </TreeItemHeader>
              <Tree2
                items={props.items[props.field]}
                field={item}
                selected={props.selected}
              />
            </TreeItem>
          </TreeList>
        </TreeWrapper>
      )}
    </TreeScroll>
  );
}

Tree.propTypes = {
  items: React.PropTypes.object,
  field: React.PropTypes.string,
  selected: React.PropTypes.string,
};

export const Container = styled.div`
  display: flex;
  background-color: ${(props) =>
    props.theme && props.theme.sidebar.bgColor
      ? props.theme.sidebar.bgColor
      : '#161719'};
  color: ${(props) =>
    props.theme && props.theme.sidebar.color
      ? props.theme.sidebar.color
      : '#a3a8ae'};
  position: relative;
  box-sizing: border-box;
  height: initial;
  overflow: hidden;
  cursor: default;
  -webkit-user-select: none;
  user-select: none;
  min-width: 200px;
  width: 200px;
  max-width: 200px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  border-right: ${(props) =>
    props.theme && props.theme.sidebar.border
      ? props.theme.sidebar.border
      : '1px solid #27292c'};
`;

const GlobalScrollContainer = styled.div`
  height: calc(100% - 40px);
  width: 100%;
  padding: 10px 0 0 5px;
`;
// export const GlobalScroll = styled.div`
const GlobalScrollStyled = styled.div`
  position: absolute;
  height: calc(100% - 40px);
  width: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const GlobalScroll = ({ children }) =>
  <GlobalScrollContainer>
    <GlobalScrollStyled>
      {children}
    </GlobalScrollStyled>
  </GlobalScrollContainer>;

export const TreeScroll = styled.div`
  border-image: none;
  border-bottom: ${(props) =>
    props.theme && props.theme.sidebar.border
      ? props.theme.sidebar.border
      : '1px solid #111314'};
  order: 0;
  border-width: 0 0 1px 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
`;

const ActionsDiv = styled.div`
  height: 40px;
  width: 100%;
  text-align: center;
  display: table;
  cursor: pointer;
`;
const ActionsDivContent = styled.div`
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  text-transform: uppercase;
  word-spacing: 5px;
  transition: all .5s ease-in-out;
  &:hover {
    color: rgba(226, 192, 141, 1);
  }
`;
export function Actions(props) {
  return (
    <ActionsDiv {...props}>
      <ActionsDivContent>
        <Octicon name="plus" />{' '}
        <FormattedMessage {...messages.addNotebookAction} />
      </ActionsDivContent>
    </ActionsDiv>
  );
}
