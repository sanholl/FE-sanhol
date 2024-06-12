import PokeMarkChip from "../../../../shared/ui/PokeMarkChip/PokeMarkChip";
import { PokemonDetailType, fetchPokemonDetailAPI } from "../../../../entities/Pokemon/api/pokemonService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokeImageSkeletone } from "../../../../shared/ui/Icon/Icon";
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from "../../../../shared/lib/Store";
import { Body, Container, Divider, Footer, Image, ImageContainer, Table, TableHeader, TableRow } from "./PokemonDetail.styles";
import { fetchPokemonDetail } from "../../../../shared/lib/Store/pokemonDetailSlice";

const PokemonDetail = () => {
  const { name } = useParams();
  const imageType = useSelector((state: RootState) => state.imageType.type);
  const { pokemonDetails } = useSelector((state: RootState) => state.pokemonDetail);
  const pokemon = name ? pokemonDetails[name] : null;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(!name) return;
    
    dispatch(fetchPokemonDetail(name));
  }, [name]);

  if(!name || !pokemon) {
    return (
      <Container>
        <ImageContainer>
          <PokeImageSkeletone />
        </ImageContainer>
        <Divider />
        <Footer>
          <PokeMarkChip />
        </Footer>
      </Container>
    )
  }
  
  return (
    <Container>
      <ImageContainer>
        <Image src={pokemon.images[imageType]} alt={pokemon.koreanName} />
      </ImageContainer>
      <Divider />
      <Body>
        <h2>기본 정보</h2>
        <Table>
          <tbody>
            <TableRow>
              <TableHeader>번호</TableHeader>
              <td>{pokemon.id}</td>
            </TableRow>
            <TableRow>
              <TableHeader>이름</TableHeader>
              <td>{ `${pokemon.koreanName} (${pokemon.name})` }</td>
            </TableRow>
            <TableRow>
              <TableHeader>타입</TableHeader>
              <td>{pokemon.types.toString()}</td>
            </TableRow>
            <TableRow>
              <TableHeader>키</TableHeader>
              <td>{pokemon.height} m</td>
            </TableRow>
            <TableRow>
              <TableHeader>몸무게</TableHeader>
              <td>{pokemon.weight} kg</td>
            </TableRow>
          </tbody>
        </Table>

        <h2>능력치</h2>
        <Table>
          {
            pokemon.baseStats.map(stat => {
              return (
                <TableRow key={stat.name}>
                  <TableHeader>{stat.name}</TableHeader>
                  <td>{stat.value}</td>
                </TableRow>
              )
            })
          }
        </Table>
      </Body>
      <Footer>
        <PokeMarkChip/>
      </Footer>
    </Container>
  );
}

export default PokemonDetail;