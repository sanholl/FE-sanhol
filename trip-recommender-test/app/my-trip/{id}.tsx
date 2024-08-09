"use client"

import { Database } from '@/@types/database.types';
import { getRecommendationById } from '@/supabase/api/recommendationApi';
import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

interface MyTripProps {
  id: number;
}

type TripRecommendation = Database['public']['Tables']['tr_recommendation']['Row'];

const MyTrip: FC<PropsWithChildren<MyTripProps>> = ({ id }) => {
  //TODO - res가 배열 형태로 오기 때문에 이 부분 수정이 필요
  const [tripList, setTripList] = useState<TripRecommendation[] | null>(null);

  const fetchTripList = async () => {
    try {
      const res = await getRecommendationById(id);
      setTripList(res);
    } catch (error) {
      toast.error("항목을 불러오는데 실패했습니다. 다시 시도해주세요.");
    }
  }

  // 컴포넌트 마운트 시 데이터 로드
  useEffect(() => {
    fetchTripList();
  }, [id]);

  return (
    <div>
      {/* 데이터가 로드되지 않은 경우 로딩 메시지 표시 */}
      {!tripList ? (
        <p>Loading...</p>
      ) : (
        <div>
          {/* tripList 데이터 렌더링 */}
          {/* 예시로 JSON을 문자열로 출력 */}
          <pre>{JSON.stringify(tripList, null, 2)}</pre>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default MyTrip;