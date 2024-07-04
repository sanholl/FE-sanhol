import { useState } from "react";
import DynamicMap from "./Map/DynamicMap";
import KakaoMapScriptLoader from "./Map/KakaoMapScriptLoader";
import SearchLocation from "./Map/SearchLocation";
import { PlaceType } from "./Map/mapTypes";
import MapMarkerController from "./Map/MapMarkerController";

const App = () => {
  const [places, setPlaces] = useState<PlaceType[]>([]);
  
  return (
    <>
      <KakaoMapScriptLoader>
        <DynamicMap>
          <MapMarkerController places={places} />
          <SearchLocation onUpdatePlaces={(places) => {
            setPlaces(places)
          }} />
        </DynamicMap>
      </KakaoMapScriptLoader>
    </>
  )
}

export default App;