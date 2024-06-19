import { FC, PropsWithChildren, ReactNode, useReducer } from "react";
import { pokemonImageReducer } from "../../features/pokemon/model/pokemonImageReducer";
import { POKEMON_IMAGE_TYPE } from "../../shared/consts";
import { PokemonImageActionContext, PokemonImageStateContext, PokemonImageContext } from "../../features/pokemon/lib/context/useImageContext";

interface PokemonProviderProps {
  children: ReactNode;
}

export const PokemonProvider: FC<PropsWithChildren<PokemonProviderProps>> = ({children}) => {
  const [state, dispatch] = useReducer(pokemonImageReducer, {type: POKEMON_IMAGE_TYPE.FRONT_DEFAULT});

  return (
    <PokemonImageContext.Provider value={{state, dispatch}}>
      {children}
    </PokemonImageContext.Provider>
  );
}
// export const PokemonProvider: FC<PropsWithChildren<PokemonProviderProps>> = ({children}) => {
//   const [imageState, imageDispatch] = useReducer(pokemonImageReducer, {type: POKEMON_IMAGE_TYPE.FRONT_DEFAULT});

//   return (
//     <PokemonImageStateContext.Provider value={imageState}>
//       <PokemonImageActionContext.Provider value={imageDispatch}>
//         {children}
//       </PokemonImageActionContext.Provider>
//     </PokemonImageStateContext.Provider>
//   );
// }