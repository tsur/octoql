/**
 *
 * App Wrappers
 */

/* System imports */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #161719;
  color: #a3a8ae;
  position: relative;
  box-sizing: border-box;
  height: initial;
  cursor: default;
  -webkit-user-select: none;
  user-select: none;
  width: 400px;
  max-width: 400px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding: 10px 0 0 5px;
  border-left: 1px solid #27292c;
  font-size: 14px;
  ${(props) => !props.expanded && 'max-width: 0px;'};
`;

export const GlobalScroll = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 15px;
`;

export const ContainerSwitcher = styled.span`
  background: rgb(60, 60, 60);
  display: inline-block;
  border-bottom-left-radius: 60px;
  border-top-left-radius: 60px;
  height: 30px;
  width: 15px;
  position: relative;
  top: 50%;
  left: -21px;
  padding: 0;
  margin: 0;
  cursor: pointer;

  &:before {
    transform: translate(5px, 5px);
    content: ${(props) => (props.expanded ? '"\\F078"' : '"\\F0A4"')};
    font-family: 'octicons';
    font-weight: normal;
    font-style: normal;
    font-size: 17px;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    position: relative;
    top: -2px;
  }
`;

export const Section = styled.h3`
  display: inline-block;
  margin: 0;
  font-weight: bold;
`;
