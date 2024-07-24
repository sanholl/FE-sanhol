import styled from "@emotion/styled";


export const Container = styled.div`
  position: absolute;
  height: 100vh;
  background: white;
  opacity: 0.8;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  width: 30vw;
  border: 1px solid #c0c0c0;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Form = styled.form`
  display: flex;
  position: sticky;
  top: 0;
`;

export const Input = styled.input`
  width: 100%;
  min-width: 200px;
  padding: 8px;
  border: 1px solid #c0c0c0;
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
