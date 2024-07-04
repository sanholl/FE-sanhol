import { FC, PropsWithChildren, ReactNode, useEffect, useState } from "react"

const KAKAO_MAP_SCRIPT_ID = 'kakao-map-script';
const KAKAO_MAP_APP_KEY = 'cf6755d442f3a5a40e967e9bfb651ad5';

interface KakaoMapScriptLoaderProps {
  children: ReactNode
}

const KakaoMapScriptLoader: FC<PropsWithChildren<KakaoMapScriptLoaderProps>> = ({children}) => {
  const [mapScriptLoaded, setMapScriptLoaded] = useState(false);
  useEffect(() => {
    // <script></script>
    const script = document.createElement('script');
    script.id = KAKAO_MAP_SCRIPT_ID;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_APP_KEY}&libraries=services&autoload=false`;
    script.onload = () => {
      window.kakao.maps.load(() => {
        setMapScriptLoaded(true);
      });
    }
    script.onerror = () => {
      setMapScriptLoaded(false);
    }

    document.getElementById('root')?.appendChild(script);
  }, []);
  
  return (
    <>
    {
      mapScriptLoaded ? children : (
        <div>
          지도를 가져오는 중입니다.
        </div>
      )
    }
    </>
  )
}

export default KakaoMapScriptLoader;