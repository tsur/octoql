/**
 *
 * App Wrappers
 */

/* System imports */
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  margin: 0;
  position: relative;
`;

export const Scroll = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-top: 15px;
  padding-bottom: 10px;
`;
