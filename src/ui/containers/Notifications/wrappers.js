/**
 *
 * App Wrappers
 */

/* System imports */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Octicon from 'react-octicon';

export const Container = styled.div`
  position:absolute;
  right: 0;
  top:0;
  width: 280px;
  // height: calc(100% - 3em);
  margin: 0;
  z-index: 10;
`;

const NotificationStyled = styled.div`
  background-color: ${(props) => props.error ? '#e2c08d': '#73c990'};
  color: ${(props) => props.error ? '#3a3636': '#3a3636'};
  font-weight: 500;
  width: 250px;
  padding: 15px;
  border-radius: 2px;
  margin: 20px auto;
  // text-transform: uppercase;
  box-shadow: 1px 1px 2px ${(props) => props.error ? '#e2c08d': '#73c990'};
  // transition: all .5s ease-in-out;
`;

const Remove = styled.span`
  position: absolute;
  right: 0;
  margin-right: 25px;
  cursor: pointer;
`;
export function Notification({children, error, onClick}){
  return <NotificationStyled error={error}>
    <Remove onClick={onClick}><Octicon name="remove-close" /></Remove>
    {children}</NotificationStyled>;
}
