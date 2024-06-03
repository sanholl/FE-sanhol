import { BrowserRouter } from "react-router-dom";
import PageHeader from "./Common/PageHeader";
import PageNavigator from "./PageNavigator";
import { store } from './Store';
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
