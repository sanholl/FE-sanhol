import { Container, Content, Item, List, Title } from "@/src/shared/ui/styles/SearchAndList.styles";
import { getRecommendation, getRecommendationByAuthId } from "@/supabase/api/recommendationApi";
import React, { useEffect, useState } from "react"
import { Error } from "trip-recommender";
import { toast, ToastContainer } from 'react-toastify';
import { useMyTripDispatch } from '../../../../entities/map/lib/context/PlaceAndMyTripProvider';
import { Tables } from "@/@types/database.types";

type MyTripList = Tables<'tr_recommendation'>;

interface MyTripListProps {
  myTripList: MyTripList[],
  setMyTripList: React.Dispatch<React.SetStateAction<MyTripList[]>>;
}

export const MyTripList = ({ myTripList, setMyTripList }: MyTripListProps) => {
  const [authId, setAuthId] = useState(1);
  const [error, setError] = useState(false);
  const myTripDispatch = useMyTripDispatch();
  
  const handleItemClick = (id: string) => {
    myTripDispatch({
      type: 'SET_MYTRIP',
      payload: id
    });
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const fetchTripList = async () => {
    try {
      const res = await getRecommendationByAuthId(authId);

      if(res) {
        setMyTripList(res);
      } else {
        setMyTripList([]);
      }
    } catch (error) {
      setError(true);
      toast.error("항목을 불러오는데 실패했습니다. 다시 시도해주세요.");
    }
  };

  useEffect(() => {
    fetchTripList();
  }, []);

  if(error) (
    <Error />
  )
  return (
    <Container>
      <List>
        {myTripList &&
          myTripList.map((item, index) => {
            return (
              <Item key={item.id} onClick={() => handleItemClick(item.id)}>
                <Title>{`[${item.title}]`}</Title>
                <Content>{formatDate(item.created_at)}</Content>
              </Item>
            )
          })
        }
      </List>
    </Container>
  );
}