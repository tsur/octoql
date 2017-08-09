/**
 *
 * App Wrappers
 */

/* System imports */
import styled from 'styled-components';
import { Link } from 'react-router';

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
  background-color: #161719;
  height: 3.0em;
  border-top: 1px solid #27292c; /*rgba(115, 170, 100, 0.3);*/
`;

export const StatusBar = styled.div`
  -webkit-user-select: none;
  cursor: default;
  overflow: hidden;
  white-space: nowrap;
  min-width: -webkit-min-content;
  display: flex;
  justify-content: space-between;
  padding: 0 0.75em;
  width: 100%;
  line-height: 3.0em;
`;

// StatusBarLeft is same as StatusBarRight, but it is intended
export const StatusBarLeft = styled.div`
  & span {
    margin: auto 4px;
    cursor: pointer;

    & em {
      font-style: normal;
    }

    & em:hover {
      font-style: normal;
      text-decoration: underline;
    }
  }
`;

export const StatusBarRight = styled.div`
  & span {
    margin: auto 4px;
    cursor: pointer;

    & em {
      font-style: normal;
    }

    & em:hover {
      font-style: normal;
      text-decoration: underline;
    }
  }
`;

export const StatusBarImportantIcon = styled.span`color: #6494ed;`;
export const StatusBarPrimaryIcon = styled.span`color: rgb(226, 192, 141);`;
export const StatusBarSecondaryIcon = styled.span`color: #73c990;`;
export const A = styled(Link)`
  text-decoration: none;
  color: #6494ed;
  font-style: normal;
`;
