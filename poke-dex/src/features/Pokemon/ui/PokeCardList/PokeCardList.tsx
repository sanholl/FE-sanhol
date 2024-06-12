import styled from "@emotion/styled";
import PokeCard from "../PokeCard/PokeCard";
import { useEffect, useState } from "react";
import { PokemonListResponseType, fetchPokemons } from "../../../../entities/Pokemon/api/pokemonService";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { List, Loading } from "./PokeCardList.styles";

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
      const morePokemons = await fetchPokemons(pokemons.next);

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
      const result = await fetchPokemons();
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
