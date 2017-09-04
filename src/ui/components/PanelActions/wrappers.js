import styled from 'styled-components';
import Octicon from 'react-octicon';

export const Icon = styled(Octicon)`
  font-size: 28px;
  margin-left: 20px;
  vertical-align: middle;
  color: rgba(163, 168, 174, 0.5);
  cursor: pointer;
  transition: color .5s ease-in-out;
  &:hover {
    color: grey;
  }
`;
