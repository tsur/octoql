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
  background-color: ${(props) =>
    props.theme && props.theme.app.bgColor
      ? props.theme.app.bgColor
      : '#161719'};
  color: ${(props) =>
    props.theme && props.theme.app.color ? props.theme.app.color : ' #a3a8ae'};
  font-size: 11px;

  *::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }

  *::-webkit-scrollbar-track {
    background: ${(props) =>
      props.theme && props.theme.app.scrollTrack
        ? props.theme.app.scrollTrack
        : 'rgb(60, 60, 60)'};
    box-shadow: ${(props) =>
      props.theme && props.theme.app.scrollShadow
        ? props.theme.app.scrollShadow
        : 'inset 0 0 6px rgba(0, 0, 0, 0.3)'};
  }

  *::-webkit-scrollbar-thumb {
    background: ${(props) =>
      props.theme && props.theme.app.scrollThumb
        ? props.theme.app.scrollThumb
        : 'rgb(60, 60, 60)'};
  }

  *::-webkit-scrollbar-corner {
    background: ${(props) =>
      props.theme && props.theme.app.scrollCorner
        ? props.theme.app.scrollCorner
        : 'rgb(60, 60, 60)'};
  }

  *::-webkit-scrollbar-thumb:window-inactive {
    background: ${(props) =>
      props.theme && props.theme.app.scrollThumbInactive
        ? props.theme.app.scrollThumbInactive
        : 'rgb(60, 60, 60)'};
  }
`;

export const Article = styled.article`
  display: flex;
  flex: 1;
  min-width: 0;
  position: relative;
`;
