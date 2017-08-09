/**
 *
 * App Wrappers
 */

/* System imports */
import styled from 'styled-components';

const modalStyles = `
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const hiddenStyles = `
  display: none;
`;

export const Modal = styled.div`
  ${(props) => (props.visible ? modalStyles : hiddenStyles)};
`;

export const Overlay = styled.div`
  position: relative;
  width: 100%;
  max-width: 50em;
  margin: 0 auto;
  left: initial;
  z-index: 9999;
  background-color: transparent;
  padding: 0.75em;
  top: 0;
  border-top: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    background-color: #1d1f21;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0 0 6px 6px;
    box-shadow: 0 6px 12px -2px rgba(0, 0, 0, 0.4);
  }

  &:after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: rgba(12, 13, 14, 0.5);
    backface-visibility: hidden;
    -webkit-animation: overlay-fade 0.1s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;

export const TextBox = styled.input`
  position: relative;
  display: inline-block;
  border-radius: 4px;
  border: 2px solid transparent;
  padding: 5px;
  font-size: 12px;
  width: 100%;
  margin: 0;
  height: 2.5em;
  cursor: pointer;
  outline: none;
  color: #d9dbde;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: -webkit-image-set(
        url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAL0lEQVQoz2NgCD3x//9/BhBYBWdhgFVAiVW4JBFKGIa4AqD0//9D3pt4I4tAdAMAHTQ/j5Zom30AAAAASUVORK5CYII=')
          1x
      )
      5 8,
    text;

  &:focus {
    border: 2px solid rgba(115, 201, 144, 0.7);
    color: rgba(115, 201, 144, 0.7);
    -webkit-text-fill-color: #d9dbde;
  }

  &::selection {
    background: rgba(115, 201, 144, 0.3);
  }
`;

export const Results = styled.ol`
  border: 1px solid #111314;
  background-color: #222426;
  position: relative;
  overflow-y: auto;
  max-height: 312px;
  margin: 10px 0 0 0;
  padding: 0;
  list-style: none;
  cursor: default;
`;

const item = `
  font-weight: normal;
  color: #d9dbde;
  padding: 12px 1em;
  line-height: 2em;
  border-bottom: 1px solid #111314;
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  & span {
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
`;

const itemActived = `
  &:before {
    margin-right: 0.45454545em;
    color: #73c990;
    font-family: 'octicons';
    font-weight: normal;
    font-style: normal;
    display: inline-block;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    text-decoration: none;
    font-size: 16px;
    width: 16px;
    height: 16px;
    content: "\f03a";
  }
`;
const itemSelected = `
  background-color: #303337;
`;

export const ResultsItem = styled.li`
  ${item} ${(props) => (props.actived ? itemActived : '')} ${(props) =>
    props.selected ? itemSelected : ''};
`;

export const HintContainer = styled.div`float: right;`;

export const Hint = styled.kbd`
  margin-top: -1px;
  margin-left: 0.75em;
  margin-right: calc(-0.5em + 1px);
  display: inline-block;
  margin-left: 0.45454545em;
  padding: 0 0.375em;
  line-height: 2;
  font-family: inherit;
  font-size: 1em;
  letter-spacing: 0.1em;
  border-radius: 3px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(0, 0, 0, 0.2);
  color: #d7dae0;
`;

export const NoResults = styled.li`
  ${item} 
  background-color: transparent;
  color: inherit;
  border: none;
`;

// FormattedMessage does not pass className,
// so it cannot be used yet with styled-components
// export const ResultItemText = styled.span`
//   user-drag: none;
//   user-select: none;
//   -moz-user-select: none;
//   -webkit-user-drag: none;
//   -webkit-user-select: none;
//   -ms-user-select: none;
// `;
