import styled from "@emotion/styled";

export const Container = styled.div<{ isOpen: boolean; isRecommendationOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-50vw')};
  width: ${({ isRecommendationOpen }) => (isRecommendationOpen ? '50vw' : '20vw')};
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

export const ToggleButton = styled.button<{ isOpen: boolean; isRecommendationOpen: boolean }>`
  position: absolute;
  left: ${({ isOpen, isRecommendationOpen }) => (isOpen ? (isRecommendationOpen ? '50vw' : '20vw') : '0')};
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

export const RemoveButton = styled.button<{ isRecommendationOpen: boolean; isOpen: boolean }>`
  display: ${({ isRecommendationOpen, isOpen }) => ( isRecommendationOpen && isOpen ? 'flex': 'none' )};
  left: ${({ isOpen, isRecommendationOpen }) => (isOpen && isRecommendationOpen ? '50vw' : '-50vw')};
  animation: ${({ isRecommendationOpen, isOpen }) =>
    isRecommendationOpen && isOpen ? 'slideIn 0.3s forwards' : 'slideOut 0.3s forwards'};
  position: absolute;
  cursor: pointer;
  border-radius: 0px;
  border: 1px solid #c0c0c0;
  z-index: 1;
  top: 5%;
  padding: 8px 12px;
  background-color: white;
`;

