import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`

  html,
  body {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  body {
    font-family: 'BlinkMacSystemFont', 'Lucida Grande', 'Segoe UI', Ubuntu, Cantarell, Arial, sans-serif;
    font-weight: normal;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #161719;
    color: #a3a8ae;
    font-size: 11px;
    min-height: 100%;
    min-width: 100%;
  }

  ::-webkit-scrollbar {
      width: 0.5em;
      height: 0.5em;
  }

  ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
      background: rgba(100, 100, 100, 0.8);
  }

  ::-webkit-scrollbar-corner,
  ::-webkit-scrollbar-thumb:window-inactive {
      background: rgba(100, 100, 100, 0.4);
  }
`;
