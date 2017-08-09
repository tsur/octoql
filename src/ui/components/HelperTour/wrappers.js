/**
 *
 * App Wrappers
 */

/* System imports */
import styled from 'styled-components';

export const Container = styled.div`
  & div:not(.overlay) ~ .overlay {
    transition: all 1s ease;
  }
  & div:not(.overlay):hover ~ .overlay {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    background-color: black;
  }
`;
