import React, { Children, FC, PropsWithChildren, ReactNode, useEffect, useRef, useState } from "react";
import { KakaoMapContext } from "../../../../entities/map/lib/context/useMap";
import { Container, Map } from "./DynamicMap.styles";

interface DynamicMapProps {
  children: ReactNode
}

const DynamicMap: FC<PropsWithChildren<DynamicMapProps>> = ({children}) => {
  const [map, setMap] = useState<kakao.maps.Map>();
  const kakaoMapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(!kakaoMapRef.current) {
      return;
    }
    const targetPoind = new kakao.maps.LatLng(33.450701, 126.570667);
    const options = {
      center: targetPoind,
      level: 3
    }

    setMap(new window.kakao.maps.Map(kakaoMapRef.current, options));
  }, []);

  return (
    <>
      <Container>
        <Map ref={kakaoMapRef}/>
      </Container>
      {
        map ? (
          <KakaoMapContext.Provider value={map}>
            {children}
          </KakaoMapContext.Provider>
        ) : (
          <div>
            지도 정보를 가져오는데 실패하였습니다.
          </div>
        )
      }
    </>
  )
}

export default DynamicMap;