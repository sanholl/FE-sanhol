import { Route, Routes } from "react-router-dom";
import PokeCardList from "../features/Pokemon/ui/PokeCardList/PokeCardList";
import PokemonDetail from "../features/Pokemon/ui/PokeDetail/PokemonDetail";

const PageNavigator = () => {
  return (
    <Routes>
      <Route path="/" element={<PokeCardList />} />
      <Route path="/pokemon/:name" element={<PokemonDetail />} />
    </Routes>
  );
}

export default PageNavigator;