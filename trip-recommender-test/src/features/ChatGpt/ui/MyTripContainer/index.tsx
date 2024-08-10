import React, { useEffect, useState } from "react";
import { chatResponse } from "../../api/ChatGptApi";
import { Container, Title, List } from "./MyTripContainer.styles";
import { ChatLoading, Error } from "trip-recommender";
import { Tables } from "@/@types/database.types";
import { getRecommendationById } from "@/supabase/api/recommendationApi";
import { MyTripItem } from "../MyTripItem";
import { ChatResponseType } from "@/@types/types";

type MyTrip = Tables<"tr_recommendation">;

interface MyTripContainerProps {
  myTripId: string;
}

export const MyTripContainer = ({ myTripId }: MyTripContainerProps) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [myTrip, setMyTrip] = useState<ChatResponseType | null>(null); // 수정된 부분

  const fetchMyTrip = async () => {
    try {
      const res = await getRecommendationById(myTripId);
  
      if (res?.recommendation) {
        const recommendationData = res.recommendation as unknown as ChatResponseType; // 먼저 unknown으로 변환 후 타입 단언
        setMyTrip(recommendationData);
      } else {
        setError("나의 일정을 가져오는 중 문제가 발생했습니다.");
      }
    } catch (error) {
      console.error(error);
      setError("나의 일정을 가져오는 중 문제가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchMyTrip();
  }, [myTripId]);

  return (
    <Container>
      <List>
        <Title>TRIP RECOMMENDER</Title>
        {isLoading ? (
          <ChatLoading />
        ) : error ? (
          <Error message={error}/>
        ) : (
          myTrip && (
            <MyTripItem myTrip={myTrip}/>
          )
        )}
      </List>
    </Container>
  );
};