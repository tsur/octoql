/**
 *
 * App Wrappers
 */

/* System imports */
import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`
  from {
      opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const danceAnimation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(2px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const Position = (position, amount) => `${position}: ${amount}px;`;

export const Container = styled.div`
  position: absolute;
  outline: none;
  z-index: 3;
  width: 16px;
  height: 16px;
  text-align: center;
  -webkit-transform: translateZ(0);
  -webkit-font-smoothing: antialiased;
  color: rgb(226, 192, 141);
  ${(props) => (props.left ? Position('left', props.left) : '')} ${(props) =>
      props.right ? Position('right', props.right) : ''} ${(props) =>
      props.top ? Position('top', props.top) : ''} ${(props) =>
      props.bottom ? Position('bottom', props.bottom) : ''};
`;

export const Animate = styled.div`
  opacity: 0;
  opacity: 1 \9; /*just in case ie*/
  -webkit-animation: ${fadeInAnimation} 1s ease-in 1,
    ${danceAnimation} 2s ease-in-out infinite alternate;
  -moz-animation: ${fadeInAnimation} 1s ease-in 1,
    ${danceAnimation} 2s ease-in-out infinite alternate;
  animation: ${fadeInAnimation} 1s ease-in 1,
    ${danceAnimation} 2s ease-in-out infinite alternate;

  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;

  -webkit-animation-delay: 2s;
  -moz-animation-delay: 2s;
  animation-delay: 2s;
`;

const down = `
 -webkit-transform: translateY(10px);
  -moz-transform: translateY(10px);
  -ms-transform: translateY(10px);
  -o-transform: translateY(10px);
  transform: translateY(10px);
`;
const up = `
  top: 30px;
  & :after {
    top: -10px;
    transform: rotate(180deg);
  }
  & :before {
    top: -20px;
  }
`;
const left = `
  left: -215px;
  top: -75px;
  bottom: initial;
  & :after {
    left: 208px;
    bottom: 15px;
    transform: rotate(270deg);
  }
  & :before {
    height: 105px;
    left: 200px;
    top: 0px;
    width: 20px;
  }
`;

const visible = `
  -webkit-transition: all .25s ease-out;
  -moz-transition: all .25s ease-out;
  -ms-transition: all .25s ease-out;
  -o-transition: all .25s ease-out;
  transition: all .25s ease-out;
  opacity: 1;
  pointer-events: auto;
  -webkit-transform: translateY(0px);
  -moz-transform: translateY(0px);
  -ms-transform: translateY(0px);
  -o-transform: translateY(0px);
  transform: translateY(0px);
`;

export const ToolTip = styled.div`
  background: rgba(39, 41, 44, 0.9);
  bottom: 100%;
  color: #a3a8ae;
  display: inline-table;
  left: -88px;
  margin-bottom: 15px;
  opacity: 0;
  padding: 20px;
  pointer-events: none;
  position: absolute;
  width: 200px;
  -webkit-transition: all .25s ease-out;
  -moz-transition: all .25s ease-out;
  -ms-transition: all .25s ease-out;
  -o-transition: all .25s ease-out;
  transition: all .25s ease-out;
  -webkit-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
  -moz-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
  -ms-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
  -o-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
  -webkit-user-select: none;

  & :before {
    bottom: -20px;
    content: " ";
    display: block;
    height: 20px;
    left: 0;
    position: absolute;
    width: 100%;
  }

  & :after {
    border-left: solid transparent 10px;
    border-right: solid transparent 10px;
    border-top: solid var(--bgColor) 10px;
    bottom: -10px;
    content: " ";
    height: 0;
    left: 50%;
    margin-left: -13px;
    position: absolute;
    width: 0;
  }

  ${(props) => (props.direction === 'up' ? up : '')} ${(props) =>
      props.direction === 'down' ? down : ''} ${(props) =>
      props.direction === 'left' ? left : ''};

  ${(props) => (props.visible ? visible : '')};
`;
