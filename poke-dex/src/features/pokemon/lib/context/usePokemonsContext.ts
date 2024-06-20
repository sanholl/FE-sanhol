import { createContext, useContext, Dispatch } from 'react';
import { ChangeImageTypeAction, ImageTypeState } from '../../model/pokemonImageReducer';
import { ChangePokemonsAction, PokemonsState } from '../../model/pokemonReducer';


//ANCHOR - 최적화 전
interface PokemonContextProps {
  imageState: ImageTypeState;
  imageDispatch: Dispatch<ChangeImageTypeAction>;
  pokemonsState: PokemonsState;
  pokemonsDispatch: Dispatch<ChangePokemonsAction>;
}

export const PokemonContext = createContext<PokemonContextProps | null>(null);

export const useCombinedContext = (): PokemonContextProps => {
  const context = useContext(PokemonContext);
  if(!context) {
    throw new Error('cannot find useCombinedContext')
  }
  return context;
}



//ANCHOR - 최적화 후
export const PokemonsStateContext = createContext<PokemonsState | null>(null);
export const PokemonsActionContext = createContext<Dispatch<ChangePokemonsAction> | null>(null);
export const PokemonImageStateContext = createContext<ImageTypeState | null>(null);
export const PokemonImageActionContext = createContext<Dispatch<ChangeImageTypeAction> | null>(null);

export const usePokemonsState = (): PokemonsState => {
  const context = useContext(PokemonsStateContext);
  if (!context) {
    throw new Error('cannot find usePokemonsState');
  }
  return context;
};

export const usePokemonsDispatch = (): Dispatch<ChangePokemonsAction> => {
  const context = useContext(PokemonsActionContext);
  if (!context) {
    throw new Error('cannot find usePokemonsDispatch');
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