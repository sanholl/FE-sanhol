import React, { useState } from 'react';
import styled from '@emotion/styled';
import KakaoMapScriptLoader from '../features/map/ui/KakaoMapScriptLoader';
import DynamicMap from '../features/map/ui/DynamicMap';
import MapMarkerController from '../features/map/ui/MapMarkerController';
import SearchLocation from '../widgets/KakaoMap/SearchLocation';
import RecommendationList from '../widgets/ChatGpt/RecommendationList';
import { PlaceType } from '../shared/lib/types';

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const ToggleButton = styled.button<{ isOpen: boolean }>`
  position: absolute;
  left: ${({ isOpen }) => (isOpen ? '20vw' : '0')};
  top: 10px;
  z-index: 2;
  transition: left 0.3s ease-in-out;
`;

const App = () => {
  const [places, setPlaces] = useState<PlaceType[]>([]);
  const [selectedPlaceId, setSelectedPlaceId] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <MainContainer>
      <KakaoMapScriptLoader>
        <DynamicMap>
          <MapMarkerController places={places} selectedPlaceId={selectedPlaceId} />
          <ToggleButton isOpen={isSidebarOpen} onClick={toggleSidebar}>
            {isSidebarOpen ? 'Hide' : 'Show'} Sidebar
          </ToggleButton>
          <SearchLocation
            isOpen={isSidebarOpen}
            onUpdatePlaces={(places) => {
              setPlaces(places);
              // // 추천 목록도 업데이트
              // setRecommendations(places.map(place => ({ title: place.title, description: place.address })));
            }}
            onSelect={(placeId) => {
              setSelectedPlaceId(placeId);
            }}
          />
          <RecommendationList />
        </DynamicMap>
      </KakaoMapScriptLoader>
    </MainContainer>
  );
};

export default App;
