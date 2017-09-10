import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  cursor: text;
`;

export const TextContainer = styled.div`
  width: 100%;
  margin-bottom: 5px;

  & div {
    outline: none;
    font-size: 14px;
    font-family: monospace;
    /*text-shadow: 0 0 2px rgba(255, 255, 255, 0.7), 0 0 10px rgba(255, 255, 255, 0.4);*/
    margin: 0;
  }

  & p {
    margin: 0;
  }

  & h1 {
    font-size: 1.5em;
  }

  & h2 {
    font-size: 1.2em;
  }

  & a {
    color: inherit;
    text-decoration: underline;
  }
`;
