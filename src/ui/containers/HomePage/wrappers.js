/**
 *
 * App Wrappers
 */

/* System imports */
import styled from 'styled-components';

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
  overflow: hidden;
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
  padding: 0;
  -webkit-user-select: none;
  cursor: default;
  font-weight: bold;
  color: rgba(163, 168, 174, 0.3);
`;

export const MessageList = styled.ul`padding: 0;`;

export const MessageListItem = styled.li`
  margin: 0;
  list-style: none;
  padding: 0 30px;
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
  margin-left: 15px;
  transition: color .5s ease-in-out;
  color: rgba(163, 168, 174, 0.3);
  cursor: pointer;
  &:hover {
    color: rgba(163, 168, 174, 0.5);
  }
`;

export const LogoTitle = styled.span`font-size: 44px;`;
export const Help = styled.span`font-size: 17px;`;
