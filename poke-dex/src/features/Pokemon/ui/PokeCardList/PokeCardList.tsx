import styled from "@emotion/styled";
import PokeCard from "../PokeCard/PokeCard";
import { useEffect, useState } from "react";
import { fetchPokemonsAPI } from "../../../../entities/Pokemon/api/pokemonService";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { List, Loading } from "./PokeCardList.styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../../../../entities/pokemon/model/Store/pokemonSlice";
import { RootState, useAppDispatch } from "../../../../entities/pokemon/model/Store";

const PokeCardList = () => {
  const dispatch = useAppDispatch();
  const { pokemons } = useSelector((state: RootState) => state.pokemons);

  const [infiniteref] = useInfiniteScroll({
    loading: false,
    hasNextPage: pokemons.next !== "",
    onLoadMore: async () => {
      dispatch(fetchPokemons(pokemons.next));
    },
    disabled: false,
    rootMargin: "0px 0px 400px 0px",
  });

  useEffect(() => {
    dispatch(fetchPokemons());
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
