import { useEffect } from "react";

import { PlaceType } from "../../../../shared/lib/types";
import { useMap } from "../../../../entities/map/lib/context/useMap";
import MapMarker from "../../../../entities/map/ui/MapMarker";

interface MapMarkerControllerProps {
  places: PlaceType[]
  selectedPlaceId: string
}

const MapMarkerController = ({ places, selectedPlaceId }:MapMarkerControllerProps) => {
  const map = useMap();

  useEffect(() => {
    if(places.length < 1) {
      return;
    }

    const bounds = new window.kakao.maps.LatLngBounds();

    // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
    // LatLngBounds 객체에 좌표를 추가합니다
    places.forEach(place => {
      bounds.extend(place.position);
    });

    map.setBounds(bounds);
  }, [places])
  
  return (
    <>
      {
        places.map((place, index) => {
          return <MapMarker key={place.id} place={place} index={index} showInfo={selectedPlaceId === place.id}/>
        })
      }
    </>
  )
}

export default MapMarkerController;