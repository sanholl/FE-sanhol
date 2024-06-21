import { PokemonListResponseType } from "../../api";


type FetchPokemonsRequestAction = {
  type: 'FETCH_POKEMONS_REQUEST';
};

type FetchPokemonsSuccessAction = {
  type: 'FETCH_POKEMONS_SUCCESS';
  payload: PokemonListResponseType;
};

type FetchPokemonsFailureAction = {
  type: 'FETCH_POKEMONS_FAILURE';
  payload: string;
};

export type ChangePokemonsAction = 
  | FetchPokemonsRequestAction
  | FetchPokemonsSuccessAction
  | FetchPokemonsFailureAction;

export type PokemonsState = {
  pokemons: PokemonListResponseType;
  loading: boolean;
  error: string | null
}

export const pokemonsReducer = (state: PokemonsState, action: ChangePokemonsAction) => {
  switch (action.type) {
    case 'FETCH_POKEMONS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    
    case 'FETCH_POKEMONS_SUCCESS':
      return {
        ...state,
        loading: false,
        pokemons: state.pokemons.results.length > 0
          ? {
              ...action.payload,
              results: [...state.pokemons.results, ...action.payload.results],
            }
          : action.payload
      };
    
    case 'FETCH_POKEMONS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default: 
      return state
  }
}
