import { useState } from "react";
import { DynamicMap, KakaoMapScriptLoader, MapMarkerController, PlaceType, SearchLocation } from "trip-recommender";


const App = () => {
  const [places, setPlaces] = useState<PlaceType[]>([]);
  const [selectedPlaceId, setSelectedPlaceId] = useState('');
  const KAKAO_MAP_APP_KEY = import.meta.env["VITE_KAKAO_MAP_APP_KEY"];

  return (
    <>
      <KakaoMapScriptLoader kakaoMapAppKey={KAKAO_MAP_APP_KEY}>
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