/**
 *
 * App Wrappers
 */

/* System imports */
import styled from 'styled-components';
import { Link } from 'react-router';

export const Container = styled.article`
  position: relative;
  flex: 1;
  display: 'flex';
`;

export const MessageContainer = styled.div`
  display: block !important;
  /*pointer-events: none;*/
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
`;

export const MessageCentered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  text-align: center;
  font-size: 36px;
  margin: 0;
  padding: 50px;
  padding-bottom: 0;
  -webkit-user-select: none;
  cursor: default;
  font-weight: bold;
  color: ${(props) =>
    props.theme && props.theme.home.titleColor
      ? props.theme.home.titleColor
      : 'rgba(163, 168, 174, 0.3)'};
`;

export const MessageList = styled.ul`
  padding: 0;
  margin: 15px 0;
`;

export const MessageListItem = styled.li`
  margin: 0;
  list-style: none;
  padding: 0;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  width: 100%;
  font-size: 26px;
`;

export const KeyStroke = styled.span`
  border: 2px solid;
  padding: 0 5px;
  border-radius: 9px;
  font-family: "Helvetica Neue", Arial, sans-serif;
  margin-left: 8px;
  transition: color .5s ease-in-out;
  color: rgba(163, 168, 174, 0.3);
  cursor: pointer;
  &:hover {
    color: rgba(163, 168, 174, 0.5);
  }
`;
export const Intro = styled.div`
  font-size: 0.4em;
  text-align: justify;
  font-weight: normal;
  padding-bottom: 30px;
  color: ${(props) =>
    props.theme && props.theme.home.color
      ? props.theme.home.color
      : 'rgba(255, 255, 255, 0.35)'};
`;
export const LogoTitle = styled.span`font-size: 44px;`;
export const Help = styled.span`font-size: 17px;`;

export const Button = styled(Link)`

  text-decoration: none;
  border-radius: 2px;
  /* outline: none; */
  border: 1px solid rgba(100,148,237,0.6);
  padding: 8px;
  display: block;
  width: 80px;
  margin: 0 auto;
  margin-top: 20px;
  font-size: 0.5em;
  color: rgba(100,148,237,0.6);
  text-transform: uppercase;
  background-color: transparent;
  word-spacing: 4px;
  transition: all .5s ease-in-out;
  cursor: pointer;

  &:hover {
    border: 1px solid
      ${(props) =>
        props.theme && props.theme.home.tryButtonHoverColor
          ? props.theme.home.tryButtonHoverColor
          : 'rgba(255, 255, 255, 0.6)'};
    color: ${(props) =>
      props.theme && props.theme.home.tryButtonHoverColor
        ? props.theme.home.tryButtonHoverColor
        : 'rgba(255, 255, 255, 0.6)'};
  }
`;
