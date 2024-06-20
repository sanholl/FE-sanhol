import React from "react";
import { PokemonDetailType } from "../../entities/pokemon/api";
import { Image } from "./PokeImage.styles";
import { useCombinedContext, useImageState } from "../../features/pokemon/lib/context/usePokemonsContext";

interface PokeImageProps {
  pokemon: PokemonDetailType
}

const PokeImage = (props: PokeImageProps) => {
  const imageState = useImageState();
  // const {imageState} = useCombinedContext();
  const imageType = imageState.type;

  return (
    <Image src={props.pokemon.images[imageType]} alt={props.pokemon.name}/>
  );
}

export default React.memo(PokeImage);
// export default PokeImage;
