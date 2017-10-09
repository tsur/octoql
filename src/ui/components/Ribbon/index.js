/**
*
* Logo
*
*/

import React from 'react';
import styled from 'styled-components';

const A = styled.a`

    width: 12.1em;
    height: 12.1em;
    position: absolute;
    overflow: hidden;
    top: 0;
    right: 0;
    z-index: 9999;
    pointer-events: none;
    font-size: 13px;
    text-decoration: none;
    text-indent: -999999px;

    &:before, &:after{
        /* The right and left classes determine the side we attach our banner to */
    position: absolute;
    display: block;
    width: 15.38em;
    height: 1.54em;
    
    top: 3.23em;
    right: -3.23em;
    
    box-sizing: content-box;
    transform: rotate(45deg);
    } 

    &:before {
        content: "";
    
        /* Add a bit of padding to give some substance outside the "stitching" */
        padding: .38em 0;
    
        /* Set the base colour */
        background-color: ${(props) =>
            props.theme && props.theme.ribbon.bgColor
              ? props.theme.ribbon.bgColor
              : '#373636'};
    
        /* Set a gradient: transparent black at the top to almost-transparent black at the bottom */
        // background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.15)));
        background-image: ${(props) =>
            props.theme && props.theme.ribbon.image
              ? props.theme.ribbon.image
              : 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))'};
    
        /* Add a drop shadow */
        box-shadow: ${(props) =>
            props.theme && props.theme.ribbon.shadow
              ? props.theme.ribbon.shadow
              : '0 .15em .23em 0 rgba(0, 0, 0, 0.5)'};
    
        pointer-events: auto;
    }

  &:after {
    /* Set the text from the data-ribbon attribute */
    content: attr(data-ribbon);
  
    /* Set the text properties */
    color: ${(props) =>
        props.theme && props.theme.ribbon.color
          ? props.theme.ribbon.color
          : 'rgb(226, 192, 141)'};
          
    font: 700 1em "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 1.54em;
    text-decoration: none;
    text-shadow:  ${(props) =>
        props.theme && props.theme.ribbon.textShadow
          ? props.theme.ribbon.textShadow
          : '0 -.08em rgba(0, 0, 0, 0.5)'};
    text-align: center;
    text-indent: 0;
  
    /* Set the layout properties */
    padding: .15em 0;
    margin: .15em 0;
  
    /* Add "stitching" effect */
    border-width: .04em 0;
    border-style: dotted;
    border-color: rgba(255, 255, 255, 0.3);
  }
`;


function Ribbon(props) {
  return (
    <A target="_blank" href="https://github.com/tsur/octoql" data-ribbon="Fork me on GitHub" title="Fork me on GitHub">Fork me on GitHub</A>
    
  );
}

Ribbon.propTypes = {};

export default Ribbon;
