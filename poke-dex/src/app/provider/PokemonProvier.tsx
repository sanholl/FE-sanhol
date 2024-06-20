import { FC, PropsWithChildren, ReactNode, useReducer } from "react";
import { pokemonImageReducer } from "../../features/pokemon/model/pokemonImageReducer";
import { POKEMON_IMAGE_TYPE } from "../../shared/consts";
import { PokemonContext, PokemonImageActionContext, PokemonImageStateContext, PokemonsActionContext, PokemonsStateContext } from "../../features/pokemon/lib/context/usePokemonsContext";
import { PokemonsState, pokemonsReducer } from "../../features/pokemon/model/pokemonReducer";

interface PokemonProviderProps {
  children: ReactNode;
}

const initialState: PokemonsState = {
  pokemons: {
    count: 0,
    next: '',
    results: []
  },
  loading: false,
  error: null
}

// export const PokemonProvider: FC<PropsWithChildren<PokemonProviderProps>> = ({children}) => {
//   const [imageState, imageDispatch] = useReducer(pokemonImageReducer, {type: POKEMON_IMAGE_TYPE.FRONT_DEFAULT});
//   const [pokemonsState, pokemonsDispatch] = useReducer(pokemonsReducer, initialState);

//   return (
//     <PokemonContext.Provider value={{imageState, imageDispatch, pokemonsState, pokemonsDispatch}}>
//       {children}
//     </PokemonContext.Provider>
//   );
// }

export const PokemonProvider: FC<PropsWithChildren<PokemonProviderProps>> = ({children}) => {
  const [imageState, imageDispatch] = useReducer(pokemonImageReducer, {type: POKEMON_IMAGE_TYPE.FRONT_DEFAULT});
  const [pokemonsState, pokemonsDispatch] = useReducer(pokemonsReducer, initialState);

  return (
    <PokemonsStateContext.Provider value={pokemonsState}>
      <PokemonsActionContext.Provider value={pokemonsDispatch}>
        <PokemonImageStateContext.Provider value={imageState}>
          <PokemonImageActionContext.Provider value={imageDispatch}>
            {children}
          </PokemonImageActionContext.Provider>
        </PokemonImageStateContext.Provider>
      </PokemonsActionContext.Provider>
    </PokemonsStateContext.Provider>
  );
}