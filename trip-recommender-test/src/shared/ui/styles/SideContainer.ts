import styled from "styled-components";

export const SideContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: calc(3vw + 20px);
  width: 20vw;
  height: 100%;
  background: white;
  overflow-y: auto;
  transition: left 0.3s ease-in-out, width 0.3s ease-in-out;
  z-index: 1;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */

  &::-webkit-scrollbar {
    display: none;  /* Webkit */
  }
`;