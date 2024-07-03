import { Link } from "react-router-dom";
import { POKEMON_IMAGE_TYPE } from "../../shared/consts/PokemonImageType";
import React, { ChangeEvent } from "react";
import { Header, Select, Title } from './PageHeader.styles';

import { useCombinedContext, useImageDispatch, useImageState } from "../../entities/pokemon/lib/context/usePokemonsContext";
import { PokemonImageKeyType } from "../../entities/pokemon/model/reducer/pokemonImageReducer";


const PageHeader = () => {
  // const {imageState, imageDispatch} = useCombinedContext();
  const imageState = useImageState();
  const imageDispatch = useImageDispatch();

  const handleChange = (e:ChangeEvent<HTMLSelectElement>) => {
    imageDispatch({
      type: 'imageType', payload: e.target.value as PokemonImageKeyType
    })
  }
  
  return (
    <Header>
      <Title>
        <Link to="/">Pokémon</Link>
      </Title>
      <Select value={imageState.type} onChange={handleChange}>
        <option value={POKEMON_IMAGE_TYPE.OFFICIAL_ARTWORK}>Offical</option>
        <option value={POKEMON_IMAGE_TYPE.DREAM_WORLD}>DreamWorld</option>
        <option value={POKEMON_IMAGE_TYPE.FRONT_DEFAULT}>FrontDefault</option>
      </Select>
    </Header>
  );
}

// export default React.memo(PageHeader);
export default PageHeader;
