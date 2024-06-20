import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { PokeImageSkeletone } from "../../../../shared/ui/Icon/Icon";
import { useIntersectionObserver } from 'react-intersection-observer-hook';
import { PokeMarkChip, PokeNameChip } from "../../../../shared/ui";
import { PokemonDetailType, fetchPokemonDetailAPI } from "../../../../entities/pokemon/api";
import { Body, Footer, Header, Item } from "./PokeCard.styles";
import PokeImage from "../../../../widgets/PokeImage";

interface PokeCardProps {
  name: string
}

const PokeCard = (props: PokeCardProps) => {
  let navigate = useNavigate();
  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;
  const [pokemon, setPokemon] = useState<PokemonDetailType | null>(null);
  
  const handleClick = () => {
    navigate(`/pokemon/${props.name}`);
  }

  useEffect(() => {
    if(!isVisible) return;
    
    (async () => {
      const detail = await fetchPokemonDetailAPI(props.name);
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
        {/* <Image src={pokemon.images[imageType]} alt={pokemon.name}/> */}
        <PokeImage pokemon={pokemon}/>
      </Body>
      <Footer>
        <PokeMarkChip/>
      </Footer>
    </Item>
  );
}

export default React.memo(PokeCard);