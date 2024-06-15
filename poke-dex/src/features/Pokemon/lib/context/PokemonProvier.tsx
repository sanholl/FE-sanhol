import { Dispatch, FC, PropsWithChildren, ReactNode, useContext, useReducer } from "react";
import { createContext } from "react";
import { ChangeImageTypeAction, ImageTypeState, pokemonImageReducer } from "../../model/pokemonImageReducer";
import { POKEMON_IMAGE_TYPE } from "../../../../shared/consts";

interface PokemonProviderProps {
  children: ReactNode;
}

interface ImageTypeContextProps {
  state: ImageTypeState;
  dispatch: Dispatch<ChangeImageTypeAction>;
}

export const PokemonImageContext = createContext<ImageTypeContextProps | undefined>(undefined);

const PokemonProvider: FC<PropsWithChildren<PokemonProviderProps>> = ({children}) => {
  const [state, dispatch] = useReducer(pokemonImageReducer, {type: POKEMON_IMAGE_TYPE.FRONT_DEFAULT});

  return (
    <PokemonImageContext.Provider value={{state, dispatch}}>
      {children}
    </PokemonImageContext.Provider>
  );
}

const useImageType = (): ImageTypeContextProps => {
  const context = useContext(PokemonImageContext);
  if (!context) {
    throw new Error('annot find useImageType');
  }
  return context;
};

export { PokemonProvider, useImageType };