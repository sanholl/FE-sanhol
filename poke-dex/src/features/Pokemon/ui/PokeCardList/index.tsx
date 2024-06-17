import PokeCard from "../PokeCard";
import { useEffect, useState } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { List, Loading } from "./PokeCardList.styles";
import { PokemonListResponseType, fetchPokemonsAPI } from "../../../../entities/Pokemon/api";

const PokeCardList = () => {
  const [pokemons, setPokemons] = useState<PokemonListResponseType>({
    count: 0,
    next: "",
    results: [],
  });

  const [infiniteref] = useInfiniteScroll({
    loading: false,
    hasNextPage: pokemons.next !== "",
    onLoadMore: async () => {
      const morePokemons = await fetchPokemonsAPI(pokemons.next);

      setPokemons({
        ...morePokemons,
        results: [...pokemons.results, ...morePokemons.results]
      })
    },
    disabled: false,
    rootMargin: "0px 0px 400px 0px",
  });

  useEffect(() => {
    (async () => {
      const result = await fetchPokemonsAPI();
      setPokemons(result);
    })();
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