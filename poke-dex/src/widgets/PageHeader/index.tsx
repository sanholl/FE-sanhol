// import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { POKEMON_IMAGE_TYPE } from "../../shared/consts/PokemonImageType";
// import { RootState, useAppDispatch } from "../../entities/pokemon/model/Store";
import React, { ChangeEvent } from "react";
import { Header, Select, Title } from './PageHeader.styles';
import { PokemonImageKeyType } from '../../features/pokemon/model/pokemonImageReducer';
import { useImageDispatch, useImageState, useImageType } from "../../features/pokemon/lib/context/useImageContext";


const PageHeader = () => {
  // const type = useSelector((state: RootState) => state.imageType.type);
  // const dispatch = useAppDispatch();
  // const state = useImageState();
  // const dispatch = useImageDispatch();
  const state = useImageType().state;
  const dispatch = useImageType().dispatch;

  const handleChange = (e:ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: 'imageType', payload: e.target.value as PokemonImageKeyType
    })
  }
  
  return (
    <Header>
      <Title>
        <Link to="/">Pokémon</Link>
      </Title>
      <Select value={state.type} onChange={handleChange}>
        <option value={POKEMON_IMAGE_TYPE.OFFICIAL_ARTWORK}>Offical</option>
        <option value={POKEMON_IMAGE_TYPE.DREAM_WORLD}>DreamWorld</option>
        <option value={POKEMON_IMAGE_TYPE.FRONT_DEFAULT}>FrontDefault</option>
      </Select>
    </Header>
  );
}

export default React.memo(PageHeader);