import PokeNameChip from "../../../../shared/ui/PokeNameChip/PokeNameChip";
import PokeMarkChip from "../../../../shared/ui/PokeMarkChip/PokeMarkChip";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PokeImageSkeletone } from "../../../../shared/ui/Icon/Icon";
import { useIntersectionObserver } from 'react-intersection-observer-hook';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from "../../../../entities/pokemon/model/store";
import { Body, Footer, Header, Image, Item } from "./PokeCard.styles";
// import { fetchPokemonDetail } from "../../../../entities/pokemon/model/store/pokemonDetailSlice";
import { PokemonDetailType, fetchPokemonDetailAPI } from "../../../../entities/pokemon/api/pokemonService";
import { useImageState } from "../../lib/context/useImageContext";

interface PokeCardProps {
  name: string
}

const PokeCard = (props: PokeCardProps) => {
  let navigate = useNavigate();
  // const dispatch = useAppDispatch();
  // const imageType = useSelector((state: RootState) => state.imageType.type);
  const imageState = useImageState();
  const imageType = imageState.type;
  // const { pokemonDetails } = useSelector((state: RootState) => state.pokemonDetail);
  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;
  const [pokemon, setPokemon] = useState<PokemonDetailType | null>(null);
  // const pokemon = pokemonDetails[props.name];
  
  const handleClick = () => {
    navigate(`/pokemon/${props.name}`);
  }

  useEffect(() => {
    if(!isVisible) return;
    
    // dispatch(fetchPokemonDetail(props.name))
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
        <Image src={pokemon.images[imageType]} alt={pokemon.name}/>
      </Body>
      <Footer>
        <PokeMarkChip/>
      </Footer>
    </Item>
  );
}

export default PokeCard;