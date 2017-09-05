import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
`;
const borderAnimation = keyframes`
0%{
  top:0
  height: 10%;
  border-left: 2px solid rgba(115, 201, 144, 0.3);
}
50% {
  top:90%;
  height: 10%;
}
100%{
  // background-color: rgba(115, 201, 144, 0.3);
  border-left: 2px solid rgba(115, 201, 144, 0.3);
  height: 10%;
}
`;

const animation = `
transition: all 1s ease-in-out;
animation: ${borderAnimation};
animation-duration: 1.5s;
animation-direction: alternate;
animation-iteration-count: infinite;
`;

export const EditorContainer = styled.div`
  padding: 2px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  color: grey;
  width: 100%;
  position: relative;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 2px;
    height: 0%;
    width: 0%;
    ${(props) => (props.loading ? animation : '')};
  }
`;
