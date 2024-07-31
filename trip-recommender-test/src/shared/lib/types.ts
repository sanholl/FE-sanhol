export interface PlaceType {
  id: string
  position: kakao.maps.LatLng
  title: string
  address: string
}
export interface TripActivity {
  placeType: string;
  name: string;
  description: string;
  location: string;
  recommendedMenu?: string;
  link: string;
}

export interface RecommendationType {
  tripType: string;
  tripStyle: string;
  tripActivities: TripActivity[];
}

export interface ChatResponseType {
  destination: string;
  recommendation: RecommendationType;
}