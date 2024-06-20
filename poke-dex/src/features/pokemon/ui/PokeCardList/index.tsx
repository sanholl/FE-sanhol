import PokeCard from "../PokeCard";
import { useEffect } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { List, Loading } from "./PokeCardList.styles";
import { useCombinedContext } from "../../lib/context/usePokemonsContext";
import { useFetchPokemons } from "../../api/useFetchPokemons";

const PokeCardList = () => {
  const fetchPokemons = useFetchPokemons();
  const {pokemonsState} = useCombinedContext();
  const pokemons = pokemonsState.pokemons;

  const [infiniteref] = useInfiniteScroll({
    loading: false,
    hasNextPage: pokemons.next !== "",
    onLoadMore: () => {
      fetchPokemons(pokemons.next);
    },
    disabled: false,
    rootMargin: "0px 0px 400px 0px",
  });

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <>
      <List>
        {pokemons.results.map((pokemon, index) => {
          return (
            <PokeCard
              key={`${pokemon.name}_${index}`}
              name={pokemon.name}
            />
          );
        })}
      </List>
      <Loading ref={infiniteref}>
        Loading
      </Loading>
    </>
  );
};

export default PokeCardList;