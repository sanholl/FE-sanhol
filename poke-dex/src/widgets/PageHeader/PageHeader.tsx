import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { POKEMON_IMAGE_TYPE } from "../../shared/consts/PokemonImageType";
import { RootState, useAppDispatch } from "../../entities/pokemon/model/Store";
import { ChangeEvent } from "react";
import { PokemonImageKeyType, changeImageType } from "../../entities/pokemon/model/Store/imageTypeSlice";
import { Header, Select, Title } from './PageHeader.styles';

const PageHeader = () => {
  const type = useSelector((state: RootState) => state.imageType.type);
  const dispatch = useAppDispatch();

  const handleChange = (e:ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeImageType({
      type: e.target.value as PokemonImageKeyType
    }))
  }
  
  return (
    <Header>
      <Title>
        <Link to="/">Pokémon</Link>
      </Title>
      <Select value={type} onChange={handleChange}>
        <option value={POKEMON_IMAGE_TYPE.OFFICIAL_ARTWORK}>Offical</option>
        <option value={POKEMON_IMAGE_TYPE.DREAM_WORLD}>DreamWorld</option>
        <option value={POKEMON_IMAGE_TYPE.FRONT_DEFAULT}>FrontDefault</option>
      </Select>
    </Header>
  );
}

export default PageHeader;