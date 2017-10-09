import React from 'react';
import styled from 'styled-components';
// import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
`;
// const borderAnimation = keyframes`
// 0%{
//   height: 10%;
//   width: 10%;
// }
// 100%{
//   background-color: rgba(115, 201, 144, 0.3);
//   border-left: 2px solid rgba(115, 201, 144, 0.3);
//   height: 100%;
//   width: 100%;
// }
// `;

// const animation = `
// transition: all 1s ease-in-out;
// animation: ${borderAnimation};
// animation-duration: 1.5s;
// animation-direction: alternate;
// animation-iteration-count: infinite;
// `;

// UNCOMMENT ALL BELOW TO SET A BACKGROUND IN QUERY PANELS
export const EditorContainer = styled.div`
  color: grey;
  width: 100%;
  position: relative;
  .cm-s-talo .CodeMirror-activeline {
    background: ${(props) =>
      props.theme && props.theme.workspace.activeLine ? props.theme.workspace.activeLine : 'rgba(100, 100, 100, 0.1)'}; !important;
  }
`;

export const Loading = styled.div`
  text-align: center;
  margin: 10px;
  border-radius: 100%;
  border: 2px dotted rgba(115, 201, 144, .6);
  color: rgba(115, 201, 144, .5);
  position: absolute;
  top: 0px;
  right: 0px;
  // uncomment to center
  //top: 50%;
  //left: 50%;
  //transform: translate(-50%, -50%);
`;

const TableContainer = styled.table`
  width: 100%;
  height: 100%;
`;
const TableHeader = styled.tr`
  width: 100%;
  height: 34px;
  background-color: ${(props) =>
    props.even ? 'rgba(100, 100, 100, 0.2)' : 'rgba(100, 100, 100, 0.1)'};
  color: ${(props) => (props.even ? 'white' : 'rgba(187, 183, 183, 1)')};
`;
const TableBody = styled.tr`
  width: 100%;
  height: 34px;
  background-color: ${(props) =>
    props.even ? 'rgba(100, 100, 100, 0.2)' : 'rgba(100, 100, 100, 0.1)'};
  color: ${(props) => (props.even ? 'white' : 'rgba(187, 183, 183, 1)')};
`;
const Field = styled.td`padding: 0 10px;`;
const TableWrapper = styled.div`
  height: auto;
  max-height: 150px;
  overflow: auto;
  margin-bottom: 20px;
`;
export function Results(props) {
  return (
    <TableWrapper>
      <TableContainer>
        <TableHeader>
          {Object.keys(props.issues[0]).sort().map((issueField, i) =>
            <Field>
              {issueField}
            </Field>
          )}
        </TableHeader>
        {props.issues.map((issue, i) =>
          <TableBody even={(i + 1) % 2}>
            {Object.keys(issue).sort().map((issueField, i) =>
              <Field>
                {issue[issueField] ? JSON.stringify(issue[issueField]) : ''}
              </Field>
            )}
          </TableBody>
        )}
      </TableContainer>
    </TableWrapper>
  );
}

export const Error = styled.p`
  margin-top: 0;
  background-color: rgba(255, 0, 0, 0.2);
  padding: 10px;
`;
