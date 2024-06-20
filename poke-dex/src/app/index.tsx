import { BrowserRouter } from "react-router-dom";
import PageHeader from "../widgets/PageHeader";
import PageNavigator from "../pages";
import { PokemonProvider } from "./provider/PokemonProvier";


function App() {
  return (
    <>
      {/* <Provider store={store}> */}
      <PokemonProvider>
        <BrowserRouter>
          <PageHeader />
          <PageNavigator />
        </BrowserRouter>
      </PokemonProvider>
      {/* </Provider> */}
    </>
  );
}

export default App;
