import DynamicMap from "./Map/DynamicMap";
import KakaoMapScriptLoader from "./Map/KakaoMapScriptLoader";
import SearchLocation from "./Map/SearchLocation";

const App = () => {
  return (
    <>
      <KakaoMapScriptLoader>
        <DynamicMap />
        <SearchLocation />
      </KakaoMapScriptLoader>
    </>
  )
}

export default App;