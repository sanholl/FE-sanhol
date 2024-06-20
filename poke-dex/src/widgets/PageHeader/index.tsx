import { Link } from "react-router-dom";
import { POKEMON_IMAGE_TYPE } from "../../shared/consts/PokemonImageType";
import React, { ChangeEvent } from "react";
import { Header, Select, Title } from './PageHeader.styles';
import { PokemonImageKeyType } from '../../features/pokemon/model/pokemonImageReducer';
import { useCombinedContext, useImageDispatch, useImageState } from "../../features/pokemon/lib/context/usePokemonsContext";


const PageHeader = () => {
  const imageState = useImageState();
  const imageDispatch = useImageDispatch();
  // const {imageState, imageDispatch} = useCombinedContext();

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