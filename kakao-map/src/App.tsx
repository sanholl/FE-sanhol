import DynamicMap from "./Map/DynamicMap";
import KakaoMapScriptLoader from "./Map/KakaoMapScriptLoader";

const App = () => {
  return (
    <>
      <KakaoMapScriptLoader>
        <DynamicMap />
      </KakaoMapScriptLoader>
    </>
  )
}

export default App;