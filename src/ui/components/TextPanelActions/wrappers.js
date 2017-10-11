import styled from 'styled-components';
import Octicon from 'react-octicon';

const visible = `
opacity: 1;
display: block;
`;

export const Icon = styled(Octicon)`
  position: relative;
  top: ${(props) => (props && props.small ? '-2' : '0')}px;
  left: ${(props) => (props && props.small ? '-5' : '0')}px;
  font-size: ${(props) => (props && props.small ? '14' : '28')}px;
  margin-left: ${(props) => (props && props.small ? '0' : '20')}px;
  vertical-align: middle;
  color: rgba(163, 168, 174, 0.5);
  cursor: pointer;
  transition: color .4s ease-in-out;
  &:hover {
    color: grey;
  }
`;

export const TextIcon = styled(Octicon)`
  display: table-cell;
  vertical-align: middle;
  position: relative;
  top: ${(props) => (props && props.small ? '-2' : '0')}px;
  left: ${(props) => (props && props.small ? '-5' : '0')}px;
  padding-left: 15px;
  padding-top: 2px;
  font-size: ${(props) => (props && props.small ? '14' : '28')}px;
  margin-left: ${(props) => (props && props.small ? '0' : '20')}px;
  vertical-align: middle;
  color: rgba(163, 168, 174, 0.5);
  cursor: pointer;
  transition: color .4s ease-in-out;
  &:hover {
    color: grey;
  }
`;

export const Div = styled.div`
  display: table;
  width: 100%;
  &:hover ~ div {
    ${visible};
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Menu = styled.div`
  background: ${(props) => 
    (props.theme && props.theme.workspace.actionsPanel.bgColor ? 
      props.theme.workspace.actionsPanel.bgColor : 'rgba(39, 41, 44, 0.9)')};
  color: #a3a8ae;
  border-radius: 5px;
  z-index: 999999;
  display: inline-table;
  opacity: 0;
  padding: 0px 20px;
  position: absolute;
  right: 55px;
  width: 180px;
  display: none;
  transition: opacity .25s ease-out;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
  user-select: none;
  margin-top: 11px;
  margin-bottom: 20px;

  &:hover {
    ${visible};
  }
`;

export const P = styled.p`
  cursor: ${(props) => (props && props.disabled ? 'normal' : 'pointer')};
  font-size: 12px;
  transition: color .4s ease-in-out;
  color: ${(props) =>
    props && props.disabled ? 'rgba(100, 100, 100, 0.5)' : 'inherit'};

  & > span {
    color: ${(props) =>
      props && props.disabled ? 'rgba(100, 100, 100, 0.5)' : 'inherit'};
  }
  &:hover {
    color: ${(props) =>
      props && props.disabled ? 'rgba(100, 100, 100, 0.5)' : '#6192ed'};
  }
  &:hover > span {
    color: ${(props) =>
      props && props.disabled ? 'rgba(100, 100, 100, 0.5)' : '#6192ed'};
  }
`;
