import { useState } from "react";
import DynamicMap from "../features/map/ui/DynamicMap";
import KakaoMapScriptLoader from "../features/map/ui/KakaoMapScriptLoader";
import SearchLocation from "../widgets/SearchLocation";
import { PlaceType } from "../shared/lib/types";
import MapMarkerController from "../features/map/ui/MapMarkerController";

const App = () => {
  const [places, setPlaces] = useState<PlaceType[]>([]);
  const [selectedPlaceId, setSelectedPlaceId] = useState('');
  
  return (
    <>
      <KakaoMapScriptLoader>
        <DynamicMap>
          <MapMarkerController places={places} selectedPlaceId={selectedPlaceId}/>
          <SearchLocation onUpdatePlaces={(places) => {
            setPlaces(places)
          }} onSelect={(placeId) => {
            setSelectedPlaceId(placeId)
          }}/>
        </DynamicMap>
      </KakaoMapScriptLoader>
    </>
  )
}

export default App;