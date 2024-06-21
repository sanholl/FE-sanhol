import styled from "@emotion/styled";

export const Item = styled.li<{ color: string }>`
  display: flex;
  flex-direction: column;

  padding: 8px;

  width: 250px;
  height: 300px;
  
  border: 1px solid #c0c0c0;
  box-shadow: 1px 1px 3px 1px #c0c0c0;

  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    background-color: ${props => props.color};
    opacity: 0.8;
    transition: background-color 0s;
  }
`;
export const Header = styled.section`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;
export const Body = styled.section`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`;
export const Image = styled.img`
  width: 180px;
  height: 180px;
`;
export const Footer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;