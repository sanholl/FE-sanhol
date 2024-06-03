import styled from "@emotion/styled";
import PokeNameChip from "../Common/PokeNameChip";
import PokeMarkChip from "../Common/PokeMarkChip";
import { useNavigate } from "react-router-dom";

const TempImgUrl =  'https://www.cheonyu.com/_DATA/product/69100/69111_1697184997.jpg';

const PokeCard = () => {
  let navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/pokemon/이상해씨');
  }
  
  return (
    <Item onClick={handleClick}>
      <Header>
        <PokeNameChip />
      </Header>
      <Body>
        <Image src={TempImgUrl} alt="포켓몬 이미지"/>
      </Body>
      <Footer>
        <PokeMarkChip/>
      </Footer>
    </Item>
  );
}

const Item = styled.li`
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
    background-color: #9cd2b2;
    opacity: 0.8;
    transition: background-color 0s;
  }
`;
const Header = styled.section`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;
const Body = styled.section`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`;
const Image = styled.img`
  width: 180px;
  height: 180px;
`;
const Footer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;

export default PokeCard;