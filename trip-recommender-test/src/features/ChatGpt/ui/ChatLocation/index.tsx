import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  const [response, setResponse] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const handleReset = () => {
    setSelectedValues({ who: [], interest: [] });
    setResponse('');
    setIsSaved(false);
  };
  const handleSelection = (who: string[], interest: string[]) => {
    setSelectedValues({ who, interest });
  };
  const handleSave = async () => {
    try {
      await createRecommendation(response);
      setIsSaved(true);
      toast.success("일정이 성공적으로 저장되었습니다!");
    } catch (error) {
      toast.error("일정 저장에 실패했습니다. 다시 시도해주세요.");
    }
  };

  useEffect(() => {
    handleReset();
  }, [place]);

  return (
    <Container>
      <ToastContainer />
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
              <SaveButton onClick={handleSave} disabled={isSaved}>
                {isSaved ? "저장되었습니다" : "나의 일정으로 저장하기"} <FaDownload />
              </SaveButton>
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