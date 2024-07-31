import React, { useEffect, useState } from "react";
import { Container } from "./ChatLocation.styles";
import { usePlaceState } from "../../../../entities/map/lib/context/PlaceProvider";
import { ChatResponse, SelectList } from 'trip-recommender';


const OPEN_AI_KEY = process.env.OPEN_AI_KEY as string;

const ChatLocation = () => {
  const placeState = usePlaceState();
  const place = placeState.selectedPlace;
  const [selectedValues, setSelectedValues] = useState<{ who: string[], interest: string[] }>({ who: [], interest: [] });

  const handleSelection = (who: string[], interest: string[]) => {
    setSelectedValues({ who, interest });
  };

  useEffect(() => {
    setSelectedValues({ who: [], interest: [] });
  }, [place]);

  return (
    <Container>
      {
        place && selectedValues.who.length > 0 && selectedValues.interest.length > 0 ? (
          <ChatResponse keyword={`${place.title} ${selectedValues.who.join(", ")} ${selectedValues.interest.join(", ")}`} openAiKey={OPEN_AI_KEY} />
        ) : (
          <SelectList onSelection={handleSelection} />
        )
      }
    </Container>
  );
};

export default ChatLocation;