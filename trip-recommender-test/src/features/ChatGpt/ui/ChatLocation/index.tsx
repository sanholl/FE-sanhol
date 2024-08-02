import React, { useEffect, useState } from "react";
import { Container, InnerContainer, SaveButton } from "./ChatLocation.styles";
import { usePlaceState } from "../../../../entities/map/lib/context/PlaceProvider";
import { ChatResponse, SelectList } from "trip-recommender";
import { FaDownload } from "react-icons/fa";
import { createRecommendation } from "supabase/api/recommendationApi";

const OPEN_AI_KEY = process.env.NEXT_PUBLIC_OPEN_AI_KEY as string;

const ChatLocation = () => {
  const placeState = usePlaceState();
  const place = placeState.selectedPlace;
  const [selectedValues, setSelectedValues] = useState<{ who: string[]; interest: string[] }>({
    who: [],
    interest: [],
  });
  const [response, setResponse] = useState();

  const handleSelection = (who: string[], interest: string[]) => {
    setSelectedValues({ who, interest });
    setResponse(undefined);
  };

  useEffect(() => {
    setSelectedValues({ who: [], interest: [] });
  }, [place]);

  return (
    <Container>
      {place && selectedValues.who.length > 0 && selectedValues.interest.length > 0 ? (
        <>
          <ChatResponse
            keyword={`${place.title} ${selectedValues.who.join(", ")} ${selectedValues.interest.join(", ")}`}
            openAiKey={OPEN_AI_KEY}
            response={response}
            setResponse={setResponse}
          />
          {response ? (
            <InnerContainer>
              <SaveButton onClick={() => createRecommendation(response)}>나의 일정으로 저장하기 <FaDownload /></SaveButton>
            </InnerContainer>
          ) : null}
        </>
      ) : (
        <SelectList onSelection={handleSelection} />
      )}
    </Container>
  );
};

export default ChatLocation;
