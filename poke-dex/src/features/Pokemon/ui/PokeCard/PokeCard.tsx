import styled from "@emotion/styled";
import PokeNameChip from "../../../../shared/ui/PokeNameChip/PokeNameChip";
import PokeMarkChip from "../../../../shared/ui/PokeMarkChip/PokeMarkChip";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PokemonDetailType, fetchPokemonDetail } from "../../../../entities/Pokemon/api/pokemonService";
import { PokeImageSkeletone } from "../../../../shared/ui/Icon/Icon";
import { useIntersectionObserver } from 'react-intersection-observer-hook';
import { useSelector } from 'react-redux';
import { RootState } from "../../../../shared/lib/Store";
import { Body, Footer, Header, Image, Item } from "./PokeCard.styles";

interface PokeCardProps {
  name: string
}

const PokeCard = (props: PokeCardProps) => {
  let navigate = useNavigate();
  const imageType = useSelector((state: RootState) => state.imageType.type);
  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;
  const [pokemon, setPokemon] = useState<PokemonDetailType | null>(null);
  
  const handleClick = () => {
    navigate(`/pokemon/${props.name}`);
  }

  useEffect(() => {
    if(!isVisible) return;
    
    (async () => {
      const detail = await fetchPokemonDetail(props.name);
      setPokemon(detail);
    })()
  }, [props.name, isVisible]);

  if(!pokemon) {
    return (
      <Item color={'#fff'} ref={ref}>
        <Header>
          <PokeNameChip name={'포켓몬'} color={'#ffca09'} id={0}/>
        </Header>
        <Body>
          <PokeImageSkeletone />
        </Body>
        <Footer>
          <PokeMarkChip />
        </Footer>
      </Item>
    )
  }
  
  return (
    <Item onClick={handleClick} color={pokemon.color} ref={ref}>
      <Header>
        <PokeNameChip name={pokemon.koreanName} id={pokemon.id} color={pokemon.color}/>
      </Header>
      <Body>
        <Image src={pokemon.images[imageType]} alt={pokemon.name}/>
      </Body>
      <Footer>
        <PokeMarkChip/>
      </Footer>
    </Item>
  );
}

export default PokeCard;