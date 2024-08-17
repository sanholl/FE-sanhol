import styled from "@emotion/styled";

export const Container = styled.div<{ isOpen: boolean; isMyTripOpen: boolean }>`
  position: absolute;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? 'calc(3vw + 20px)' : 'calc(-53vw + 20px)')};
  width: ${({ isMyTripOpen }) => (isMyTripOpen ? '50vw' : '20vw')};
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

export const ToggleButton = styled.button<{ isOpen: boolean; isMyTripOpen: boolean }>`
  position: absolute;
  left: ${({ isOpen, isMyTripOpen }) => (isOpen ? (isMyTripOpen ? 'calc(53vw + 20px)' : 'calc(23vw + 20px)') : 'calc(3vw + 20px)')};
  top: 50%;
  z-index: 2;
  transition: left 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 0px;
  border: 1px solid #c0c0c0;
  background-color: white;
  width: 22px;
  height: 49px;
`;

export const RemoveButton = styled.button<{ isMyTripOpen: boolean; isOpen: boolean }>`
  display: ${({ isMyTripOpen, isOpen }) => ( isMyTripOpen && isOpen ? 'flex': 'none' )};
  left: ${({ isOpen, isMyTripOpen }) => (isOpen && isMyTripOpen ? 'calc(53vw + 20px)' : 'calc(-58vw + 20px)')};
  animation: ${({ isMyTripOpen, isOpen }) =>
    isMyTripOpen && isOpen ? 'slideIn 0.3s forwards' : 'slideOut 0.3s forwards'};
  position: absolute;
  cursor: pointer;
  border-radius: 0px;
  border: 1px solid #c0c0c0;
  z-index: 1;
  top: 5%;
  padding: 8px 12px;
  background-color: white;
`;