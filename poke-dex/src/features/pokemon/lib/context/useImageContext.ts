import { createContext, useContext, Dispatch } from 'react';
import { ChangeImageTypeAction, ImageTypeState } from '../../model/pokemonImageReducer';

interface ImageTypeContextProps {
  state: ImageTypeState;
  dispatch: Dispatch<ChangeImageTypeAction>;
}

export const PokemonImageContext = createContext<ImageTypeContextProps | null>(null);

export const PokemonImageStateContext = createContext<ImageTypeState | null>(null);
export const PokemonImageActionContext = createContext<Dispatch<ChangeImageTypeAction> | null>(null);

export const useImageType = (): ImageTypeContextProps => {
  const context = useContext(PokemonImageContext);
  if (!context) {
    throw new Error('annot find useImageType');
  }
  return context;
};

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
