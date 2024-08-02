import styled from "@emotion/styled";

export const Container = styled.div`
  position: absolute;
  left: 20vw;
  height: 100vh;
  padding: 10px;
  width: 30vw;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SaveButton = styled.button`
  padding: 10px 15px;
  border-radius: 10px;
  background: #0385ff;
  color: white;
  border: none;
  min-width: 70%;
  cursor: pointer;
  justify-content: center;
  display: flex;

  &:hover {
    background: #a0c080;
  }
`;
