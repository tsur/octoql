/**
 *
 * App Wrappers
 */

/* System imports */
import styled from 'styled-components';

export const Section = styled.section`
  min-height: 100%;
  min-width: 100%;
  margin: 0 auto;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Article = styled.article`
  display: flex;
  flex: 1;
  min-width: 0;
  position: relative;
`;
