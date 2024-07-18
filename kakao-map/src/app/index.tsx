import { useState } from "react";
import DynamicMap from "../features/map/ui/DynamicMap";
import KakaoMapScriptLoader from "../features/map/ui/KakaoMapScriptLoader";
import { PlaceType } from "../shared/lib/types";
import MapMarkerController from "../features/map/ui/MapMarkerController";
// import SearchLocation from "../widgets/SearchLocation";
import { TestButton, SearchLocation } from "trip-recommender";


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
          <TestButton label={'Test Button'} onClick={() => console.log('Click')}/>
        </DynamicMap>
      </KakaoMapScriptLoader>
    </>
  )
}

export default App;