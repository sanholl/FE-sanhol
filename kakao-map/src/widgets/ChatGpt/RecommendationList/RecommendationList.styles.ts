import styled from "@emotion/styled";

export const Container = styled.div`
  position: absolute;
  z-index: 1;
  height: 100vh;
  background: white;
  opacity: 0.8;
  overflow-y: auto;
  width: 20vw;
  left: 20vw;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-bottom: 1px dashed #d2d2d2;
  cursor: pointer;

  &:hover {
    background-color: #d2d2d2;
    opacity: 1;
    transition: background-color 0s;
  }
`;
