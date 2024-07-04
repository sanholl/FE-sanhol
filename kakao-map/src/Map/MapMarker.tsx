import { useLayoutEffect, useMemo } from "react";
import { PlaceType } from "./mapTypes";
import { useMap } from "../hooks/useMap";

interface MapMarkerProps {
  place: PlaceType
}

const MapMarker = (props:MapMarkerProps) => {
  const map = useMap();
  
  const marker = useMemo(() => {
    const marker = new kakao.maps.Marker({
      position: props.place.position
    });

    marker.setMap(map);
    return marker;
  }, []);

  //NOTE - 레이아웃이 정렬되기 전에 먼저 선제적으로 발동되는 부분
  useLayoutEffect(() => {
    marker.setMap(map); // 지도 위에 마커를 표시

    return () => {
      marker.setMap(null);
    }
  }, [map]);
  
  return (
    <></>
  )
}

export default MapMarker;