import React, { useState } from "react";
import SearchLocation from "../../features/map/ui/SearchLocation";
import { Container, RemoveButton, ToggleButton } from "./SidebarContainer.styles";
import { PlaceType } from "../../../@types/types";
import { usePlaceDispatch, usePlaceState } from "../../entities/map/lib/context/PlaceProvider";
import ChatLocation from "../../features/ChatGpt/ui/ChatLocation";

interface SidebarContainerProps {
  places: PlaceType[];
  setPlaces: React.Dispatch<React.SetStateAction<PlaceType[]>>;
  setSelectedPlaceId: React.Dispatch<React.SetStateAction<string>>;
}

const SidebarContainer = ({ places, setPlaces, setSelectedPlaceId }: SidebarContainerProps) => {
  const [recommendations, setRecommendations] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const placeState = usePlaceState();
  const place = placeState.selectedPlace;
  const placeDispatch = usePlaceDispatch();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Container isOpen={isSidebarOpen} isRecommendationOpen={!!place}>
        <SearchLocation
          onUpdatePlaces={(places) => {
            setPlaces(places);
          }}
          onSelect={(placeId) => {
            setSelectedPlaceId(placeId);
          }}
        />
        { place && <ChatLocation /> }
      </Container>
      <RemoveButton 
        isRecommendationOpen={!!place}
        isOpen={isSidebarOpen}
        onClick={() =>  placeDispatch({ type: 'CLEAR_PLACE' })}
      >
        X
      </RemoveButton>
      <ToggleButton
        isOpen={isSidebarOpen}
        isRecommendationOpen={!!place}
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? "<" : ">"}
      </ToggleButton>
    </>
  );
};

export default SidebarContainer;