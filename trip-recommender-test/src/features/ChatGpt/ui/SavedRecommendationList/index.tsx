import { getRecommendation } from "@/supabase/api/recommendationApi";
import { useEffect, useState } from "react"
import { Error } from "trip-recommender";

export const SavedRecommendationList = () => {
  const [list, setList] = useState();
  const [error, setError] = useState();
  
  const getRecommendationList = async () => {
    try {
      const response = await getRecommendation();
      console.log(response);
    } catch (error) {
      setError(error);
    }
  }
  
  useEffect(() => {
    
  }, []);

  if(error) (
    <Error />
  )
  return (
    <></>
  );
}