import { Route, Routes } from "react-router-dom";
import PokeCardList from "./List/PokeCardList";
import PokemonDetail from "./Detail/PokemonDetail";

const PageNavigator = () => {
  return (
    <Routes>
      <Route path="/" element={<PokeCardList />} />
      <Route path="/pokemon/:name" element={<PokemonDetail />} />
    </Routes>
  );
}

export default PageNavigator;