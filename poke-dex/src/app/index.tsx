import { BrowserRouter } from "react-router-dom";
import PageHeader from "../widgets/PageHeader/PageHeader";
import PageNavigator from "../pages";
import { store } from '../shared/lib/Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <PageHeader />
          <PageNavigator />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
