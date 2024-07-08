import ReactDOM from 'react-dom';
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { PlaceType } from '../../../../shared/lib/types'; 
import { useMap } from "../../lib/context/useMap";
import styled from '@emotion/styled';
import { Address, Message, Title } from './MapMarker.styles';

interface MapMarkerProps {
  place: PlaceType
  index: number
  showInfo?: boolean
}

// 마커 이미지 url, 스프라이트 이미지를 씁니다
const MARKER_IMAGE_URL = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png';

const MapMarker = (props:MapMarkerProps) => {
  const map = useMap();
  const container = useRef(document.createElement('div'));

  const infoWindow = useMemo(() => {
    container.current.style.position = 'absolute';
    container.current.style.bottom = '40px';
    
    return new kakao.maps.CustomOverlay({
      position: props.place.position,
      content: container.current,
      map: map
    })
  }, []);
  
  // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
  const marker = useMemo(() => {
    const imageSize = new kakao.maps.Size(36, 37);  // 마커 이미지의 크기
    const imgOptions =  {
      spriteSize : new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
      spriteOrigin : new kakao.maps.Point(0, (props.index * 46) + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
      offset: new kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
    };
    const markerImage = new kakao.maps.MarkerImage(MARKER_IMAGE_URL, imageSize, imgOptions);
    
    const marker = new kakao.maps.Marker({
      map: map,
      position: props.place.position,
      image: markerImage 
    });

    marker.setMap(map);

    kakao.maps.event.addListener(marker, 'click', function() {
      map.setCenter(props.place.position);
      map.setLevel(4, {
        animate: true
      });
      infoWindow.setMap(map);
    })
    
    return marker;
  }, []);

  //NOTE - 레이아웃이 정렬되기 전에 먼저 선제적으로 발동되는 부분
  useLayoutEffect(() => {
    marker.setMap(map); // 지도 위에 마커를 표시

    return () => {
      marker.setMap(null);
    }
  }, [map]);

  useEffect(() => {
    if(props.showInfo) {
      infoWindow.setMap(map);
      return;
    }

    return () => {
      infoWindow.setMap(null);
    }
  }, [props.showInfo])
  
  return (
    container.current ? 
    ReactDOM.createPortal(
      <Message onClick={() => {
        infoWindow.setMap(null);
      }}>
        <Title>{props.place.title}</Title>
        <Address>{props.place.address}</Address>
      </Message>
      , container.current) : null
  )
}



export default MapMarker;