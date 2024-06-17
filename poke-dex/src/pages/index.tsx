import { Route, Routes } from "react-router-dom";
import { PokeCardList, PokemonDetail } from "../features/pokemon/ui";

const PageNavigator = () => {
  return (
    <Routes>
      <Route path="/" element={<PokeCardList />} />
      <Route path="/pokemon/:name" element={<PokemonDetail />} />
    </Routes>
  );
}

export default PageNavigator;