import { createContext, useContext, Dispatch } from 'react';
import { ChangeImageTypeAction, ImageTypeState } from '../../model/pokemonImageReducer';


export const PokemonImageStateContext = createContext<ImageTypeState | null>(null);
export const PokemonImageActionContext = createContext<Dispatch<ChangeImageTypeAction> | null>(null);

export const useImageState = (): ImageTypeState => {
  const context = useContext(PokemonImageStateContext);
  if (!context) {
    throw new Error('cannot find useImageState');
  }
  return context;
};

export const useImageDispatch = (): Dispatch<ChangeImageTypeAction> => {
  const context = useContext(PokemonImageActionContext);
  if (!context) {
    throw new Error('cannot find useImageDispatch');
  }
  return context;
};
