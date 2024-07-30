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