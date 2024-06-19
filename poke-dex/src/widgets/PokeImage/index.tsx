import React from "react";
import { PokemonDetailType } from "../../entities/pokemon/api";
import { useImageState, useImageType } from "../../features/pokemon/lib/context/useImageContext";
import { Image } from "./PokeImage.styles";

interface PokeImageProps {
  pokemon: PokemonDetailType
}

const PokeImage = (props: PokeImageProps) => {
  // const imageState = useImageState();
  const imageState = useImageType().state;
  const imageType = imageState.type;

  return (
    <Image src={props.pokemon.images[imageType]} alt={props.pokemon.name}/>
  );
}

export default React.memo(PokeImage);
