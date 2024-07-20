import React, { useState } from 'react';
import styled from '@emotion/styled';
import KakaoMapScriptLoader from '../features/map/ui/KakaoMapScriptLoader';
import DynamicMap from '../features/map/ui/DynamicMap';
import MapMarkerController from '../features/map/ui/MapMarkerController';
import SearchLocation from '../features/map/ui/SearchLocation';
import { PlaceType } from '../shared/lib/types';
import SidebarContainer from '../widgets/SidebarContainer';
import { PlaceProvider } from '../entities/map/lib/context/PlaceProvider';

const App = () => {
  const [places, setPlaces] = useState<PlaceType[]>([]);
  const [selectedPlaceId, setSelectedPlaceId] = useState("");

  return (
    <PlaceProvider>
      <KakaoMapScriptLoader>
        <DynamicMap>
          <MapMarkerController places={places} selectedPlaceId={selectedPlaceId} />
          <SidebarContainer places={places} setPlaces={setPlaces} setSelectedPlaceId={setSelectedPlaceId}/>
        </DynamicMap>
      </KakaoMapScriptLoader>
    </PlaceProvider>
  );
};

export default App;
