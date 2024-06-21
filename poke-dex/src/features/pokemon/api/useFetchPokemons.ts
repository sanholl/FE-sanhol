import { fetchPokemonsAPI } from "../../../entities/pokemon/api";
import { useCombinedContext, usePokemonsDispatch } from "../../../entities/pokemon/lib/context/usePokemonsContext";


export const useFetchPokemons = () => {
  // const { pokemonsDispatch } = useCombinedContext();
  const pokemonsDispatch = usePokemonsDispatch();

  const fetchPokemons = async (nextUrl?: string) => {
    pokemonsDispatch({ type: 'FETCH_POKEMONS_REQUEST' });
    try {
      const response = await fetchPokemonsAPI(nextUrl);
      pokemonsDispatch({ type: 'FETCH_POKEMONS_SUCCESS', payload: response });
    } catch (error: unknown) {
      if (error instanceof Error) {
        pokemonsDispatch({ type: 'FETCH_POKEMONS_FAILURE', payload: error.toString() });
      } else {
        pokemonsDispatch({ type: 'FETCH_POKEMONS_FAILURE', payload: 'An unknown error occurred' });
      }
    }
  };

  return fetchPokemons;
};